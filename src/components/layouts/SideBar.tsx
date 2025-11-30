// import { HomeOutlined } from "@ant-design/icons";

// type NavItem = {
//   name: string;
//   icon: React.ReactNode;
//   path?: string;
//   subItems?: { name: string; path: string; new?: boolean }[];
// };

// const navItems: NavItem[] = [
//   {
//     icon: <HomeOutlined />,
//     name: "Dashboard",
//     subItems: [{ name: "Ecommerce", path: "/" }],
//   },
//   {
//     icon: <HomeOutlined />,
//     name: "Calendar",
//     path: "/calendar",
//   },
//   {
//     icon: <HomeOutlined />,
//     name: "User Profile",
//     path: "/profile",
//   },
//   {
//     name: "Forms",
//     icon: <HomeOutlined />,
//     subItems: [{ name: "Form Elements", path: "/form-elements" }],
//   },
//   {
//     name: "Tables",
//     icon: <HomeOutlined />,
//     subItems: [{ name: "Basic Tables", path: "/basic-tables" }],
//   },
//   {
//     name: "Pages",
//     icon: <HomeOutlined />,
//     subItems: [
//       { name: "Blank Page", path: "/blank" },
//       { name: "404 Error", path: "/error-404" },
//     ],
//   },
// ];

// const SideBar = () => {
//   return (
//     <div style={styles.sidebar}>
//       {navItems.map((item, index) => (
//         <div key={index} style={styles.navItem}>
//           <div style={styles.navHeader}>
//             <span style={styles.icon}>{item.icon}</span>
//             <span>{item.name}</span>
//           </div>

//           {/* Render sub items */}
//           {item.subItems && (
//             <div style={styles.subMenu}>
//               {item.subItems.map((sub, i) => (
//                 <div key={i} style={styles.subItem}>
//                   {sub.name}{" "}
//                   {sub.new && <span style={styles.newTag}>NEW</span>}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   sidebar: {
//     width: "240px",
//     background: "#1f1f1f",
//     color: "#fff",
//     padding: "16px",
//     height: "100vh",
//     boxSizing: "border-box",
//   },
//   navItem: {
//     marginBottom: "20px",
//   },
//   navHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   icon: {
//     fontSize: "18px",
//   },
//   subMenu: {
//     marginLeft: "28px",
//     marginTop: "8px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "6px",
//   },
//   subItem: {
//     fontSize: "14px",
//     cursor: "pointer",
//     opacity: 0.8,
//   },
//   newTag: {
//     background: "red",
//     color: "#fff",
//     padding: "2px 6px",
//     borderRadius: "4px",
//     fontSize: "10px",
//     marginLeft: "6px",
//   },
// };

// export default SideBar;
