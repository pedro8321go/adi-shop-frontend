export interface Product {
  Image:               string;
  Image1:              string;
  Content:             string;
  Keywords:            string;
  Name:                string;
  Category:            string;
  Colors:              string;
  Price:               string;
  Promo_apply:         string;
  Reviews:             Reviews;
  Description_title:   string;
  Description_content: string;
  Details:             string;
  Care:                Care;
  Color_detail:        ColorDetail[];
}

export interface Care {
  title:   string;
  content: string[];
}

export interface ColorDetail {
  color:     string;
  image_url: string;
}

export interface Reviews {
  votes:  number;
  rating: number;
}
