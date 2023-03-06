import { NavOption } from "src/components/navbar";

/* Constant used by navbar to logically render navigation options
 Each navoption uses regex on availableOnPath field which is evaluated
 against the path of the current page to render or not to render the link.
 The isPrivate field is the predicate for whether or not to show only to authenticated users.
*/
export const navigationOptions: Array<NavOption> = [
  {
    availableOnPath: "/$",
    text: "Try it out!",
    link: "/api/auth/login",
    isPrivate: false,
  },
  {
    availableOnPath: "home/*",
    text: "Logout",
    link: "/api/auth/logout",
    isPrivate: true,
  },
];
