import { useParams } from "react-router-dom";
import patientsService from '../../services/patients';
import { Patient } from "../../types";
import { useEffect, useState } from "react";
import { Female, Male, Transgender } from "@mui/icons-material";

const OnePatients = () => {
  const id : string = useParams().id as string;
  const [patient, setPatient] = useState<Patient>();

  useEffect(() => {
    const fetchPatientList = async () => {
      const patient = await patientsService.getPatient(id);
      setPatient(patient);
    };
    void fetchPatientList();
  } );
  return(
    <>
      <h2>{patient?.name} {patient?.gender === 'male' && <Male/>} {patient?.gender === 'female' && <Female/>} {patient?.gender === 'other' && <Transgender/>}</h2>
      <p>snn : {patient?.ssn}</p>
      <p>occupation : {patient?.occupation}</p>
    </>
    
  );
};

export default OnePatients;