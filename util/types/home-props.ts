export interface Response {
  studyFormat: StudyFormat;
  subjectsStickerType: SubjectsStickerType | null;
  icon: null | string;
  questions: any[];
  reviews: any[];
  localizations: any[];
  id: IDElement;
  publishedAt: Date;
  locale: Locale;
  goal?: string;
  slug: string;
  title: string;
  whatWillYouLearn: Duration[];
  specializedSubjects: Duration[];
  duration: Duration | null;
  baseSubjects: BaseSubject[];
  programModulesCounters: ProgramModulesCounters;
  diplomas: any[];
  whoIsFor: WhoIsFor[];
  specializedSubjectsAddons: Duration | null;
  createdAt: Date;
  updatedAt: Date;
  v: number;
  category: Category;
  picture: Picture;
  teachers: Category[];
  journalArticles: PokedexJournalArticle[];
  pokedexID: IDElement;
  price?: string;
  description?: string;
  studyField?: Category;
}

export interface BaseSubject {
  id: string;
  string?: string;
  v: number;
  baseSubjectID: string;
  title?: string;
  body?: string;
}

export interface Category {
  copyToKk: boolean;
  localizations: Localization[];
  id: string;
  slug: string;
  type?: CategoryType;
  description: string;
  locale: Locale;
  publishedAt: Date;
  labelCases?: LabelCases;
  createdAt: Date;
  updatedAt: Date;
  v: number;
  categoryID: string;
  name?: string;
  programs?: IDElement[];
  portrait?: Picture;
  descriptionItems?: Duration[];
}

export interface Duration {
  id: string;
  minStudyMonths?: string;
  v: number;
  durationID: string;
  string?: string;
  practice?: boolean;
  item?: string;
}

export interface LabelCases {
  id: LabelCasesID;
  singular: Plural;
  plural: Plural;
  v: number;
  labelCasesID: LabelCasesID;
}

export enum LabelCasesID {
  The614071A195Ec9B217F470Ad5 = '614071a195ec9b217f470ad5',
  The614071D895Ec9B217F470ADB = '614071d895ec9b217f470adb',
  The6140722C95Ec9B217F470Ae7 = '6140722c95ec9b217f470ae7',
  The6140726D95Ec9B217F470Af0 = '6140726d95ec9b217f470af0',
}

export enum Plural {
  Mba = 'MBA',
  Mbl = 'MBL',
  MiniMBA = 'Mini MBA',
  Профессии = 'Профессии',
  Профессия = 'Профессия',
}

export enum Locale {
  Ru = 'ru',
}

export interface Localization {
  id: ID;
  localizationID: IDClass;
}

export enum ID {
  The613792586Bb3Fa22343F2Fbf = '613792586bb3fa22343f2fbf',
  The613792996Bb3Fa22343F2Fc1 = '613792996bb3fa22343f2fc1',
  The6137Afae59A4Ce38Fc81B061 = '6137afae59a4ce38fc81b061',
  The6137B11E59A4Ce38Fc81B07A = '6137b11e59a4ce38fc81b07a',
  The614071A295Ec9B217F470Ad7 = '614071a295ec9b217f470ad7',
  The614071D995Ec9B217F470Add = '614071d995ec9b217f470add',
  The6140722E95Ec9B217F470Ae9 = '6140722e95ec9b217f470ae9',
  The6140726F95Ec9B217F470Af2 = '6140726f95ec9b217f470af2',
}

export interface IDClass {
  type: IDType;
  data: number[];
}

export enum IDType {
  Buffer = 'Buffer',
}

export interface Picture {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  providerMetadata: ProviderMetadata;
  provider: Provider;
  width: number | null;
  height: number | null;
  related: string[];
  createdAt: Date;
  updatedAt: Date;
  v: number;
  pictureID: string;
  formats?: Formats;
}

export enum EXT {
  HTML = '.html',
  JPEG = '.jpeg',
  Jpg = '.jpg',
  PDF = '.pdf',
  PNG = '.png',
}

export interface Formats {
  thumbnail: Large;
  medium?: Large;
  small: Large;
  large?: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
  providerMetadata: ProviderMetadata;
}

export enum MIME {
  ApplicationPDF = 'application/pdf',
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
  TextHTML = 'text/html',
}

