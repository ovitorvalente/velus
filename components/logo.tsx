export function Logo() {
  const Lyrics = [
    {
      text: "V",
      effect: "group-hover:-translate-y-2 group-hover:text-orange-500 ",
    },
    {
      text: "E",
      effect: "group-hover:-translate-y-1 group-hover:text-orange-500/90",
    },
    {
      text: "L",
      effect: "group-hover:translate-y-0 group-hover:text-orange-500/80",
    },
    {
      text: "U",
      effect: "group-hover:translate-y-1 group-hover:text-orange-500/70",
    },
    {
      text: "S",
      effect: "group-hover:translate-y-2 group-hover:text-orange-500/60",
    },
    {
      text: ".",
      effect: "group-hover:translate-y-3 group-hover:text-orange-500/50",
    },
    {
      text: ".",
      effect:
        "group-hover:translate-y-4 group-hover:text-orange-500/40 group-hover:-translate-x-10",
    },
    {
      text: ".",
      effect:
        "group-hover:translate-y-5 group-hover:text-orange-500 group-hover:-translate-x-20 group-hover:animate-pulse",
    },
  ];
  return (
    <>
      <a href="#home" className="flex items-center justify-center gap-1 group">
        {Lyrics.map((item, index) => (
          <span
            key={index}
            className={`text-center font-black ${item.effect} transition-all delay-300 duration-500`}
          >
            {item.text}
          </span>
        ))}
      </a>
    </>
  );
}
