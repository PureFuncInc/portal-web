/** @generated */
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns all children nodes filtered by type WorkflowsYaml */
  childrenWorkflowsYaml?: Maybe<Array<Maybe<WorkflowsYaml>>>;
  /** Returns the first child node of type WorkflowsYaml or null if there are no children of given type on this node */
  childWorkflowsYaml?: Maybe<WorkflowsYaml>;
  /** Returns all children nodes filtered by type PeopleYaml */
  childrenPeopleYaml?: Maybe<Array<Maybe<PeopleYaml>>>;
  /** Returns the first child node of type PeopleYaml or null if there are no children of given type on this node */
  childPeopleYaml?: Maybe<PeopleYaml>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MdxFrontmatter = {
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  publishTime?: Maybe<Scalars['Float']>;
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  embeddedImagesLocal?: Maybe<Array<Maybe<File>>>;
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type HeadingsMdx =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type Mdx = Node & {
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type WorkflowsYaml = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  on?: Maybe<WorkflowsYamlOn>;
  jobs?: Maybe<WorkflowsYamlJobs>;
};

export type WorkflowsYamlOn = {
  push?: Maybe<WorkflowsYamlOnPush>;
};

export type WorkflowsYamlOnPush = {
  branches?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WorkflowsYamlJobs = {
  notify?: Maybe<WorkflowsYamlJobsNotify>;
};

export type WorkflowsYamlJobsNotify = {
  runs_on?: Maybe<Scalars['String']>;
  steps?: Maybe<Array<Maybe<WorkflowsYamlJobsNotifySteps>>>;
};

export type WorkflowsYamlJobsNotifySteps = {
  name?: Maybe<Scalars['String']>;
  uses?: Maybe<Scalars['String']>;
  with?: Maybe<WorkflowsYamlJobsNotifyStepsWith>;
};

export type WorkflowsYamlJobsNotifyStepsWith = {
  token?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  event_type?: Maybe<Scalars['String']>;
};

export type PeopleYaml = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<PeopleYamlName>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  expertise?: Maybe<Array<Maybe<Scalars['String']>>>;
  headline?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
  achievements?: Maybe<Array<Maybe<Scalars['String']>>>;
  socialNetworks?: Maybe<PeopleYamlSocialNetworks>;
};

export type PeopleYamlName = {
  mandarin?: Maybe<Scalars['String']>;
  english?: Maybe<Scalars['String']>;
};

export type PeopleYamlSocialNetworks = {
  email?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  portal?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  workflowsYaml?: Maybe<WorkflowsYaml>;
  allWorkflowsYaml: WorkflowsYamlConnection;
  peopleYaml?: Maybe<PeopleYaml>;
  allPeopleYaml: PeopleYamlConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  childrenWorkflowsYaml?: InputMaybe<WorkflowsYamlFilterListInput>;
  childWorkflowsYaml?: InputMaybe<WorkflowsYamlFilterInput>;
  childrenPeopleYaml?: InputMaybe<PeopleYamlFilterListInput>;
  childPeopleYaml?: InputMaybe<PeopleYamlFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  sort?: InputMaybe<MdxSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkflowsYamlArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  on?: InputMaybe<WorkflowsYamlOnFilterInput>;
  jobs?: InputMaybe<WorkflowsYamlJobsFilterInput>;
};


export type QueryAllWorkflowsYamlArgs = {
  filter?: InputMaybe<WorkflowsYamlFilterInput>;
  sort?: InputMaybe<WorkflowsYamlSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryPeopleYamlArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<PeopleYamlNameFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  expertise?: InputMaybe<StringQueryOperatorInput>;
  headline?: InputMaybe<StringQueryOperatorInput>;
  story?: InputMaybe<StringQueryOperatorInput>;
  achievements?: InputMaybe<StringQueryOperatorInput>;
  socialNetworks?: InputMaybe<PeopleYamlSocialNetworksFilterInput>;
};


export type QueryAllPeopleYamlArgs = {
  filter?: InputMaybe<PeopleYamlFilterInput>;
  sort?: InputMaybe<PeopleYamlSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>;
};

export type MdxFilterInput = {
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type MdxFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  publishTime?: InputMaybe<FloatQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<StringQueryOperatorInput>;
  embeddedImagesLocal?: InputMaybe<FileFilterListInput>;
};

export type FileFilterListInput = {
  elemMatch?: InputMaybe<FileFilterInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  childrenWorkflowsYaml?: InputMaybe<WorkflowsYamlFilterListInput>;
  childWorkflowsYaml?: InputMaybe<WorkflowsYamlFilterInput>;
  childrenPeopleYaml?: InputMaybe<PeopleYamlFilterListInput>;
  childPeopleYaml?: InputMaybe<PeopleYamlFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type WorkflowsYamlFilterListInput = {
  elemMatch?: InputMaybe<WorkflowsYamlFilterInput>;
};

export type WorkflowsYamlFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  on?: InputMaybe<WorkflowsYamlOnFilterInput>;
  jobs?: InputMaybe<WorkflowsYamlJobsFilterInput>;
};

export type WorkflowsYamlOnFilterInput = {
  push?: InputMaybe<WorkflowsYamlOnPushFilterInput>;
};

export type WorkflowsYamlOnPushFilterInput = {
  branches?: InputMaybe<StringQueryOperatorInput>;
};

export type WorkflowsYamlJobsFilterInput = {
  notify?: InputMaybe<WorkflowsYamlJobsNotifyFilterInput>;
};

export type WorkflowsYamlJobsNotifyFilterInput = {
  runs_on?: InputMaybe<StringQueryOperatorInput>;
  steps?: InputMaybe<WorkflowsYamlJobsNotifyStepsFilterListInput>;
};

export type WorkflowsYamlJobsNotifyStepsFilterListInput = {
  elemMatch?: InputMaybe<WorkflowsYamlJobsNotifyStepsFilterInput>;
};

export type WorkflowsYamlJobsNotifyStepsFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  uses?: InputMaybe<StringQueryOperatorInput>;
  with?: InputMaybe<WorkflowsYamlJobsNotifyStepsWithFilterInput>;
};

export type WorkflowsYamlJobsNotifyStepsWithFilterInput = {
  token?: InputMaybe<StringQueryOperatorInput>;
  repository?: InputMaybe<StringQueryOperatorInput>;
  event_type?: InputMaybe<StringQueryOperatorInput>;
};

export type PeopleYamlFilterListInput = {
  elemMatch?: InputMaybe<PeopleYamlFilterInput>;
};

export type PeopleYamlFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<PeopleYamlNameFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  expertise?: InputMaybe<StringQueryOperatorInput>;
  headline?: InputMaybe<StringQueryOperatorInput>;
  story?: InputMaybe<StringQueryOperatorInput>;
  achievements?: InputMaybe<StringQueryOperatorInput>;
  socialNetworks?: InputMaybe<PeopleYamlSocialNetworksFilterInput>;
};

export type PeopleYamlNameFilterInput = {
  mandarin?: InputMaybe<StringQueryOperatorInput>;
  english?: InputMaybe<StringQueryOperatorInput>;
};

