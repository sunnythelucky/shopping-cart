import styles from "./Sidebar.module.css";

const MENUS = [
	{ name: "Menu 1", value: "Link 1", id: 1, url: "https://www.w3schools.com/" },
	{ name: "Menu 2", value: "Link 2", id: 2, url: "https://www.w3schools.com/" },
	{ name: "Menu 3", value: "Link 3", id: 3, url: "https://www.w3schools.com/" },
];

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			{MENUS.map((menu) => {
				return (
					<a href={menu.url} className={styles.menu} key={menu.id}>
						{menu.value}
					</a>
				);
			})}
		</div>
	);
}
