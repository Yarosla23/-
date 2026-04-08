import type { StaticImageData } from "next/image";

import childrenImage from "@/media/children.jpg";
import dimaImagePrimary from "@/media/dima1.jpg";
import dimaImageSecondary from "@/media/dima2.jpg";
import evaImagePrimary from "@/media/eva1.jpg";
import evaImageSecondary from "@/media/eva2.jpg";
import logoImage from "@/media/logo.jpg";
import kidsPriceImage from "@/media/price_children.jpg";
import kidsScheduleImage from "@/media/sheduded_children.jpg";
import merchPantsDetailDarkImage from "@/media/merch/red.jpg";
import merchPantsDetailLightImage from "@/media/merch/white.jpg";
import merchPantsImagePrimary from "@/media/merch/photo_2026-04-09_00-46-35.jpg";
import merchPantsImageSecondary from "@/media/merch/photo_2026-04-09_00-46-31.jpg";
import merchPantsImageTeam from "@/media/merch/photo_2026-04-09_00-46-40.jpg";
import merchPantsImageThird from "@/media/merch/photo_2026-04-09_00-46-42.jpg";
import merchPantsImageFourth from "@/media/merch/photo_2026-04-09_00-46-49.jpg";
import merchPantsImageFifth from "@/media/merch/photo_2026-04-09_00-46-52.jpg";
import merchPantsImageSixth from "@/media/merch/photo_2026-04-09_00-47-01.jpg";
import yanaImagePrimary from "@/media/yana1.jpg";
import yanaImageSecondary from "@/media/yana2.jpg";

export const siteSettings = {
  name: "Танцевальная Душа",
  tagline: "Студия танцев",
  description:
    "Современная танцевальная студия на русском языке: детские группы, танцевальный лагерь, мерч и сильная визуальная атмосфера.",
  signUpNote: "Старт занятий с 27 апреля, запись осуществляется в лс",
  logo: logoImage,
} as const;

export const mainNavigation = [
  { href: "/", label: "Главная" },
  { href: "/kids", label: "Детские группы" },
  { href: "/camp", label: "Танцевальный лагерь" },
  { href: "/merch", label: "Мерч" },
] as const;

export const socialLinks = [
  { href: "https://t.me/miss_luzina", label: "Telegram" },
  { href: "https://vk.com/yanaluzina", label: "VK" },
] as const;

export const footerCredit = {
  label: "@yarik_and",
  url: "https://t.me/yarik_and",
} as const;

export const contactLines = [
  "Запись осуществляется в лс",
  "Москва",
  "Танцевальная Душа",
] as const;

export const studioHighlights = [
  "детские и подростковые группы",
  "мягкая, но собранная подача",
  "комьюнити, движение и стиль",
] as const;

// Меняй тексты главной и карточек направлений здесь.
export const danceDirections = [
  {
    slug: "hip-hop-mix",
    title: "Хип-хоп микс",
    description:
      "Энергичное направление, сочетающее базу, грув, подачу и современные элементы уличной хореографии.",
    image: dimaImagePrimary,
  },
  {
    slug: "hip-hop-girlie",
    title: "Хип-хоп герли",
    description:
      "Женственная, яркая и уверенная подача, пластика, акценты, характер и стиль.",
    image: yanaImagePrimary,
  },
  {
    slug: "contemporary",
    title: "Контемп",
    description:
      "Техника, пластика, эмоции, работа с телом, музыкальностью и выразительностью.",
    image: evaImagePrimary,
  },
] as const;