export type PeopleYamlSocialNetworksFilterInput = {
  email?: InputMaybe<StringQueryOperatorInput>;
  github?: InputMaybe<StringQueryOperatorInput>;
  telegram?: InputMaybe<StringQueryOperatorInput>;
  linkedin?: InputMaybe<StringQueryOperatorInput>;
  facebook?: InputMaybe<StringQueryOperatorInput>;
  portal?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxHeadingMdxFilterInput = {
  value?: InputMaybe<StringQueryOperatorInput>;
  depth?: InputMaybe<IntQueryOperatorInput>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___slug'
  | 'childrenMdx___frontmatter___publishTime'
  | 'childrenMdx___frontmatter___author'
  | 'childrenMdx___frontmatter___category'
  | 'childrenMdx___frontmatter___embeddedImagesLocal'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___sourceInstanceName'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___absolutePath'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___relativePath'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___extension'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___size'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___prettySize'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___modifiedTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___accessTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___changeTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___birthTime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___root'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___dir'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___base'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ext'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___name'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___relativeDirectory'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___dev'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___mode'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___nlink'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___uid'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___gid'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___rdev'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ino'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___atimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___mtimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ctimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___atime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___mtime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___ctime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___birthtime'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___birthtimeMs'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___blksize'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___blocks'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___publicURL'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___childrenImageSharp'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___childrenMdx'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___childrenWorkflowsYaml'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___childrenPeopleYaml'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___id'
  | 'childrenMdx___frontmatter___embeddedImagesLocal___children'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___slug'
  | 'childMdx___frontmatter___publishTime'
  | 'childMdx___frontmatter___author'
  | 'childMdx___frontmatter___category'
  | 'childMdx___frontmatter___embeddedImagesLocal'
  | 'childMdx___frontmatter___embeddedImagesLocal___sourceInstanceName'
  | 'childMdx___frontmatter___embeddedImagesLocal___absolutePath'
  | 'childMdx___frontmatter___embeddedImagesLocal___relativePath'
  | 'childMdx___frontmatter___embeddedImagesLocal___extension'
  | 'childMdx___frontmatter___embeddedImagesLocal___size'
  | 'childMdx___frontmatter___embeddedImagesLocal___prettySize'
  | 'childMdx___frontmatter___embeddedImagesLocal___modifiedTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___accessTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___changeTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___birthTime'
  | 'childMdx___frontmatter___embeddedImagesLocal___root'
  | 'childMdx___frontmatter___embeddedImagesLocal___dir'
  | 'childMdx___frontmatter___embeddedImagesLocal___base'
  | 'childMdx___frontmatter___embeddedImagesLocal___ext'
  | 'childMdx___frontmatter___embeddedImagesLocal___name'
  | 'childMdx___frontmatter___embeddedImagesLocal___relativeDirectory'
  | 'childMdx___frontmatter___embeddedImagesLocal___dev'
  | 'childMdx___frontmatter___embeddedImagesLocal___mode'
  | 'childMdx___frontmatter___embeddedImagesLocal___nlink'
  | 'childMdx___frontmatter___embeddedImagesLocal___uid'
  | 'childMdx___frontmatter___embeddedImagesLocal___gid'
  | 'childMdx___frontmatter___embeddedImagesLocal___rdev'
  | 'childMdx___frontmatter___embeddedImagesLocal___ino'
  | 'childMdx___frontmatter___embeddedImagesLocal___atimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___mtimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___ctimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___atime'
  | 'childMdx___frontmatter___embeddedImagesLocal___mtime'
  | 'childMdx___frontmatter___embeddedImagesLocal___ctime'
  | 'childMdx___frontmatter___embeddedImagesLocal___birthtime'
  | 'childMdx___frontmatter___embeddedImagesLocal___birthtimeMs'
  | 'childMdx___frontmatter___embeddedImagesLocal___blksize'
  | 'childMdx___frontmatter___embeddedImagesLocal___blocks'
  | 'childMdx___frontmatter___embeddedImagesLocal___publicURL'
  | 'childMdx___frontmatter___embeddedImagesLocal___childrenImageSharp'
  | 'childMdx___frontmatter___embeddedImagesLocal___childrenMdx'
  | 'childMdx___frontmatter___embeddedImagesLocal___childrenWorkflowsYaml'
  | 'childMdx___frontmatter___embeddedImagesLocal___childrenPeopleYaml'
  | 'childMdx___frontmatter___embeddedImagesLocal___id'
  | 'childMdx___frontmatter___embeddedImagesLocal___children'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childrenWorkflowsYaml'
  | 'childrenWorkflowsYaml___id'
  | 'childrenWorkflowsYaml___parent___id'
  | 'childrenWorkflowsYaml___parent___parent___id'
  | 'childrenWorkflowsYaml___parent___parent___children'
  | 'childrenWorkflowsYaml___parent___children'
  | 'childrenWorkflowsYaml___parent___children___id'
  | 'childrenWorkflowsYaml___parent___children___children'
  | 'childrenWorkflowsYaml___parent___internal___content'
  | 'childrenWorkflowsYaml___parent___internal___contentDigest'
  | 'childrenWorkflowsYaml___parent___internal___description'
  | 'childrenWorkflowsYaml___parent___internal___fieldOwners'
  | 'childrenWorkflowsYaml___parent___internal___ignoreType'
  | 'childrenWorkflowsYaml___parent___internal___mediaType'
  | 'childrenWorkflowsYaml___parent___internal___owner'
  | 'childrenWorkflowsYaml___parent___internal___type'
  | 'childrenWorkflowsYaml___children'
  | 'childrenWorkflowsYaml___children___id'
  | 'childrenWorkflowsYaml___children___parent___id'
  | 'childrenWorkflowsYaml___children___parent___children'
  | 'childrenWorkflowsYaml___children___children'
  | 'childrenWorkflowsYaml___children___children___id'
  | 'childrenWorkflowsYaml___children___children___children'
  | 'childrenWorkflowsYaml___children___internal___content'
  | 'childrenWorkflowsYaml___children___internal___contentDigest'
  | 'childrenWorkflowsYaml___children___internal___description'
  | 'childrenWorkflowsYaml___children___internal___fieldOwners'
  | 'childrenWorkflowsYaml___children___internal___ignoreType'
  | 'childrenWorkflowsYaml___children___internal___mediaType'
  | 'childrenWorkflowsYaml___children___internal___owner'
  | 'childrenWorkflowsYaml___children___internal___type'
  | 'childrenWorkflowsYaml___internal___content'
  | 'childrenWorkflowsYaml___internal___contentDigest'
  | 'childrenWorkflowsYaml___internal___description'
  | 'childrenWorkflowsYaml___internal___fieldOwners'
  | 'childrenWorkflowsYaml___internal___ignoreType'
  | 'childrenWorkflowsYaml___internal___mediaType'
  | 'childrenWorkflowsYaml___internal___owner'
  | 'childrenWorkflowsYaml___internal___type'
  | 'childrenWorkflowsYaml___name'
  | 'childrenWorkflowsYaml___on___push___branches'
  | 'childrenWorkflowsYaml___jobs___notify___runs_on'
  | 'childrenWorkflowsYaml___jobs___notify___steps'
  | 'childWorkflowsYaml___id'
  | 'childWorkflowsYaml___parent___id'
  | 'childWorkflowsYaml___parent___parent___id'
  | 'childWorkflowsYaml___parent___parent___children'
  | 'childWorkflowsYaml___parent___children'
  | 'childWorkflowsYaml___parent___children___id'
  | 'childWorkflowsYaml___parent___children___children'
  | 'childWorkflowsYaml___parent___internal___content'
  | 'childWorkflowsYaml___parent___internal___contentDigest'
  | 'childWorkflowsYaml___parent___internal___description'
  | 'childWorkflowsYaml___parent___internal___fieldOwners'
  | 'childWorkflowsYaml___parent___internal___ignoreType'
  | 'childWorkflowsYaml___parent___internal___mediaType'
  | 'childWorkflowsYaml___parent___internal___owner'
  | 'childWorkflowsYaml___parent___internal___type'
  | 'childWorkflowsYaml___children'
  | 'childWorkflowsYaml___children___id'
  | 'childWorkflowsYaml___children___parent___id'
  | 'childWorkflowsYaml___children___parent___children'
  | 'childWorkflowsYaml___children___children'
  | 'childWorkflowsYaml___children___children___id'
  | 'childWorkflowsYaml___children___children___children'
  | 'childWorkflowsYaml___children___internal___content'
  | 'childWorkflowsYaml___children___internal___contentDigest'
  | 'childWorkflowsYaml___children___internal___description'
  | 'childWorkflowsYaml___children___internal___fieldOwners'
  | 'childWorkflowsYaml___children___internal___ignoreType'
  | 'childWorkflowsYaml___children___internal___mediaType'
  | 'childWorkflowsYaml___children___internal___owner'
  | 'childWorkflowsYaml___children___internal___type'
  | 'childWorkflowsYaml___internal___content'
  | 'childWorkflowsYaml___internal___contentDigest'
  | 'childWorkflowsYaml___internal___description'
  | 'childWorkflowsYaml___internal___fieldOwners'
  | 'childWorkflowsYaml___internal___ignoreType'
  | 'childWorkflowsYaml___internal___mediaType'
  | 'childWorkflowsYaml___internal___owner'
  | 'childWorkflowsYaml___internal___type'
  | 'childWorkflowsYaml___name'
  | 'childWorkflowsYaml___on___push___branches'
  | 'childWorkflowsYaml___jobs___notify___runs_on'
  | 'childWorkflowsYaml___jobs___notify___steps'
  | 'childrenPeopleYaml'
  | 'childrenPeopleYaml___id'
  | 'childrenPeopleYaml___parent___id'
  | 'childrenPeopleYaml___parent___parent___id'
  | 'childrenPeopleYaml___parent___parent___children'
  | 'childrenPeopleYaml___parent___children'
  | 'childrenPeopleYaml___parent___children___id'
  | 'childrenPeopleYaml___parent___children___children'
  | 'childrenPeopleYaml___parent___internal___content'
  | 'childrenPeopleYaml___parent___internal___contentDigest'
  | 'childrenPeopleYaml___parent___internal___description'
  | 'childrenPeopleYaml___parent___internal___fieldOwners'
  | 'childrenPeopleYaml___parent___internal___ignoreType'
  | 'childrenPeopleYaml___parent___internal___mediaType'
  | 'childrenPeopleYaml___parent___internal___owner'
  | 'childrenPeopleYaml___parent___internal___type'
  | 'childrenPeopleYaml___children'
  | 'childrenPeopleYaml___children___id'
  | 'childrenPeopleYaml___children___parent___id'
  | 'childrenPeopleYaml___children___parent___children'
  | 'childrenPeopleYaml___children___children'
  | 'childrenPeopleYaml___children___children___id'
  | 'childrenPeopleYaml___children___children___children'
  | 'childrenPeopleYaml___children___internal___content'
  | 'childrenPeopleYaml___children___internal___contentDigest'
  | 'childrenPeopleYaml___children___internal___description'
  | 'childrenPeopleYaml___children___internal___fieldOwners'
  | 'childrenPeopleYaml___children___internal___ignoreType'
  | 'childrenPeopleYaml___children___internal___mediaType'
  | 'childrenPeopleYaml___children___internal___owner'
  | 'childrenPeopleYaml___children___internal___type'
  | 'childrenPeopleYaml___internal___content'
  | 'childrenPeopleYaml___internal___contentDigest'
  | 'childrenPeopleYaml___internal___description'
  | 'childrenPeopleYaml___internal___fieldOwners'
  | 'childrenPeopleYaml___internal___ignoreType'
  | 'childrenPeopleYaml___internal___mediaType'
  | 'childrenPeopleYaml___internal___owner'
  | 'childrenPeopleYaml___internal___type'
  | 'childrenPeopleYaml___slug'
  | 'childrenPeopleYaml___name___mandarin'
  | 'childrenPeopleYaml___name___english'
  | 'childrenPeopleYaml___title'
  | 'childrenPeopleYaml___image___sourceInstanceName'
  | 'childrenPeopleYaml___image___absolutePath'
  | 'childrenPeopleYaml___image___relativePath'
  | 'childrenPeopleYaml___image___extension'
  | 'childrenPeopleYaml___image___size'
  | 'childrenPeopleYaml___image___prettySize'
  | 'childrenPeopleYaml___image___modifiedTime'
  | 'childrenPeopleYaml___image___accessTime'
  | 'childrenPeopleYaml___image___changeTime'
  | 'childrenPeopleYaml___image___birthTime'
  | 'childrenPeopleYaml___image___root'
  | 'childrenPeopleYaml___image___dir'
  | 'childrenPeopleYaml___image___base'
  | 'childrenPeopleYaml___image___ext'
  | 'childrenPeopleYaml___image___name'
  | 'childrenPeopleYaml___image___relativeDirectory'
  | 'childrenPeopleYaml___image___dev'
  | 'childrenPeopleYaml___image___mode'
  | 'childrenPeopleYaml___image___nlink'
  | 'childrenPeopleYaml___image___uid'
  | 'childrenPeopleYaml___image___gid'
  | 'childrenPeopleYaml___image___rdev'
  | 'childrenPeopleYaml___image___ino'
  | 'childrenPeopleYaml___image___atimeMs'
  | 'childrenPeopleYaml___image___mtimeMs'
  | 'childrenPeopleYaml___image___ctimeMs'
  | 'childrenPeopleYaml___image___atime'
  | 'childrenPeopleYaml___image___mtime'
  | 'childrenPeopleYaml___image___ctime'
  | 'childrenPeopleYaml___image___birthtime'
  | 'childrenPeopleYaml___image___birthtimeMs'
  | 'childrenPeopleYaml___image___blksize'
  | 'childrenPeopleYaml___image___blocks'
  | 'childrenPeopleYaml___image___publicURL'
  | 'childrenPeopleYaml___image___childrenImageSharp'
  | 'childrenPeopleYaml___image___childrenImageSharp___gatsbyImageData'
  | 'childrenPeopleYaml___image___childrenImageSharp___id'
  | 'childrenPeopleYaml___image___childrenImageSharp___children'
  | 'childrenPeopleYaml___image___childImageSharp___gatsbyImageData'
  | 'childrenPeopleYaml___image___childImageSharp___id'
  | 'childrenPeopleYaml___image___childImageSharp___children'
  | 'childrenPeopleYaml___image___childrenMdx'
  | 'childrenPeopleYaml___image___childrenMdx___rawBody'
  | 'childrenPeopleYaml___image___childrenMdx___fileAbsolutePath'
  | 'childrenPeopleYaml___image___childrenMdx___slug'
  | 'childrenPeopleYaml___image___childrenMdx___body'
  | 'childrenPeopleYaml___image___childrenMdx___excerpt'
  | 'childrenPeopleYaml___image___childrenMdx___headings'
  | 'childrenPeopleYaml___image___childrenMdx___html'
  | 'childrenPeopleYaml___image___childrenMdx___mdxAST'
  | 'childrenPeopleYaml___image___childrenMdx___tableOfContents'
  | 'childrenPeopleYaml___image___childrenMdx___timeToRead'
  | 'childrenPeopleYaml___image___childrenMdx___id'
  | 'childrenPeopleYaml___image___childrenMdx___children'
  | 'childrenPeopleYaml___image___childMdx___rawBody'
  | 'childrenPeopleYaml___image___childMdx___fileAbsolutePath'
  | 'childrenPeopleYaml___image___childMdx___slug'
  | 'childrenPeopleYaml___image___childMdx___body'
  | 'childrenPeopleYaml___image___childMdx___excerpt'
  | 'childrenPeopleYaml___image___childMdx___headings'
  | 'childrenPeopleYaml___image___childMdx___html'
  | 'childrenPeopleYaml___image___childMdx___mdxAST'
  | 'childrenPeopleYaml___image___childMdx___tableOfContents'
  | 'childrenPeopleYaml___image___childMdx___timeToRead'
  | 'childrenPeopleYaml___image___childMdx___id'
  | 'childrenPeopleYaml___image___childMdx___children'
  | 'childrenPeopleYaml___image___childrenWorkflowsYaml'
  | 'childrenPeopleYaml___image___childrenWorkflowsYaml___id'
  | 'childrenPeopleYaml___image___childrenWorkflowsYaml___children'
  | 'childrenPeopleYaml___image___childrenWorkflowsYaml___name'
  | 'childrenPeopleYaml___image___childWorkflowsYaml___id'
  | 'childrenPeopleYaml___image___childWorkflowsYaml___children'
  | 'childrenPeopleYaml___image___childWorkflowsYaml___name'
  | 'childrenPeopleYaml___image___childrenPeopleYaml'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___id'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___children'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___slug'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___title'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___expertise'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___headline'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___story'
  | 'childrenPeopleYaml___image___childrenPeopleYaml___achievements'
  | 'childrenPeopleYaml___image___childPeopleYaml___id'
  | 'childrenPeopleYaml___image___childPeopleYaml___children'
  | 'childrenPeopleYaml___image___childPeopleYaml___slug'
  | 'childrenPeopleYaml___image___childPeopleYaml___title'
  | 'childrenPeopleYaml___image___childPeopleYaml___expertise'
  | 'childrenPeopleYaml___image___childPeopleYaml___headline'
  | 'childrenPeopleYaml___image___childPeopleYaml___story'
  | 'childrenPeopleYaml___image___childPeopleYaml___achievements'
  | 'childrenPeopleYaml___image___id'
  | 'childrenPeopleYaml___image___parent___id'
  | 'childrenPeopleYaml___image___parent___children'
  | 'childrenPeopleYaml___image___children'
  | 'childrenPeopleYaml___image___children___id'
  | 'childrenPeopleYaml___image___children___children'
  | 'childrenPeopleYaml___image___internal___content'
  | 'childrenPeopleYaml___image___internal___contentDigest'
  | 'childrenPeopleYaml___image___internal___description'
  | 'childrenPeopleYaml___image___internal___fieldOwners'
  | 'childrenPeopleYaml___image___internal___ignoreType'
  | 'childrenPeopleYaml___image___internal___mediaType'
  | 'childrenPeopleYaml___image___internal___owner'
  | 'childrenPeopleYaml___image___internal___type'
  | 'childrenPeopleYaml___expertise'
  | 'childrenPeopleYaml___headline'
  | 'childrenPeopleYaml___story'
  | 'childrenPeopleYaml___achievements'
  | 'childrenPeopleYaml___socialNetworks___email'
  | 'childrenPeopleYaml___socialNetworks___github'
  | 'childrenPeopleYaml___socialNetworks___telegram'
  | 'childrenPeopleYaml___socialNetworks___linkedin'
  | 'childrenPeopleYaml___socialNetworks___facebook'
  | 'childrenPeopleYaml___socialNetworks___portal'
  | 'childPeopleYaml___id'
  | 'childPeopleYaml___parent___id'
  | 'childPeopleYaml___parent___parent___id'
  | 'childPeopleYaml___parent___parent___children'
  | 'childPeopleYaml___parent___children'
  | 'childPeopleYaml___parent___children___id'
  | 'childPeopleYaml___parent___children___children'
  | 'childPeopleYaml___parent___internal___content'
  | 'childPeopleYaml___parent___internal___contentDigest'
  | 'childPeopleYaml___parent___internal___description'
  | 'childPeopleYaml___parent___internal___fieldOwners'
  | 'childPeopleYaml___parent___internal___ignoreType'
  | 'childPeopleYaml___parent___internal___mediaType'
  | 'childPeopleYaml___parent___internal___owner'
  | 'childPeopleYaml___parent___internal___type'
  | 'childPeopleYaml___children'
  | 'childPeopleYaml___children___id'
  | 'childPeopleYaml___children___parent___id'
  | 'childPeopleYaml___children___parent___children'
  | 'childPeopleYaml___children___children'
  | 'childPeopleYaml___children___children___id'
  | 'childPeopleYaml___children___children___children'
  | 'childPeopleYaml___children___internal___content'
  | 'childPeopleYaml___children___internal___contentDigest'
  | 'childPeopleYaml___children___internal___description'
  | 'childPeopleYaml___children___internal___fieldOwners'
  | 'childPeopleYaml___children___internal___ignoreType'
  | 'childPeopleYaml___children___internal___mediaType'
  | 'childPeopleYaml___children___internal___owner'
  | 'childPeopleYaml___children___internal___type'
  | 'childPeopleYaml___internal___content'
  | 'childPeopleYaml___internal___contentDigest'
  | 'childPeopleYaml___internal___description'
  | 'childPeopleYaml___internal___fieldOwners'
  | 'childPeopleYaml___internal___ignoreType'
  | 'childPeopleYaml___internal___mediaType'
  | 'childPeopleYaml___internal___owner'
  | 'childPeopleYaml___internal___type'
  | 'childPeopleYaml___slug'
  | 'childPeopleYaml___name___mandarin'
  | 'childPeopleYaml___name___english'
  | 'childPeopleYaml___title'
  | 'childPeopleYaml___image___sourceInstanceName'
  | 'childPeopleYaml___image___absolutePath'
  | 'childPeopleYaml___image___relativePath'
  | 'childPeopleYaml___image___extension'
  | 'childPeopleYaml___image___size'
  | 'childPeopleYaml___image___prettySize'
  | 'childPeopleYaml___image___modifiedTime'
  | 'childPeopleYaml___image___accessTime'
  | 'childPeopleYaml___image___changeTime'
  | 'childPeopleYaml___image___birthTime'
  | 'childPeopleYaml___image___root'
  | 'childPeopleYaml___image___dir'
  | 'childPeopleYaml___image___base'
  | 'childPeopleYaml___image___ext'
  | 'childPeopleYaml___image___name'
  | 'childPeopleYaml___image___relativeDirectory'
  | 'childPeopleYaml___image___dev'
  | 'childPeopleYaml___image___mode'
  | 'childPeopleYaml___image___nlink'
  | 'childPeopleYaml___image___uid'
  | 'childPeopleYaml___image___gid'
  | 'childPeopleYaml___image___rdev'
  | 'childPeopleYaml___image___ino'
  | 'childPeopleYaml___image___atimeMs'
  | 'childPeopleYaml___image___mtimeMs'
  | 'childPeopleYaml___image___ctimeMs'
  | 'childPeopleYaml___image___atime'
  | 'childPeopleYaml___image___mtime'
  | 'childPeopleYaml___image___ctime'
  | 'childPeopleYaml___image___birthtime'
  | 'childPeopleYaml___image___birthtimeMs'
  | 'childPeopleYaml___image___blksize'
  | 'childPeopleYaml___image___blocks'
  | 'childPeopleYaml___image___publicURL'
  | 'childPeopleYaml___image___childrenImageSharp'
  | 'childPeopleYaml___image___childrenImageSharp___gatsbyImageData'
  | 'childPeopleYaml___image___childrenImageSharp___id'
  | 'childPeopleYaml___image___childrenImageSharp___children'
  | 'childPeopleYaml___image___childImageSharp___gatsbyImageData'
  | 'childPeopleYaml___image___childImageSharp___id'
  | 'childPeopleYaml___image___childImageSharp___children'
  | 'childPeopleYaml___image___childrenMdx'
  | 'childPeopleYaml___image___childrenMdx___rawBody'
  | 'childPeopleYaml___image___childrenMdx___fileAbsolutePath'
  | 'childPeopleYaml___image___childrenMdx___slug'
  | 'childPeopleYaml___image___childrenMdx___body'
  | 'childPeopleYaml___image___childrenMdx___excerpt'
  | 'childPeopleYaml___image___childrenMdx___headings'
  | 'childPeopleYaml___image___childrenMdx___html'
  | 'childPeopleYaml___image___childrenMdx___mdxAST'
  | 'childPeopleYaml___image___childrenMdx___tableOfContents'
  | 'childPeopleYaml___image___childrenMdx___timeToRead'
  | 'childPeopleYaml___image___childrenMdx___id'
  | 'childPeopleYaml___image___childrenMdx___children'
  | 'childPeopleYaml___image___childMdx___rawBody'
  | 'childPeopleYaml___image___childMdx___fileAbsolutePath'
  | 'childPeopleYaml___image___childMdx___slug'
  | 'childPeopleYaml___image___childMdx___body'
  | 'childPeopleYaml___image___childMdx___excerpt'
  | 'childPeopleYaml___image___childMdx___headings'
  | 'childPeopleYaml___image___childMdx___html'
  | 'childPeopleYaml___image___childMdx___mdxAST'
  | 'childPeopleYaml___image___childMdx___tableOfContents'
  | 'childPeopleYaml___image___childMdx___timeToRead'
  | 'childPeopleYaml___image___childMdx___id'
  | 'childPeopleYaml___image___childMdx___children'
  | 'childPeopleYaml___image___childrenWorkflowsYaml'
  | 'childPeopleYaml___image___childrenWorkflowsYaml___id'
  | 'childPeopleYaml___image___childrenWorkflowsYaml___children'
  | 'childPeopleYaml___image___childrenWorkflowsYaml___name'
  | 'childPeopleYaml___image___childWorkflowsYaml___id'
  | 'childPeopleYaml___image___childWorkflowsYaml___children'
  | 'childPeopleYaml___image___childWorkflowsYaml___name'
  | 'childPeopleYaml___image___childrenPeopleYaml'
  | 'childPeopleYaml___image___childrenPeopleYaml___id'
  | 'childPeopleYaml___image___childrenPeopleYaml___children'
  | 'childPeopleYaml___image___childrenPeopleYaml___slug'
  | 'childPeopleYaml___image___childrenPeopleYaml___title'
  | 'childPeopleYaml___image___childrenPeopleYaml___expertise'
  | 'childPeopleYaml___image___childrenPeopleYaml___headline'
  | 'childPeopleYaml___image___childrenPeopleYaml___story'
  | 'childPeopleYaml___image___childrenPeopleYaml___achievements'
  | 'childPeopleYaml___image___childPeopleYaml___id'
  | 'childPeopleYaml___image___childPeopleYaml___children'
  | 'childPeopleYaml___image___childPeopleYaml___slug'
  | 'childPeopleYaml___image___childPeopleYaml___title'
  | 'childPeopleYaml___image___childPeopleYaml___expertise'
  | 'childPeopleYaml___image___childPeopleYaml___headline'
  | 'childPeopleYaml___image___childPeopleYaml___story'
  | 'childPeopleYaml___image___childPeopleYaml___achievements'
  | 'childPeopleYaml___image___id'
  | 'childPeopleYaml___image___parent___id'
  | 'childPeopleYaml___image___parent___children'
  | 'childPeopleYaml___image___children'
  | 'childPeopleYaml___image___children___id'
  | 'childPeopleYaml___image___children___children'
  | 'childPeopleYaml___image___internal___content'
  | 'childPeopleYaml___image___internal___contentDigest'
  | 'childPeopleYaml___image___internal___description'
  | 'childPeopleYaml___image___internal___fieldOwners'
  | 'childPeopleYaml___image___internal___ignoreType'
  | 'childPeopleYaml___image___internal___mediaType'
  | 'childPeopleYaml___image___internal___owner'
  | 'childPeopleYaml___image___internal___type'
  | 'childPeopleYaml___expertise'
  | 'childPeopleYaml___headline'
  | 'childPeopleYaml___story'
  | 'childPeopleYaml___achievements'
  | 'childPeopleYaml___socialNetworks___email'
  | 'childPeopleYaml___socialNetworks___github'
  | 'childPeopleYaml___socialNetworks___telegram'
  | 'childPeopleYaml___socialNetworks___linkedin'
  | 'childPeopleYaml___socialNetworks___facebook'
  | 'childPeopleYaml___socialNetworks___portal'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  youtube?: InputMaybe<StringQueryOperatorInput>;
  facebook?: InputMaybe<StringQueryOperatorInput>;
  twitter?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___email'
  | 'siteMetadata___image'
  | 'siteMetadata___youtube'
  | 'siteMetadata___facebook'
  | 'siteMetadata___twitter'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___slug'
  | 'frontmatter___publishTime'
  | 'frontmatter___author'
  | 'frontmatter___category'
  | 'frontmatter___embeddedImagesLocal'
  | 'frontmatter___embeddedImagesLocal___sourceInstanceName'
  | 'frontmatter___embeddedImagesLocal___absolutePath'
  | 'frontmatter___embeddedImagesLocal___relativePath'
  | 'frontmatter___embeddedImagesLocal___extension'
  | 'frontmatter___embeddedImagesLocal___size'
  | 'frontmatter___embeddedImagesLocal___prettySize'
  | 'frontmatter___embeddedImagesLocal___modifiedTime'
  | 'frontmatter___embeddedImagesLocal___accessTime'
  | 'frontmatter___embeddedImagesLocal___changeTime'
  | 'frontmatter___embeddedImagesLocal___birthTime'
  | 'frontmatter___embeddedImagesLocal___root'
  | 'frontmatter___embeddedImagesLocal___dir'
  | 'frontmatter___embeddedImagesLocal___base'
  | 'frontmatter___embeddedImagesLocal___ext'
  | 'frontmatter___embeddedImagesLocal___name'
  | 'frontmatter___embeddedImagesLocal___relativeDirectory'
  | 'frontmatter___embeddedImagesLocal___dev'
  | 'frontmatter___embeddedImagesLocal___mode'
  | 'frontmatter___embeddedImagesLocal___nlink'
  | 'frontmatter___embeddedImagesLocal___uid'
  | 'frontmatter___embeddedImagesLocal___gid'
  | 'frontmatter___embeddedImagesLocal___rdev'
  | 'frontmatter___embeddedImagesLocal___ino'
  | 'frontmatter___embeddedImagesLocal___atimeMs'
  | 'frontmatter___embeddedImagesLocal___mtimeMs'
  | 'frontmatter___embeddedImagesLocal___ctimeMs'
  | 'frontmatter___embeddedImagesLocal___atime'
  | 'frontmatter___embeddedImagesLocal___mtime'
  | 'frontmatter___embeddedImagesLocal___ctime'
  | 'frontmatter___embeddedImagesLocal___birthtime'
  | 'frontmatter___embeddedImagesLocal___birthtimeMs'
  | 'frontmatter___embeddedImagesLocal___blksize'
  | 'frontmatter___embeddedImagesLocal___blocks'
  | 'frontmatter___embeddedImagesLocal___publicURL'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp___id'
  | 'frontmatter___embeddedImagesLocal___childrenImageSharp___children'
  | 'frontmatter___embeddedImagesLocal___childImageSharp___gatsbyImageData'
  | 'frontmatter___embeddedImagesLocal___childImageSharp___id'
  | 'frontmatter___embeddedImagesLocal___childImageSharp___children'
  | 'frontmatter___embeddedImagesLocal___childrenMdx'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___rawBody'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___fileAbsolutePath'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___slug'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___body'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___excerpt'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___headings'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___html'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___mdxAST'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___tableOfContents'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___timeToRead'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___id'
  | 'frontmatter___embeddedImagesLocal___childrenMdx___children'
  | 'frontmatter___embeddedImagesLocal___childMdx___rawBody'
  | 'frontmatter___embeddedImagesLocal___childMdx___fileAbsolutePath'
  | 'frontmatter___embeddedImagesLocal___childMdx___slug'
  | 'frontmatter___embeddedImagesLocal___childMdx___body'
  | 'frontmatter___embeddedImagesLocal___childMdx___excerpt'
  | 'frontmatter___embeddedImagesLocal___childMdx___headings'
  | 'frontmatter___embeddedImagesLocal___childMdx___html'
  | 'frontmatter___embeddedImagesLocal___childMdx___mdxAST'
  | 'frontmatter___embeddedImagesLocal___childMdx___tableOfContents'
  | 'frontmatter___embeddedImagesLocal___childMdx___timeToRead'
  | 'frontmatter___embeddedImagesLocal___childMdx___id'
  | 'frontmatter___embeddedImagesLocal___childMdx___children'
  | 'frontmatter___embeddedImagesLocal___childrenWorkflowsYaml'
  | 'frontmatter___embeddedImagesLocal___childrenWorkflowsYaml___id'
  | 'frontmatter___embeddedImagesLocal___childrenWorkflowsYaml___children'
  | 'frontmatter___embeddedImagesLocal___childrenWorkflowsYaml___name'
  | 'frontmatter___embeddedImagesLocal___childWorkflowsYaml___id'
  | 'frontmatter___embeddedImagesLocal___childWorkflowsYaml___children'
  | 'frontmatter___embeddedImagesLocal___childWorkflowsYaml___name'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___id'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___children'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___slug'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___title'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___expertise'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___headline'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___story'
  | 'frontmatter___embeddedImagesLocal___childrenPeopleYaml___achievements'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___id'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___children'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___slug'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___title'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___expertise'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___headline'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___story'
  | 'frontmatter___embeddedImagesLocal___childPeopleYaml___achievements'
  | 'frontmatter___embeddedImagesLocal___id'
  | 'frontmatter___embeddedImagesLocal___parent___id'
  | 'frontmatter___embeddedImagesLocal___parent___children'
  | 'frontmatter___embeddedImagesLocal___children'
  | 'frontmatter___embeddedImagesLocal___children___id'
  | 'frontmatter___embeddedImagesLocal___children___children'
  | 'frontmatter___embeddedImagesLocal___internal___content'
  | 'frontmatter___embeddedImagesLocal___internal___contentDigest'
  | 'frontmatter___embeddedImagesLocal___internal___description'
  | 'frontmatter___embeddedImagesLocal___internal___fieldOwners'
  | 'frontmatter___embeddedImagesLocal___internal___ignoreType'
  | 'frontmatter___embeddedImagesLocal___internal___mediaType'
  | 'frontmatter___embeddedImagesLocal___internal___owner'
  | 'frontmatter___embeddedImagesLocal___internal___type'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MdxGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WorkflowsYamlConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WorkflowsYamlEdge>;
  nodes: Array<WorkflowsYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WorkflowsYamlGroupConnection>;
};


export type WorkflowsYamlConnectionDistinctArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlConnectionMaxArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlConnectionMinArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlConnectionSumArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WorkflowsYamlFieldsEnum;
};

