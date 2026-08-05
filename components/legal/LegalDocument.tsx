export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "sub"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "link"; href: string; label: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  intro: string[];
  sections: LegalSection[];
};

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className="font-sans text-base leading-[1.6] text-neutral-800">{block.text}</p>;
    case "sub":
      return (
        <p className="font-sans text-sm font-bold tracking-wide text-navy-700 uppercase">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="flex list-disc flex-col gap-1 pl-5">
          {block.items.map((item) => (
            <li key={item} className="font-sans text-base leading-[1.6] text-neutral-800">
              {item}
            </li>
          ))}
        </ul>
      );
    case "link":
      return (
        <a
          href={block.href}
          className="font-sans text-base leading-[1.6] text-accent hover:underline"
        >
          {block.label}
        </a>
      );
  }
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="bg-white px-6 py-20 md:px-[118px] md:py-28">
      <div className="mx-auto flex max-w-[760px] flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-[40px] font-semibold leading-[1.1] text-navy-900 sm:text-[48px]">
            {doc.title}
          </h1>
          {doc.intro.map((text) => (
            <p key={text} className="font-sans text-base leading-[1.6] text-neutral-800">
              {text}
            </p>
          ))}
        </div>

        {doc.sections.map((section) => (
          <div key={section.heading} className="flex flex-col gap-3">
            <h2 className="font-sans text-xl font-bold text-navy-900">{section.heading}</h2>
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}