// Меняй карточки преподавателей и их персональные страницы здесь.
export const coaches = [
  {
    slug: "dima-belov",
    name: "Дима Белов",
    role: "Хип-хоп микс",
    shortBio:
      "Педагог по направлению хип хоп микс. Дает сильную базу, грув и современную подачу.",
    longBio:
      "Дима помогает ученикам почувствовать ритм, уверенность и свободу движения. На занятиях много внимания уделяется базе, музыкальности и собранной подаче.",
    experience: "Танцует более 6 лет, преподает около года.",
    image: dimaImagePrimary,
    gallery: [dimaImagePrimary, dimaImageSecondary],
  },
  {
    slug: "eva-kabajda",
    name: "Ева Кабайда",
    role: "Контемп",
    shortBio:
      "Педагог по направлению контемп. Работает с техникой, пластикой и выразительностью.",
    longBio:
      "Ева ведет занятия через качество движения, телесную осознанность и музыкальность. В фокусе техника, работа с корпусом и эмоциональная выразительность.",
    experience: "Танцует около 5 лет, преподает около полугода.",
    image: evaImagePrimary,
    gallery: [evaImagePrimary, evaImageSecondary],
  },
  {
    slug: "yana-luzina",
    name: "Яна Лузина",
    role: "Руководитель студии",
    shortBio:
      "Руководитель и мама нашей танцевальной студии. Формирует атмосферу, стиль и визуальный характер проекта.",
    longBio:
      "Яна отвечает за развитие студии, визуальную культуру и общую атмосферу пространства. Это человек, который задает тон проекту и собирает вокруг него комьюнити.",
    experience: "Танцует более 10 лет, преподает около 3 лет.",
    image: yanaImagePrimary,
    gallery: [yanaImagePrimary, yanaImageSecondary],
  },
] as const;

// Меняй расписание главной здесь.
// Структура: день -> занятия -> время / направление / педагог / возраст.
export const homeSchedule = [
  {
    day: "Понедельник",
    sessions: [
      { time: "16:00", direction: "Контемп", teacher: "Ева и Лиза", age: "9–12 лет" },
      { time: "18:00", direction: "Контемп", teacher: "Ева и Лиза", age: "12–15 лет" },
    ],
  },
  {
    day: "Вторник",
    sessions: [
      { time: "16:00", direction: "Хип-хоп микс", teacher: "Дима", age: "12–15 лет" },
      { time: "18:00", direction: "Хип-хоп герли", teacher: "Яна", age: "12–15 лет" },
    ],
  },
  {
    day: "Среда",
    sessions: [
      { time: "16:00", direction: "Контемп", teacher: "Ева и Лиза", age: "9–12 лет" },
      { time: "18:00", direction: "Контемп", teacher: "Ева и Лиза", age: "12–15 лет" },
    ],
  },
  {
    day: "Четверг",
    sessions: [
      { time: "16:00", direction: "Хип-хоп микс", teacher: "Дима", age: "12–15 лет" },
      { time: "18:00", direction: "Хип-хоп герли", teacher: "Яна", age: "12–15 лет" },
    ],
  },
  {
    day: "Пятница",
    sessions: [
      { time: "17:00", direction: "Контемп", teacher: "Ева", age: "12–15 лет" },
      { time: "18:30", direction: "Открытая хореография", teacher: "Команда студии", age: "13+" },
    ],
  },
  {
    day: "Суббота",
    sessions: [
      { time: "12:00", direction: "Практика / съемка", teacher: "Студия", age: "Все группы" },
      { time: "14:00", direction: "Дополнительный класс", teacher: "По анонсу", age: "По набору" },
    ],
  },
] as const;

// Меняй детские группы здесь.
export const kidsGroups = [
  {
    id: "hip-hop-dima",
    title: "Хип хоп",
    teachers: "Дима",
    schedule: "вторник/четверг",
    time: "16:00",
    age: "12–15 лет",
    image: dimaImageSecondary,
  },
  {
    id: "contemp-junior",
    title: "Контемп",
    teachers: "Ева и Лиза",
    schedule: "понедельник/среда",
    time: "16:00",
    age: "9–12 лет",
    image: evaImageSecondary,
  },
  {
    id: "contemp-teen",
    title: "Контемп",
    teachers: "Ева и Лиза",
    schedule: "понедельник/среда",
    time: "18:00",
    age: "12–15 лет",
    image: childrenImage,
  },
] as const;