export type WorkflowsYamlEdge = {
  next?: Maybe<WorkflowsYaml>;
  node: WorkflowsYaml;
  previous?: Maybe<WorkflowsYaml>;
};

export type WorkflowsYamlFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'on___push___branches'
  | 'jobs___notify___runs_on'
  | 'jobs___notify___steps'
  | 'jobs___notify___steps___name'
  | 'jobs___notify___steps___uses';

export type WorkflowsYamlGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WorkflowsYamlEdge>;
  nodes: Array<WorkflowsYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<WorkflowsYamlGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type WorkflowsYamlGroupConnectionDistinctArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlGroupConnectionMaxArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlGroupConnectionMinArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlGroupConnectionSumArgs = {
  field: WorkflowsYamlFieldsEnum;
};


export type WorkflowsYamlGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: WorkflowsYamlFieldsEnum;
};

export type WorkflowsYamlSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WorkflowsYamlFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type PeopleYamlConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PeopleYamlEdge>;
  nodes: Array<PeopleYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PeopleYamlGroupConnection>;
};


export type PeopleYamlConnectionDistinctArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlConnectionMaxArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlConnectionMinArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlConnectionSumArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PeopleYamlFieldsEnum;
};

export type PeopleYamlEdge = {
  next?: Maybe<PeopleYaml>;
  node: PeopleYaml;
  previous?: Maybe<PeopleYaml>;
};

