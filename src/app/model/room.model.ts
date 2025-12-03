export interface ContentSection {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  items?: string[];
  imageUrl?: string;
}

export interface Room {
  Id: string;
  ImageUrl: string;
  Description: string;
  Name: string;
  ShortAddess?: string;
  ExternalUrl?: string;
  Price?: number;
  Tags?: string;
  RoomClass?: string;
  SubFolder?: string;
  Images?: string[];
  ContentSections?: ContentSection[];
}