export interface ProviderMetadata {
  publicID: string;
  resourceType: ResourceType;
}

export enum ResourceType {
  Image = 'image',
  Raw = 'raw',
}

export enum Provider {
  Cloudinary = 'cloudinary',
}

export enum IDElement {
  The6151Cd63Ae30D553A5300Ca9 = '6151cd63ae30d553a5300ca9',
  The6151D5Cfd152B1001657080C = '6151d5cfd152b1001657080c',
  The6151D83Cd152B1001657083C = '6151d83cd152b1001657083c',
  The6151D957D152B1001657086C = '6151d957d152b1001657086c',
  The6151Da21D152B1001657089C = '6151da21d152b1001657089c',
  The6151Daeed152B100165708Cc = '6151daeed152b100165708cc',
  The6151Dba6D152B100165708Fc = '6151dba6d152b100165708fc',
  The6151E2A9C3E9875B0101Ac54 = '6151e2a9c3e9875b0101ac54',
  The6151E3B2C3E9875B0101Ac9C = '6151e3b2c3e9875b0101ac9c',
  The6151E427C3E9875B0101Accc = '6151e427c3e9875b0101accc',
  The6151E483C3E9875B0101Acfc = '6151e483c3e9875b0101acfc',
  The6151E504C3E9875B0101Ad44 = '6151e504c3e9875b0101ad44',
  The6151E5A8C3E9875B0101Ad74 = '6151e5a8c3e9875b0101ad74',
  The6151E719C3E9875B0101Ada4 = '6151e719c3e9875b0101ada4',
  The6151E7Eec3E9875B0101Adec = '6151e7eec3e9875b0101adec',
  The6151E89Cc3E9875B0101Ae1C = '6151e89cc3e9875b0101ae1c',
  The6151E97Ac3E9875B0101Ae7C = '6151e97ac3e9875b0101ae7c',
  The6151Ea2Dc3E9875B0101Aec4 = '6151ea2dc3e9875b0101aec4',
  The6151Ebcfc3E9875B0101Aef4 = '6151ebcfc3e9875b0101aef4',
  The6151Ecd3C3E9875B0101Af22 = '6151ecd3c3e9875b0101af22',
  The6151Ed2Cc3E9875B0101Af54 = '6151ed2cc3e9875b0101af54',
  The6151Ed92C3E9875B0101Af84 = '6151ed92c3e9875b0101af84',
  The6151Ee2Fc3E9875B0101Afb4 = '6151ee2fc3e9875b0101afb4',
  The6151Eeb0C3E9875B0101Affc = '6151eeb0c3e9875b0101affc',
  The6151Ef54C3E9875B0101B02C = '6151ef54c3e9875b0101b02c',
  The6151Efe1C3E9875B0101B05C = '6151efe1c3e9875b0101b05c',
  The6151F053C3E9875B0101B08C = '6151f053c3e9875b0101b08c',
  The6151F0C2C3E9875B0101B0Be = '6151f0c2c3e9875b0101b0be',
  The6151F279C3E9875B0101B0Ee = '6151f279c3e9875b0101b0ee',
  The6151F304C3E9875B0101B120 = '6151f304c3e9875b0101b120',
  The6151F484C3E9875B0101B150 = '6151f484c3e9875b0101b150',
  The6151F523C3E9875B0101B180 = '6151f523c3e9875b0101b180',
  The6151F575C3E9875B0101B1B0 = '6151f575c3e9875b0101b1b0',
  The6151F5Cdc3E9875B0101B1E0 = '6151f5cdc3e9875b0101b1e0',
  The6151F61Ac3E9875B0101B210 = '6151f61ac3e9875b0101b210',
  The6151F676C3E9875B0101B240 = '6151f676c3e9875b0101b240',
  The6151F6Cac3E9875B0101B270 = '6151f6cac3e9875b0101b270',
  The6151F723C3E9875B0101B2A0 = '6151f723c3e9875b0101b2a0',
  The6151F832C3E9875B0101B2D0 = '6151f832c3e9875b0101b2d0',
  The6151F897C3E9875B0101B304 = '6151f897c3e9875b0101b304',
  The6151Fbb4C3E9875B0101B364 = '6151fbb4c3e9875b0101b364',
  The61520180C3E9875B0101B394 = '61520180c3e9875b0101b394',
  The61521149273C4E0E78816Bf4 = '61521149273c4e0e78816bf4',
  The61522Ab9273C4E0E78816C6E = '61522ab9273c4e0e78816c6e',
  The61522B2C273C4E0E78816Ce8 = '61522b2c273c4e0e78816ce8',
  The61522Ba3273C4E0E78816D62 = '61522ba3273c4e0e78816d62',
  The61522E79273C4E0E78816Ddc = '61522e79273c4e0e78816ddc',
  The61522Ee5273C4E0E78816E56 = '61522ee5273c4e0e78816e56',
  The61522F55273C4E0E78816Ed0 = '61522f55273c4e0e78816ed0',
  The61522Fd4273C4E0E78816F4A = '61522fd4273c4e0e78816f4a',
  The61523041273C4E0E78816Fc4 = '61523041273c4e0e78816fc4',
  The615230A9273C4E0E78817040 = '615230a9273c4e0e78817040',
  The61523125273C4E0E788170Ba = '61523125273c4e0e788170ba',
  The61523194273C4E0E78817134 = '61523194273c4e0e78817134',
  The615231F9273C4E0E788171AE = '615231f9273c4e0e788171ae',
  The61523256273C4E0E78817228 = '61523256273c4e0e78817228',
  The615232C3273C4E0E788172A2 = '615232c3273c4e0e788172a2',
  The615235A2273C4E0E78817312 = '615235a2273c4e0e78817312',
  The6152363C273C4E0E7881738C = '6152363c273c4e0e7881738c',
  The615236Cf273C4E0E78817406 = '615236cf273c4e0e78817406',
  The61523745273C4E0E78817480 = '61523745273c4e0e78817480',
  The615237C7273C4E0E788174Fa = '615237c7273c4e0e788174fa',
  The61523831273C4E0E78817574 = '61523831273c4e0e78817574',
  The615238Af273C4E0E788175Ee = '615238af273c4e0e788175ee',
  The61523915273C4E0E78817668 = '61523915273c4e0e78817668',
  The6152398C273C4E0E788176E2 = '6152398c273c4e0e788176e2',
  The61523A19273C4E0E7881775C = '61523a19273c4e0e7881775c',
  The6152493F273C4E0E788177D6 = '6152493f273c4e0e788177d6',
  The61524A0A273C4E0E78817850 = '61524a0a273c4e0e78817850',
  The61524C24273C4E0E788178CA = '61524c24273c4e0e788178ca',
  The61524Cc2273C4E0E78817944 = '61524cc2273c4e0e78817944',
  The61524D4F273C4E0E788179Be = '61524d4f273c4e0e788179be',
  The61524Dcd273C4E0E78817A38 = '61524dcd273c4e0e78817a38',
  The61524E39273C4E0E78817Ab2 = '61524e39273c4e0e78817ab2',
  The6152502C273C4E0E78817B2E = '6152502c273c4e0e78817b2e',
  The6152508C273C4E0E78817Ba8 = '6152508c273c4e0e78817ba8',
  The615250E5273C4E0E78817C24 = '615250e5273c4e0e78817c24',
  The61525151273C4E0E78817C9E = '61525151273c4e0e78817c9e',
  The615251Be273C4E0E78817D18 = '615251be273c4e0e78817d18',
  The6152521A273C4E0E78817D92 = '6152521a273c4e0e78817d92',
  The61525294273C4E0E78817E0C = '61525294273c4e0e78817e0c',
  The6152560A273C4E0E78817E86 = '6152560a273c4e0e78817e86',
  The61528Ecd4311E562C52045B9 = '61528ecd4311e562c52045b9',
  The615297Ba4311E562C52045Ef = '615297ba4311e562c52045ef',
  The6152Fe3D4311E562C5204621 = '6152fe3d4311e562c5204621',
  The6152Fefc4311E562C5204662 = '6152fefc4311e562c5204662',
  The6152Ff9A4311E562C52046Ad = '6152ff9a4311e562c52046ad',
  The6153001A4311E562C52046DB = '6153001a4311e562c52046db',
  The615300B34311E562C5204709 = '615300b34311e562c5204709',
  The615301244311E562C5204749 = '615301244311e562c5204749',
  The6153018F4311E562C5204777 = '6153018f4311e562c5204777',
  The615301Fa4311E562C52047A5 = '615301fa4311e562c52047a5',
  The615302644311E562C52047D1 = '615302644311e562c52047d1',
  The615303124311E562C52047Ff = '615303124311e562c52047ff',
  The6153037A4311E562C520482D = '6153037a4311e562c520482d',
  The615304164311E562C5204859 = '615304164311e562c5204859',
  The615304Ad4311E562C5204883 = '615304ad4311e562c5204883',
  The615305424311E562C52048B1 = '615305424311e562c52048b1',
  The615305E64311E562C52048Df = '615305e64311e562c52048df',
  The615306C34311E562C5204930 = '615306c34311e562c5204930',
  The615307814311E562C5204960 = '615307814311e562c5204960',
  The615307F94311E562C52049B4 = '615307f94311e562c52049b4',
  The615309194311E562C5204A12 = '615309194311e562c5204a12',
  The615309A64311E562C5204A5C = '615309a64311e562c5204a5c',
  The616Fbe71Ce68061A1B676A42 = '616fbe71ce68061a1b676a42',
  The616Fbef8Ce68061A1B676A70 = '616fbef8ce68061a1b676a70',
  The616Fc06Ace68061A1B676A94 = '616fc06ace68061a1b676a94',
  The616Fc0Dece68061A1B676Ac2 = '616fc0dece68061a1b676ac2',
  The616Fc13Fce68061A1B676Ae6 = '616fc13fce68061a1b676ae6',
  The616Fc192Ce68061A1B676B0A = '616fc192ce68061a1b676b0a',
  The616Fc2A0Ce68061A1B676B2E = '616fc2a0ce68061a1b676b2e',
  The616Fc3C1Ce68061A1B676B8A = '616fc3c1ce68061a1b676b8a',
  The616Fc4Dace68061A1B676Bda = '616fc4dace68061a1b676bda',
  The616Fcb9Ece68061A1B676C8C = '616fcb9ece68061a1b676c8c',
  The616Fcc07Ce68061A1B676Cbc = '616fcc07ce68061a1b676cbc',
  The616Fcc7Cce68061A1B676Cec = '616fcc7cce68061a1b676cec',
  The616Fccf4Ce68061A1B676D1C = '616fccf4ce68061a1b676d1c',
  The616Fcd63Ce68061A1B676D4C = '616fcd63ce68061a1b676d4c',
  The618948B12Cc27E377C7B0F64 = '618948b12cc27e377c7b0f64',
  The619Fa5F8915Ce600162C0C4C = '619fa5f8915ce600162c0c4c',
  The61A0B8F1915Ce600162C0Dbb = '61a0b8f1915ce600162c0dbb',
  The6284F9Af238Ee00016972E88 = '6284f9af238ee00016972e88',
  The628Cb8536E12A80016Dafeea = '628cb8536e12a80016dafeea',
  The629F6F36A63C5D001600Fd9F = '629f6f36a63c5d001600fd9f',
  The62Bec471Cb6Adb00162F0591 = '62bec471cb6adb00162f0591',
  The62Becbe85E20B500166857C0 = '62becbe85e20b500166857c0',
  The62Bed28E5Cdd98001682278F = '62bed28e5cdd98001682278f',
  The62C5B6B97Fd7E90016435E3F = '62c5b6b97fd7e90016435e3f',
  The62C67F6D7Fd7E90016435E7D = '62c67f6d7fd7e90016435e7d',
  The62C684957Fd7E90016435F10 = '62c684957fd7e90016435f10',
  The62Cc04F9F7E5060016F1E12F = '62cc04f9f7e5060016f1e12f',
  The62D55A9E6953B900169C3Fb2 = '62d55a9e6953b900169c3fb2',
  The62D55C8F6953B900169C400A = '62d55c8f6953b900169c400a',
  The62D55F296953B900169C4058 = '62d55f296953b900169c4058',
  The62D569526953B900169C409E = '62d569526953b900169c409e',
  The62D56B8D6953B900169C40D8 = '62d56b8d6953b900169c40d8',
  The62D574596953B900169C4134 = '62d574596953b900169c4134',
  The62D576Eb6953B900169C4194 = '62d576eb6953b900169c4194',
  The62D65F88Adc21C00168Cf8E9 = '62d65f88adc21c00168cf8e9',
  The62D662C5Adc21C00168Cf94F = '62d662c5adc21c00168cf94f',
}

