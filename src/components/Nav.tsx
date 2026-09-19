import { NavLink } from "react-router";
import {
  Calendar,
  CarFront,
  ClipboardClock,
  Home,
  Package,
  ScanLine,
  Settings,
} from "lucide-react";

export function DesktopNav() {
  return (
    <nav className="hidden lg:block col-[1/3] relative">
      <div className="sticky left-0 top-0">
        <h2 className="py-2.5">AutoCross</h2>
        <ul className="pt-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-sm py-2.5 w-full border-b ${isActive ? "text-(--text-main) border-(--text-main)" : "text-(--text-sub)  border-(--bg)"}`
              }>
              <Home />
              <span>홈</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/vehicle"}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-sm py-2.5 w-full border-b ${isActive ? "text-(--text-main) border-(--text-main)" : "text-(--text-sub)  border-(--bg)"}`
              }>
              <CarFront />
              <span>차량 관리</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/product"}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-sm py-2.5 w-full border-b ${isActive ? "text-(--text-main) border-(--text-main)" : "text-(--text-sub)  border-(--bg)"}`
              }>
              <Package />
              <span>부품 관리</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/calendar"}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-sm py-2.5 w-full border-b ${isActive ? "text-(--text-main) border-(--text-main)" : "text-(--text-sub)  border-(--bg)"}`
              }>
              <Calendar />
              <span>일정 관리</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/log"}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-sm py-2.5 w-full border-b ${isActive ? "text-(--text-main) border-(--text-main)" : "text-(--text-sub)  border-(--bg)"}`
              }>
              <ClipboardClock />
              <span>입출고 기록</span>
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center gap-2.5 text-sm py-2.5 w-full border-b border-(--bg) text-(--text-sub)">
              <ScanLine />
              <span>바코드 조회</span>
            </button>
          </li>
          <li>
            <NavLink
              to={"/settings"}
              className={({ isActive }) =>
                `flex items-center gap-2.5 text-sm py-2.5 w-full border-b ${isActive ? "text-(--text-main) border-(--text-main)" : "text-(--text-sub)  border-(--bg)"}`
              }>
              <Settings />
              <span>설정</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function MobileNav() {
  return (
    <nav className="block fixed left-0 bottom-0 w-full bg-(--bg) lg:hidden shadow-[0px_-2px_10px_rgba(0,0,0,0.25)]">
      <ul className="flex">
        <li className="flex-1 py-2.5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-2.5 text-sm ${isActive ? "text-(--text-main)" : "text-(--text-sub)"}`
            }>
            <Home />
            <span>홈</span>
          </NavLink>
        </li>
        <li className="flex-1 py-2.5">
          <NavLink
            to={"/vehicle"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-2.5 text-sm ${isActive ? "text-(--text-main)" : "text-(--text-sub)"}`
            }>
            <CarFront />
            <span>차량 관리</span>
          </NavLink>
        </li>
        <li className="flex-1 py-2.5">
          <NavLink
            to={"/product"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-2.5 text-sm ${isActive ? "text-(--text-main)" : "text-(--text-sub)"}`
            }>
            <Package />
            <span>부품 관리</span>
          </NavLink>
        </li>
        <li className="flex-1 py-2.5">
          <NavLink
            to={"/log"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-2.5 text-sm ${isActive ? "text-(--text-main)" : "text-(--text-sub)"}`
            }>
            <ClipboardClock />
            <span>입출고 기록</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
