// src/app/api/locations/route.ts

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
  try {

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute<any[]>('SELECT id, gps, regione, nome, indirizzo, localita, telefono, email, web FROM mad_locator');
    await connection.end();

    const data = rows.map((row) => {
      const [latitude, longitude] = row.gps
        ? row.gps.split(',').map((coord: string) => parseFloat(coord.trim()))
        : [null, null];

      return {
        id: row.id,
        latitude,
        longitude,
        regione: row.regione,
        nome: row.nome,
        indirizzo: row.indirizzo,
        localita: row.localita,
        telefono: row.telefono,
        email: row.email,
        web: row.web
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Errore API /locations:', error);
    return NextResponse.json({ error: 'Errore interno', message: (error as Error).message }, { status: 500 });
  }
}
