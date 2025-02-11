import { LogIn, LayoutDashboard, Users, GraduationCap } from "lucide-react";

import { USER_ROLE } from "../../constant";
export const getSidebarLinks = (userRole) => {
  switch (userRole) {
    case USER_ROLE.MASTER_ADMIN:
      return [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/school-management/dashboard",
        },
        {
          name: "Students",
          icon: GraduationCap,
          path: "/school-management/students",
        },
        {
          name: "Teachers",
          icon: Users,
          path: "/school-management/teachers",
        },
        {
          name: "Admins",
          icon: Users,
          path: "/school-management/admins",
        },
        { name: "Logout", icon: Users, path: "/logout" },
      ];
    case USER_ROLE.ADMIN:
      return [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/school-management/dashboard",
        },
        {
          name: "Students",
          icon: GraduationCap,
          path: "/school-management/students",
        },
        {
          name: "Teachers",
          icon: Users,
          path: "/school-management/teachers",
        },
        { name: "Logout", icon: Users, path: "/logout" },
      ];

    case USER_ROLE.TEACHER:
      return [
        {
          name: "Dashboard",
          icon: LayoutDashboard,
          path: "/school-management/dashboard",
        },
        {
          name: "Assignment",
          icon: Users,
          path: "/school-management/assigments",
        },
        {
          name: "Students",
          icon: GraduationCap,
          path: "/school-management/students",
        },

        { name: "Logout", icon: Users, path: "/logout" },
      ];
    case USER_ROLE.STUDENT:
      return [
        {
          name: "Assignment",
          icon: Users,
          path: "/school-management/student/assignments",
        },
        {
          name: "Result",
          icon: Users,
          path: "/school-management/student/results",
        },
        { name: "Logout", icon: Users, path: "/logout" },
      ];
    default:
      return [];
  }
};
