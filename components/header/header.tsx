import { Button } from "../ui/button"

export function Header() {
  const menuOption = [
    {
      text: "Produtos",
      link: "/",
    },
    {
      text: "Blog",
      link: "/",
    },
    {
      text: "Conteúdos",
      link: "/",
    },
    {
      text: "Quem Somos",
      link: "/",
    },
  ]
  return (
    <>
      <header className="flex items-center justify-between fixed mt-8 p-2 rounded-full z-50 bg-zinc-50 gap-4 border">
        <h2
          style={{ fontFamily: 'HeadLineLogo, sans-serif' }}
          className="font-bold mx-4 text-2xl text-foreground hover:text-violet-500 transition-all cursor-pointer">
          velus
        </h2>
        <nav className="flex items-center justify-center">
          {menuOption.map((item, index) => (
            <Button className="font-bold rounded-full text-foreground hover:text-violet-500 transition-all hover:bg-violet-100" size={"lg"} variant={"ghost"} key={index}>{item.text}</Button>
          ))}
        </nav>
        <Button className="bg-violet-500 hover:text-foreground font-bold rounded-full hover:bg-transparent hover:ring-2 ring-foreground" size={"lg"}>Contate-nos</Button>
      </header >
    </>
  )
}