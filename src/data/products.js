// Product data sourced from the live Paris Perfumes site (www.parisperfumes.cl).
// Names, brands, prices and images are real; images load from Jumpseller's CDN
// so each photo matches its product exactly.
export const products = [
  {
    id: 1,
    name: "Acqua di Gio Pour Homme EDT 100ml",
    brand: "Armani",
    gender: "Hombre",
    price: 77900,
    oldPrice: 121900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7853527/acquadi_gio_homme_lujo.jpg?1583189293",
    url: "https://www.parisperfumes.cl/acqua-di-gio-pour-homme-de-armani-edt-100ml-hombre",
  },
  {
    id: 2,
    name: "CK IN2U Him EDT 150ml",
    brand: "Calvin Klein",
    gender: "Hombre",
    price: 21900,
    oldPrice: 39900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7391928/CK-IN2U-Men_150ml.jpg?1631720745",
    url: "https://www.parisperfumes.cl/ck-in2-u-him-de-calvin-klein-edt-150ml-hombre",
  },
  {
    id: 3,
    name: "Euphoria EDP 100ml",
    brand: "Calvin Klein",
    gender: "Mujer",
    price: 44900,
    oldPrice: 69900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7584971/euphoria_100ml_Edp.jpg?1580418325",
    url: "https://www.parisperfumes.cl/euphoria-de-calvin-klein-edp-100ml-mujer",
  },
  {
    id: 4,
    name: "Fantasy EDP 100ml",
    brand: "Britney Spears",
    gender: "Mujer",
    price: 22900,
    oldPrice: 39900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7582458/fantasy-britney-spears.jpg?1580404877",
    url: "https://www.parisperfumes.cl/fantasy-de-britney-spears-edp-100ml-mujer",
  },
  {
    id: 5,
    name: "Be Delicious EDP 100ml",
    brand: "Donna Karan",
    gender: "Mujer",
    price: 39900,
    oldPrice: 89900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7589612/be_delicious_100ml.jpg?1580493852",
    url: "https://www.parisperfumes.cl/be-delicious-de-donna-karan-edp-100ml-mujer",
  },
  {
    id: 6,
    name: "Be Tempted EDP 100ml",
    brand: "Donna Karan",
    gender: "Mujer",
    price: 28900,
    oldPrice: 82900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7589648/be_tempted_100ml.jpg?1642440966",
    url: "https://www.parisperfumes.cl/be-tempted-de-donna-karan-edp-100ml-mujer",
  },
  {
    id: 7,
    name: "Club de Nuit Intense EDT 105ml",
    brand: "Armaf",
    gender: "Hombre",
    price: 30900,
    oldPrice: 47900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7390004/club_nuit_intense.jpg?1602686988",
    url: "https://www.parisperfumes.cl/club-de-nuit-intense-de-armaf-edt-105ml-hombre",
  },
  {
    id: 8,
    name: "L.12.12 Blanc EDT 100ml",
    brand: "Lacoste",
    gender: "Hombre",
    price: 35900,
    oldPrice: 74900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7400552/lacoste_blanc.jpg?1644938517",
    url: "https://www.parisperfumes.cl/l1212-blanc-de-lacoste-edt-100ml-hombre",
  },
  {
    id: 9,
    name: "Black XS for Her EDP 80ml",
    brand: "Paco Rabanne",
    gender: "Mujer",
    price: 59900,
    oldPrice: 84900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/7635641/black_xs_edp_80ml.jpg?1599021747",
    url: "https://www.parisperfumes.cl/black-xs-for-her-de-paco-rabanne-edp-80ml-mujer",
  },
  {
    id: 10,
    name: "Jimmy Choo Man Intense EDT 100ml",
    brand: "Jimmy Choo",
    gender: "Hombre",
    price: 34900,
    oldPrice: 54900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/9101666/jimmy_choo_intense.jpg?1642447130",
    url: "https://www.parisperfumes.cl/jimmy-choo-man-intense-de-jimmy-choo-edt-100ml-hombre",
  },
  {
    id: 11,
    name: "Man In Black EDP 100ml",
    brand: "Bvlgari",
    gender: "Hombre",
    price: 106900,
    oldPrice: 149900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/10949269/bvlgari_in_black_100ml.jpg?1639250187",
    url: "https://www.parisperfumes.cl/bvlgari-man-in-black-de-bvlgari-edp-100ml-hombre",
  },
  {
    id: 12,
    name: "Club de Nuit Milestone EDP 105ml",
    brand: "Armaf",
    gender: "Unisex",
    price: 27900,
    oldPrice: 79900,
    badge: "Oferta",
    image:
      "https://cdnx.jumpseller.com/parisperfumes/image/11884907/milestone_armaf.jpeg?1601149978",
    url: "https://www.parisperfumes.cl/club-de-nuit-milestone-de-armaf-edp-105ml-unisex",
  },
];

export const formatCLP = (value) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);

export default products;
