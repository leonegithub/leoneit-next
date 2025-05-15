import { getDictionary } from "../../dictionaries";
import DownloadsClient from "./DownloadClient";
import "./style.css";

async function Downloads({ params }: { params: { lang: "it" | "en" } }) {
    const { lang } = params;
    const dict = await getDictionary(lang); // <-- qui serve await!

    return <DownloadsClient dict={dict} lang={lang} />;
}

export default Downloads;