export type PeopleYamlFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'slug'
  | 'name___mandarin'
  | 'name___english'
  | 'title'
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___publicURL'
  | 'image___childrenImageSharp'
  | 'image___childrenImageSharp___fixed___base64'
  | 'image___childrenImageSharp___fixed___tracedSVG'
  | 'image___childrenImageSharp___fixed___aspectRatio'
  | 'image___childrenImageSharp___fixed___width'
  | 'image___childrenImageSharp___fixed___height'
  | 'image___childrenImageSharp___fixed___src'
  | 'image___childrenImageSharp___fixed___srcSet'
  | 'image___childrenImageSharp___fixed___srcWebp'
  | 'image___childrenImageSharp___fixed___srcSetWebp'
  | 'image___childrenImageSharp___fixed___originalName'
  | 'image___childrenImageSharp___fluid___base64'
  | 'image___childrenImageSharp___fluid___tracedSVG'
  | 'image___childrenImageSharp___fluid___aspectRatio'
  | 'image___childrenImageSharp___fluid___src'
  | 'image___childrenImageSharp___fluid___srcSet'
  | 'image___childrenImageSharp___fluid___srcWebp'
  | 'image___childrenImageSharp___fluid___srcSetWebp'
  | 'image___childrenImageSharp___fluid___sizes'
  | 'image___childrenImageSharp___fluid___originalImg'
  | 'image___childrenImageSharp___fluid___originalName'
  | 'image___childrenImageSharp___fluid___presentationWidth'
  | 'image___childrenImageSharp___fluid___presentationHeight'
  | 'image___childrenImageSharp___gatsbyImageData'
  | 'image___childrenImageSharp___original___width'
  | 'image___childrenImageSharp___original___height'
  | 'image___childrenImageSharp___original___src'
  | 'image___childrenImageSharp___resize___src'
  | 'image___childrenImageSharp___resize___tracedSVG'
  | 'image___childrenImageSharp___resize___width'
  | 'image___childrenImageSharp___resize___height'
  | 'image___childrenImageSharp___resize___aspectRatio'
  | 'image___childrenImageSharp___resize___originalName'
  | 'image___childrenImageSharp___id'
  | 'image___childrenImageSharp___parent___id'
  | 'image___childrenImageSharp___parent___children'
  | 'image___childrenImageSharp___children'
  | 'image___childrenImageSharp___children___id'
  | 'image___childrenImageSharp___children___children'
  | 'image___childrenImageSharp___internal___content'
  | 'image___childrenImageSharp___internal___contentDigest'
  | 'image___childrenImageSharp___internal___description'
  | 'image___childrenImageSharp___internal___fieldOwners'
  | 'image___childrenImageSharp___internal___ignoreType'
  | 'image___childrenImageSharp___internal___mediaType'
  | 'image___childrenImageSharp___internal___owner'
  | 'image___childrenImageSharp___internal___type'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___gatsbyImageData'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___childrenMdx'
  | 'image___childrenMdx___rawBody'
  | 'image___childrenMdx___fileAbsolutePath'
  | 'image___childrenMdx___frontmatter___title'
  | 'image___childrenMdx___frontmatter___slug'
  | 'image___childrenMdx___frontmatter___publishTime'
  | 'image___childrenMdx___frontmatter___author'
  | 'image___childrenMdx___frontmatter___category'
  | 'image___childrenMdx___frontmatter___embeddedImagesLocal'
  | 'image___childrenMdx___slug'
  | 'image___childrenMdx___body'
  | 'image___childrenMdx___excerpt'
  | 'image___childrenMdx___headings'
  | 'image___childrenMdx___headings___value'
  | 'image___childrenMdx___headings___depth'
  | 'image___childrenMdx___html'
  | 'image___childrenMdx___mdxAST'
  | 'image___childrenMdx___tableOfContents'
  | 'image___childrenMdx___timeToRead'
  | 'image___childrenMdx___wordCount___paragraphs'
  | 'image___childrenMdx___wordCount___sentences'
  | 'image___childrenMdx___wordCount___words'
  | 'image___childrenMdx___id'
  | 'image___childrenMdx___parent___id'
  | 'image___childrenMdx___parent___children'
  | 'image___childrenMdx___children'
  | 'image___childrenMdx___children___id'
  | 'image___childrenMdx___children___children'
  | 'image___childrenMdx___internal___content'
  | 'image___childrenMdx___internal___contentDigest'
  | 'image___childrenMdx___internal___description'
  | 'image___childrenMdx___internal___fieldOwners'
  | 'image___childrenMdx___internal___ignoreType'
  | 'image___childrenMdx___internal___mediaType'
  | 'image___childrenMdx___internal___owner'
  | 'image___childrenMdx___internal___type'
  | 'image___childMdx___rawBody'
  | 'image___childMdx___fileAbsolutePath'
  | 'image___childMdx___frontmatter___title'
  | 'image___childMdx___frontmatter___slug'
  | 'image___childMdx___frontmatter___publishTime'
  | 'image___childMdx___frontmatter___author'
  | 'image___childMdx___frontmatter___category'
  | 'image___childMdx___frontmatter___embeddedImagesLocal'
  | 'image___childMdx___slug'
  | 'image___childMdx___body'
  | 'image___childMdx___excerpt'
  | 'image___childMdx___headings'
  | 'image___childMdx___headings___value'
  | 'image___childMdx___headings___depth'
  | 'image___childMdx___html'
  | 'image___childMdx___mdxAST'
  | 'image___childMdx___tableOfContents'
  | 'image___childMdx___timeToRead'
  | 'image___childMdx___wordCount___paragraphs'
  | 'image___childMdx___wordCount___sentences'
  | 'image___childMdx___wordCount___words'
  | 'image___childMdx___id'
  | 'image___childMdx___parent___id'
  | 'image___childMdx___parent___children'
  | 'image___childMdx___children'
  | 'image___childMdx___children___id'
  | 'image___childMdx___children___children'
  | 'image___childMdx___internal___content'
  | 'image___childMdx___internal___contentDigest'
  | 'image___childMdx___internal___description'
  | 'image___childMdx___internal___fieldOwners'
  | 'image___childMdx___internal___ignoreType'
  | 'image___childMdx___internal___mediaType'
  | 'image___childMdx___internal___owner'
  | 'image___childMdx___internal___type'
  | 'image___childrenWorkflowsYaml'
  | 'image___childrenWorkflowsYaml___id'
  | 'image___childrenWorkflowsYaml___parent___id'
  | 'image___childrenWorkflowsYaml___parent___children'
  | 'image___childrenWorkflowsYaml___children'
  | 'image___childrenWorkflowsYaml___children___id'
  | 'image___childrenWorkflowsYaml___children___children'
  | 'image___childrenWorkflowsYaml___internal___content'
  | 'image___childrenWorkflowsYaml___internal___contentDigest'
  | 'image___childrenWorkflowsYaml___internal___description'
  | 'image___childrenWorkflowsYaml___internal___fieldOwners'
  | 'image___childrenWorkflowsYaml___internal___ignoreType'
  | 'image___childrenWorkflowsYaml___internal___mediaType'
  | 'image___childrenWorkflowsYaml___internal___owner'
  | 'image___childrenWorkflowsYaml___internal___type'
  | 'image___childrenWorkflowsYaml___name'
  | 'image___childWorkflowsYaml___id'
  | 'image___childWorkflowsYaml___parent___id'
  | 'image___childWorkflowsYaml___parent___children'
  | 'image___childWorkflowsYaml___children'
  | 'image___childWorkflowsYaml___children___id'
  | 'image___childWorkflowsYaml___children___children'
  | 'image___childWorkflowsYaml___internal___content'
  | 'image___childWorkflowsYaml___internal___contentDigest'
  | 'image___childWorkflowsYaml___internal___description'
  | 'image___childWorkflowsYaml___internal___fieldOwners'
  | 'image___childWorkflowsYaml___internal___ignoreType'
  | 'image___childWorkflowsYaml___internal___mediaType'
  | 'image___childWorkflowsYaml___internal___owner'
  | 'image___childWorkflowsYaml___internal___type'
  | 'image___childWorkflowsYaml___name'
  | 'image___childrenPeopleYaml'
  | 'image___childrenPeopleYaml___id'
  | 'image___childrenPeopleYaml___parent___id'
  | 'image___childrenPeopleYaml___parent___children'
  | 'image___childrenPeopleYaml___children'
  | 'image___childrenPeopleYaml___children___id'
  | 'image___childrenPeopleYaml___children___children'
  | 'image___childrenPeopleYaml___internal___content'
  | 'image___childrenPeopleYaml___internal___contentDigest'
  | 'image___childrenPeopleYaml___internal___description'
  | 'image___childrenPeopleYaml___internal___fieldOwners'
  | 'image___childrenPeopleYaml___internal___ignoreType'
  | 'image___childrenPeopleYaml___internal___mediaType'
  | 'image___childrenPeopleYaml___internal___owner'
  | 'image___childrenPeopleYaml___internal___type'
  | 'image___childrenPeopleYaml___slug'
  | 'image___childrenPeopleYaml___name___mandarin'
  | 'image___childrenPeopleYaml___name___english'
  | 'image___childrenPeopleYaml___title'
  | 'image___childrenPeopleYaml___image___sourceInstanceName'
  | 'image___childrenPeopleYaml___image___absolutePath'
  | 'image___childrenPeopleYaml___image___relativePath'
  | 'image___childrenPeopleYaml___image___extension'
  | 'image___childrenPeopleYaml___image___size'
  | 'image___childrenPeopleYaml___image___prettySize'
  | 'image___childrenPeopleYaml___image___modifiedTime'
  | 'image___childrenPeopleYaml___image___accessTime'
  | 'image___childrenPeopleYaml___image___changeTime'
  | 'image___childrenPeopleYaml___image___birthTime'
  | 'image___childrenPeopleYaml___image___root'
  | 'image___childrenPeopleYaml___image___dir'
  | 'image___childrenPeopleYaml___image___base'
  | 'image___childrenPeopleYaml___image___ext'
  | 'image___childrenPeopleYaml___image___name'
  | 'image___childrenPeopleYaml___image___relativeDirectory'
  | 'image___childrenPeopleYaml___image___dev'
  | 'image___childrenPeopleYaml___image___mode'
  | 'image___childrenPeopleYaml___image___nlink'
  | 'image___childrenPeopleYaml___image___uid'
  | 'image___childrenPeopleYaml___image___gid'
  | 'image___childrenPeopleYaml___image___rdev'
  | 'image___childrenPeopleYaml___image___ino'
  | 'image___childrenPeopleYaml___image___atimeMs'
  | 'image___childrenPeopleYaml___image___mtimeMs'
  | 'image___childrenPeopleYaml___image___ctimeMs'
  | 'image___childrenPeopleYaml___image___atime'
  | 'image___childrenPeopleYaml___image___mtime'
  | 'image___childrenPeopleYaml___image___ctime'
  | 'image___childrenPeopleYaml___image___birthtime'
  | 'image___childrenPeopleYaml___image___birthtimeMs'
  | 'image___childrenPeopleYaml___image___blksize'
  | 'image___childrenPeopleYaml___image___blocks'
  | 'image___childrenPeopleYaml___image___publicURL'
  | 'image___childrenPeopleYaml___image___childrenImageSharp'
  | 'image___childrenPeopleYaml___image___childrenMdx'
  | 'image___childrenPeopleYaml___image___childrenWorkflowsYaml'
  | 'image___childrenPeopleYaml___image___childrenPeopleYaml'
  | 'image___childrenPeopleYaml___image___id'
  | 'image___childrenPeopleYaml___image___children'
  | 'image___childrenPeopleYaml___expertise'
  | 'image___childrenPeopleYaml___headline'
  | 'image___childrenPeopleYaml___story'
  | 'image___childrenPeopleYaml___achievements'
  | 'image___childrenPeopleYaml___socialNetworks___email'
  | 'image___childrenPeopleYaml___socialNetworks___github'
  | 'image___childrenPeopleYaml___socialNetworks___telegram'
  | 'image___childrenPeopleYaml___socialNetworks___linkedin'
  | 'image___childrenPeopleYaml___socialNetworks___facebook'
  | 'image___childrenPeopleYaml___socialNetworks___portal'
  | 'image___childPeopleYaml___id'
  | 'image___childPeopleYaml___parent___id'
  | 'image___childPeopleYaml___parent___children'
  | 'image___childPeopleYaml___children'
  | 'image___childPeopleYaml___children___id'
  | 'image___childPeopleYaml___children___children'
  | 'image___childPeopleYaml___internal___content'
  | 'image___childPeopleYaml___internal___contentDigest'
  | 'image___childPeopleYaml___internal___description'
  | 'image___childPeopleYaml___internal___fieldOwners'
  | 'image___childPeopleYaml___internal___ignoreType'
  | 'image___childPeopleYaml___internal___mediaType'
  | 'image___childPeopleYaml___internal___owner'
  | 'image___childPeopleYaml___internal___type'
  | 'image___childPeopleYaml___slug'
  | 'image___childPeopleYaml___name___mandarin'
  | 'image___childPeopleYaml___name___english'
  | 'image___childPeopleYaml___title'
  | 'image___childPeopleYaml___image___sourceInstanceName'
  | 'image___childPeopleYaml___image___absolutePath'
  | 'image___childPeopleYaml___image___relativePath'
  | 'image___childPeopleYaml___image___extension'
  | 'image___childPeopleYaml___image___size'
  | 'image___childPeopleYaml___image___prettySize'
  | 'image___childPeopleYaml___image___modifiedTime'
  | 'image___childPeopleYaml___image___accessTime'
  | 'image___childPeopleYaml___image___changeTime'
  | 'image___childPeopleYaml___image___birthTime'
  | 'image___childPeopleYaml___image___root'
  | 'image___childPeopleYaml___image___dir'
  | 'image___childPeopleYaml___image___base'
  | 'image___childPeopleYaml___image___ext'
  | 'image___childPeopleYaml___image___name'
  | 'image___childPeopleYaml___image___relativeDirectory'
  | 'image___childPeopleYaml___image___dev'
  | 'image___childPeopleYaml___image___mode'
  | 'image___childPeopleYaml___image___nlink'
  | 'image___childPeopleYaml___image___uid'
  | 'image___childPeopleYaml___image___gid'
  | 'image___childPeopleYaml___image___rdev'
  | 'image___childPeopleYaml___image___ino'
  | 'image___childPeopleYaml___image___atimeMs'
  | 'image___childPeopleYaml___image___mtimeMs'
  | 'image___childPeopleYaml___image___ctimeMs'
  | 'image___childPeopleYaml___image___atime'
  | 'image___childPeopleYaml___image___mtime'
  | 'image___childPeopleYaml___image___ctime'
  | 'image___childPeopleYaml___image___birthtime'
  | 'image___childPeopleYaml___image___birthtimeMs'
  | 'image___childPeopleYaml___image___blksize'
  | 'image___childPeopleYaml___image___blocks'
  | 'image___childPeopleYaml___image___publicURL'
  | 'image___childPeopleYaml___image___childrenImageSharp'
  | 'image___childPeopleYaml___image___childrenMdx'
  | 'image___childPeopleYaml___image___childrenWorkflowsYaml'
  | 'image___childPeopleYaml___image___childrenPeopleYaml'
  | 'image___childPeopleYaml___image___id'
  | 'image___childPeopleYaml___image___children'
  | 'image___childPeopleYaml___expertise'
  | 'image___childPeopleYaml___headline'
  | 'image___childPeopleYaml___story'
  | 'image___childPeopleYaml___achievements'
  | 'image___childPeopleYaml___socialNetworks___email'
  | 'image___childPeopleYaml___socialNetworks___github'
  | 'image___childPeopleYaml___socialNetworks___telegram'
  | 'image___childPeopleYaml___socialNetworks___linkedin'
  | 'image___childPeopleYaml___socialNetworks___facebook'
  | 'image___childPeopleYaml___socialNetworks___portal'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'expertise'
  | 'headline'
  | 'story'
  | 'achievements'
  | 'socialNetworks___email'
  | 'socialNetworks___github'
  | 'socialNetworks___telegram'
  | 'socialNetworks___linkedin'
  | 'socialNetworks___facebook'
  | 'socialNetworks___portal';

