import { useRouter } from "next/router";
import Link from "next/link";

function NavItem({ icon, href = "/" }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        style={{ color: router.pathname === href ? "#2F76A9" : "#c2c2c2" }}
        className="p-2 text-xl sm:text-2xl"
      >
        {icon}
      </a>
    </Link>
  );
}

export default NavItem;
