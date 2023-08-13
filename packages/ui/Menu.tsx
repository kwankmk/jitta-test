interface menu {
  key: string
  title: string
}

export const Menu = ({ menus }: { menus: menu[] }) => {
  return (
    <div className="h-16">
      <ul className="flex items-center justify-end leading-[60px]">
        {menus.map((menu) => (
          <li
            key={menu.key}
            className="transition cursor-pointer px-5 border-t-2 border-transparent hover:border-primary text-site-text-color hover:text-primary"
          >
            <a className="text-sm">{menu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
