export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

interface SickLeave {
  startDate : string,
  endDate : string
}

interface Discharge {
  date : string,
  criteria: string
}

interface BaseEntry {
  id:string,
  description: string,
  date: string,
  specialist : string,
  diagnosisCodes: Array<Diagnosis['code']>
}

interface OccupationalHealthCare extends BaseEntry {
  type : 'occupationalHealthCare',
  sickLeave : SickLeave
}

interface Hospital extends BaseEntry{
  type : 'Hospital',
  discharge : Discharge
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type : "HealhCheck",
  healthCheckRating : HealthCheckEntry
}

export type Entry = 
| Hospital
| OccupationalHealthCare
| HealthCheckEntry;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries : Entry[]
}

type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T,K> : never;
export type EntryWithoutId = UnionOmit<Entry, 'id'>;

export type PatientFormValues = Omit<Patient, "id" | "entries">;