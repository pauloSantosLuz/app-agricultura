export class Occurrence{
    id: number;
    description: string;
  permanent: string;
  occurrenceType: {
    id: number
  };
  area: {
    id: number
  };
  locations: 
    [{
      geometry: string;
      description: string;
      value: number;
    }]
}