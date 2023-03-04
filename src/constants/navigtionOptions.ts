import { NavOption } from 'components/navbar';

export const navigationOptions: Array<NavOption> = [
	{availableOnPath: "/$", text: "Try it out!", link: "/api/auth/login", isPrivate: false},
	{availableOnPath: "home/*", text: "Logout", link: "/api/auth/logout", isPrivate: true}
];