export const kidsLessonFocus = [
  "база",
  "техника",
  "хореографии",
  "физическая подготовка",
  "растяжка",
] as const;

export const kidsMedia = {
  hero: childrenImage,
  schedulePoster: kidsScheduleImage,
  pricingPoster: kidsPriceImage,
} as const;

// Меняй структуру лагеря здесь: даты, стоимость, локацию, программу и условия участия.
export const campInfo = {
  title: "Танцевальный лагерь",
  description:
    "Танцевальный лагерь — это пространство движения, творчества, новых знакомств и ярких впечатлений. Здесь участники смогут погрузиться в атмосферу танца, развития и командной энергии.",
  audience: [
    "для тех, кто любит танец и хочет провести время в сильной творческой среде",
    "для детей и подростков, которым важны движение, общение и командный опыт",
    "для тех, кто хочет совмещать обучение, отдых и яркие впечатления",
  ],
  activities: [
    "танцевальные классы",
    "творческие задания",
    "съемки и контент",
    "командные активности",
    "вечерние события",
  ],
  placeholders: {
    dates: "Даты скоро",
    price: "Стоимость скоро",
    location: "Локация скоро",
  },
  gallery: [childrenImage, yanaImageSecondary, evaImagePrimary, dimaImageSecondary],
} as const;

export const merchContact = {
  telegramHandle: "@miss_luzina",
  telegramUrl: "https://t.me/miss_luzina",
  note: "За актуальными ценами и наличием мерча уточняйте в Telegram @miss_luzina.",
} as const;

// Данные актуального мерча студии.
export const merchItems = [
  {
    slug: "dance-pants",
    name: "Штаны для танцев",
    description:
      "Свободные черные штаны с фирменной вышивкой и выразительными лампасами в двух расцветках. Это первый мерч студии. Идеален как и для тренировок и съемок, так и для повседневного образа.",
    sizes: "Наличие размеров уточняйте в телеграм",
    status: "Сейчас в мерче",
    image: merchPantsImageFourth,
  },
] as const;

export const merchGallery = [
  {
    image: merchPantsImageThird,
    title: "Посадка, которая работает в движении",
    description:
      "Свободный силуэт красиво раскрывается в танце, не сковывает корпус и держит собранный сценический образ.",
  },
  {
    image: merchPantsImageSecondary,
    title: "Комфорт для класса и съемок",
    description:
      "Мягкая посадка и уверенный объем делают эти штаны удобным вариантом и для тренировки, и для контента.",
  },
  {
    image: merchPantsImagePrimary,
    title: "Тот самый стиль студии",
    description:
      "Фирменный характер Dance Soul считывается сразу: вещь выглядит сильно в кадре и уверенно в повседневном образе.",
  },
  {
    image: merchPantsImageTeam,
    title: "Командный образ",
    description:
      "Штаны легко собирают цельный студийный образ, когда важно, чтобы группа смотрелась сильно и едино в кадре.",
  },
  {
    image: merchPantsImageSixth,
    title: "Сильный силуэт со спины",
    description:
      "Штаны держат форму со всех ракурсов и уверенно собирают образ даже в спокойной статике.",
  },
] as const;

export const merchColorways = [
  {
    image: merchPantsDetailDarkImage,
    title: "Темный акцент",
    description: "Глубокий бордовый вариант для более плотного и драматичного образа.",
  },
  {
    image: merchPantsDetailLightImage,
    title: "Светлый акцент",
    description: "Светлая расцветка делает силуэт контрастнее и заметнее в кадре.",
  },
] as const;

export type Coach = (typeof coaches)[number];
export type Direction = (typeof danceDirections)[number];
export type KidsGroup = (typeof kidsGroups)[number];
export type MerchItem = (typeof merchItems)[number];
export type CampGalleryItem = StaticImageData;
