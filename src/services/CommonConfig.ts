import type { ISideNavBarInterface } from "./Interfaces/CommonInterface";

export default class CommonConfig {
  public static readonly companyTitle: string = "Trip Labs";
  public static readonly homePageNavbarConfig: Array<string> = [
    "Home",
    "About Us",
    "Blog",
  ];
  public static readonly sideNavBarConfig: Array<ISideNavBarInterface> = [
    {
      title: "Dashboard",
      icon: "bi bi-speedometer2",
      link: "/dashboard",
    },
    {
      title: "Photos",
      icon: "bi bi-image",
      link: "/photos",
    },
  ];
}