export enum CategoryType {
  Mba = 'mba',
  Mbl = 'mbl',
  Mini = 'mini',
  Profession = 'profession',
}

export interface PokedexJournalArticle {
  journalTags: string[];
  journalArticleJournalAuthors: string[];
  programs: IDElement[];
  pdfMaterials: Picture[];
  id: string;
  publishedAt: Date;
  shortDescription: string;
  slug: string;
  title: string;
  articleBody: PurpleArticleBody[];
  journalAuthors: any[];
  createdAt: Date;
  updatedAt: Date;
  v: number;
  picture: Picture;
  journalCategory: string;
  journalArticleID: string;
}

export interface PurpleArticleBody {
  component: string;
  id: string;
  paragraphBody?: ParagraphBody[];
  v: number;
  articleBodyID: string;
  title?: string;
  titleBody?: SectionTitle[];
  picture?: Picture;
  emphasisBody?: string;
  htmlTable?: Picture;
  body?: string;
  authorName?: string;
  athorPosition?: string;
  portrait?: Picture;
  journalArticles?: ArticleBodyJournalArticle[];
  program?: Program;
  btnValue?: string;
  listItem?: BaseSubject[];
  item?: BaseSubject[];
  programs?: Program[];
  btnVal?: string;
  sectionTitle?: SectionTitle[];
  shortTextAtTheBottom?: SectionTitle[];
}