export type PeopleYamlGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PeopleYamlEdge>;
  nodes: Array<PeopleYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PeopleYamlGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type PeopleYamlGroupConnectionDistinctArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlGroupConnectionMaxArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlGroupConnectionMinArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlGroupConnectionSumArgs = {
  field: PeopleYamlFieldsEnum;
};


export type PeopleYamlGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PeopleYamlFieldsEnum;
};

export type PeopleYamlSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PeopleYamlFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type EveryoneQueryVariables = Exact<{ [key: string]: never; }>;


export type EveryoneQuery = { people: { nodes: Array<{ id: string, slug?: string | undefined, name?: { mandarin?: string | undefined, english?: string | undefined } | undefined, image?: { childImageSharp?: { gatsbyImageData: any } | undefined } | undefined }> } };

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { articles: { nodes: Array<{ id: string, name: string, childMdx?: { wordCount?: { words?: number | undefined } | undefined, frontmatter?: { title: string, slug?: string | undefined, publishTime?: number | undefined, author?: string | undefined } | undefined } | undefined }> } };

export type ContactQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactQuery = { site?: { siteMetadata?: { email?: string | undefined, youtube?: string | undefined, facebook?: string | undefined, twitter?: string | undefined } | undefined } | undefined };

export type PortfolioQueryVariables = Exact<{ [key: string]: never; }>;


