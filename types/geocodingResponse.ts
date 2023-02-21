export interface GeocodingResponse {
  items: Item[];
}

export interface Item {
  title: string;
  id: string;
  resultType: string;
  localityType: string;
  address: Address;
  position: Position;
  mapView: MapView;
  scoring: Scoring;
}

export interface Address {
  label: string;
  countryCode: string;
  countryName: string;
  state: string;
  county: string;
  city: string;
  postalCode: string;
}

export interface Position {
  lat: number;
  lng: number;
}

export interface MapView {
  west: number;
  south: number;
  east: number;
  north: number;
}

export interface Scoring {
  queryScore: number;
  fieldScore: FieldScore;
}

export interface FieldScore {
  city: number;
  postalCode: number;
}
