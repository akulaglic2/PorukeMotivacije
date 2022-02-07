import { generateMedia } from "styled-media-query";

const Fonts = {
  FontFamily: {
    mainRegular: "Proxima Nova Regular",
    mainBlack: "Proxima Nova Black",
    mainBold: "Proxima Nova Bold",
    mainThin: "Proxima Nova Thin",
    mainExtrabold: "Proxima Nova Extrabold",
    secondLevelCategoriesRegular: "Myriad Pro Regular",
    secondLevelCategoriesLight: "Myriad Pro Light",
    secondLevelCategoriesSemibold: "Myriad Pro Semibold",
    cardsFontLight: "Open Sans Light",
    cardsFontRegular: "Open Sans Regular",
    cardsFontSemibold: "Open Sans Semibold"
  },

  FontSize: {
    miniscule: "10px",
    tiny: "12px",
    small: "14px",
    medium: "16px",
    big: "18px",
    large: "20px",
    veryLarge: "22px",
    extraLarge: "32px",
    huge: "38px"
  }
};

const Colors = {
  MineShaft: "#005496",
  Astral: "#3770B0",

  MineShaftDark: "#303030",
  AltoLighter: "#D8D8D8",
  AltoLight: "#D7D7D7",
  Alto: "#DBDBDB",
  DustyGray: "#9B9B9B", //TEXT
  SilverChalice: "#A9A9A9",
  Alabaster: "#F7F7F7",
  Mercury: "#E4E4E4",
  Tundora: "#4A4A4A",

  GoldSand: "#E4BC82",
  GoldSandDark: "#BB9664",
  GoldTesla: "#9B8C6B",

  white: "#ffffff",
  black: "#000000",

  OutlineGray: "#c9c9c9", // OUTLINE
  DimGray: "#eaeaea", // GRey SHADOW

  SuccessGreen: "#6da732",
  WhiteSmoke: "#f5f5f5",
  NobelGrey: "#979797",
  Zambezi: "#606060",
  DarkGray: "#acacac",
  Gray30: "#4d4d4d",
  LabelLightGrey: "#b0b0b0",
  BorderLightGrey: "#e8e8e8",
  MediumDarkLabelGrey: "#a4a4a4",
  DarkLabelGrey: "#6a6a6a",
  DarkerLabelGrey: "#4b4b4b",

  ClubMembers: "#b7b7b7",
  OrdinaryConsultants: "#777c90",
  TeamManagers: "#b2a943",
  SeniorManagers: "#00af50",

  OrderCanceled: "#3E8ACC",
  OrderPlaced: "#FAA61A",
  OrderPaid: "#89BE4E",

  ProductPrice: "#2C97DE",
  OrderDetailsBackground: "#F1F0F0",

  ErrorRed: "#E74C3C",
  Red: "#ED3024",
  AcceptGreen: "#8ecc95",

  StrongYellow: "#b9b029",
  VividLimeGreen: "#d0c62c",

  BioptronBlue: "#015D84",
  CobaltBlue: "#00529b",

  PromotionGold: "#e4be8b",
  PromotionGray: "#c3c3c3",

  userRoles: {
    clubMember: "#BFBFBF",
    ordinaryConsultant: "#7D8497",
    teamManager: "#D0C54D",
    managerConsultant: "#D0C54D",
    seniorManager: "#80C551",
    divisionManager: "#5E88B9",
    areaManager: "#9CC2E4",
    regionalManager: "#4DCFFF",
    // dark gradient color
    clubMemberDark: "#B7B7B7",
    ordinaryConsultantDark: "#7D8497",
    teamManagerDark: "#B2A943",
    managerConsultantDark: "#B2A943",
    seniorManagerDark: "#00AF50",
    divisionManagerDark: "#44749F",
    areaManagerDark: "#9CC2E4",
    regionalManagerDark: "#00AFEF"
  },
  userRolesShort: {
    CM: "#BFBFBF",
    OC: "#7D8497",
    CC: "#7D8497",
    TM: "#D0C54D",
    MC: "#D0C54D",
    SM: "#80C551",
    DM: "#5E88B9",
    AM: "#9CC2E4",
    RM: "#4DCFFF",
    JM: "#D0C54D"
  }
};

const Size = {
  contentMaxWidth: {
    xl: "1920px",
    lg: "1440px",
    md: "992px",
    sm: "576px"
  },
  contentMinWidth: {
    xxl: "1921px",
    xl: "1441px",
    lg: "993px",
    md: "577px",
    sm: "1px"
  },
  contentPadding: {
    sm: "0 10px",
    md: "0 30px"
  },
  contentVerticalMargin: {
    sm: "10px 0",
    md: "30px 0"
  },
  contentSpacing: {
    sm: "10px",
    md: "30px"
  },
  headingSpacingHorizontal: "1rem",
  extraLargeFontFrame: "90px"
};

const media = generateMedia({
  xs: "0px", // from 0 to 575
  sm: "576px", // from 576 to 767
  md: "768px", // from 768 to 991
  lg: "992px", // from 992 to 1199
  xl: "1200px" // from 1200 to endless
});

export { Fonts, Colors, Size, media };