export type PortfolioQuery = { projects: { nodes: Array<{ id: string, name: string, childMdx?: { slug?: string | undefined, frontmatter?: { category?: string | undefined, title: string, embeddedImagesLocal?: Array<{ childImageSharp?: { gatsbyImageData: any } | undefined } | undefined> | undefined } | undefined } | undefined }> }, expertise: { nodes: Array<{ id: string, name: string, childMdx?: { slug?: string | undefined, frontmatter?: { category?: string | undefined, title: string, embeddedImagesLocal?: Array<{ childImageSharp?: { gatsbyImageData: any } | undefined } | undefined> | undefined } | undefined } | undefined }> } };

export type PortfolioFileNodeFragment = { nodes: Array<{ id: string, name: string, childMdx?: { slug?: string | undefined, frontmatter?: { category?: string | undefined, title: string, embeddedImagesLocal?: Array<{ childImageSharp?: { gatsbyImageData: any } | undefined } | undefined> | undefined } | undefined } | undefined }> };

export type ArticleQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type ArticleQuery = { article: { nodes: Array<{ name: string, changeTime: any, birthTime: any, childMdx?: { body: string, frontmatter?: { title: string, publishTime?: number | undefined, author?: string | undefined } | undefined } | undefined }> } };

export type PersonQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PersonQuery = { person?: { achievements?: Array<string | undefined> | undefined, expertise?: Array<string | undefined> | undefined, headline?: string | undefined, id: string, slug?: string | undefined, story?: string | undefined, title?: string | undefined, name?: { english?: string | undefined, mandarin?: string | undefined } | undefined, profilePicture?: { id: string, childImageSharp?: { gatsbyImageData: any } | undefined } | undefined, socialNetworks?: { email?: string | undefined, github?: string | undefined, telegram?: string | undefined, facebook?: string | undefined, linkedin?: string | undefined, portal?: string | undefined } | undefined } | undefined };

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetadataQuery = { site?: { siteMetadata?: { title?: string | undefined, siteUrl?: string | undefined, defaultDescription?: string | undefined, defaultImage?: string | undefined } | undefined } | undefined };

export type GatsbyImageSharpFixedFragment = { base64?: string | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | undefined, srcSetWebp?: string | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | undefined, srcSetWebp?: string | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | undefined, srcSetWebp?: string | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | undefined, srcSetWebp?: string | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | undefined, srcSetWebp?: string | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | undefined, srcSetWebp?: string | undefined, sizes: string };
