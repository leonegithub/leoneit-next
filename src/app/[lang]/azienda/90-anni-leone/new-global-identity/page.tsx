import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Identity({
  params,
}: {
  params: Promise<{ lang: "it" | "en" }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className="container pt-4">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/912230285?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Leone new global identity"
        />
      </div>
      <h1 className="blue font-bold pt-4 pb-2">
        {dict["90anni"].new_global_identity2.title1}
      </h1>
      <p>{dict["90anni"].new_global_identity2.paragraph1}</p>
      <div className="text-center">
        {/* <Image src={studioLogo} alt="studio-logo"></Image> */}
      </div>
      <p>{dict["90anni"].new_global_identity2.paragraph2}</p>
      <h1 className="blue font-bold pt-4 pb-2">
        {dict["90anni"].new_global_identity2.title2}
      </h1>
      <p>{dict["90anni"].new_global_identity2.paragraph3}</p>
      <div className="storia-loghi text-center">
        {/* <Image src={storiaLoghi} alt="storia-loghi"></Image> */}
      </div>
    </div>
  );
}
