/* eslint-disable react/prop-types */

const Subnav = ({ subNavbarData }) => {
  const pathname = window.location.pathname;
  const navId = pathname.slice(1, pathname.length);

  return (
    <nav className="flex justify-center items-center py-4 border-b-[1px]  ">
      <ul className="flex justify-center items-center gap-8">
        {subNavbarData.map((navItem) => {
          console.log("navItem.id---->", navItem.id);
          return (
            <li
              key={navItem.id}
              className=" hover:text-primary"
              style={{
                fontWeight: navId == navItem.id ? "bold" : "",
                color: navId == navItem.id ? "Orange" : "",
              }}
            >
              {navItem.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Subnav;