export interface ArticleBodyJournalArticle {
  journalTags: string[];
  journalArticleJournalAuthors: any[];
  programs: any[];
  pdfMaterials: any[];
  id: string;
  publishedAt: Date;
  shortDescription: string;
  slug: string;
  title: string;
  body?: Body[];
  createdAt: Date;
  updatedAt: Date;
  v: number;
  journalCategory: string;
  journalTag: string;
  picture: Picture;
  program: null;
  articleBody: FluffyArticleBody[];
  journalAuthors: Body[];
  journalArticleID: string;
  journalAuthor?: Body[];
  isHighlighted?: boolean;
}

export interface FluffyArticleBody {
  component: string;
  id: string;
}

export interface Body {
  id: string;
  kind: string;
  ref: string;
}

export interface ParagraphBody {
  id: string;
  isLarger?: boolean;
  text: string;
  isHighlighted?: boolean;
  title: string;
  v: number;
  paragraphBodyID: string;
}

export interface Program {
  studyFormat: StudyFormat;
  subjectsStickerType: SubjectsStickerType;
  icon: null | string;
  questions: any[];
  reviews: any[];
  localizations: any[];
  id: IDElement;
  publishedAt: Date;
  locale: Locale;
  goal: string;
  slug: string;
  title: string;
  whatWillYouLearn: string[];
  specializedSubjects: string[];
  duration: null;
  baseSubjects: string[];
  programModulesCounters: string;
  diplomas: any[];
  whoIsFor: any[];
  specializedSubjectsAddons: string;
  createdAt: Date;
  updatedAt: Date;
  v: number;
  category: string;
  picture: Picture;
  programID: IDElement;
}

export enum StudyFormat {
  Online = 'online',
}

export enum SubjectsStickerType {
  FinalAttestation = 'finalAttestation',
  PracticeModulesAndFinalAttestation = 'practiceModulesAndFinalAttestation',
}

export interface SectionTitle {
  id: string;
  text: string;
  isHighlighted?: boolean;
  v: number;
  sectionTitleID: string;
  title?: string;
}

export interface ProgramModulesCounters {
  leftCounter: LeftCounter;
  rightCounter: RightCounter;
  id: string;
  v: number;
  programModulesCountersID: string;
}

export enum LeftCounter {
  AcademicDisciplines = 'academicDisciplines',
  GeneralAcademicDisciplines = 'generalAcademicDisciplines',
  SpecializedlAcademicDisciplines = 'specializedlAcademicDisciplines',
}

export enum RightCounter {
  Icon = 'icon',
  SpecializedlAcademicDisciplines = 'specializedlAcademicDisciplines',
}

export interface WhoIsFor {
  id: string;
  name: string;
  description: string;
  v: number;
  whoIsForID: string;
}
