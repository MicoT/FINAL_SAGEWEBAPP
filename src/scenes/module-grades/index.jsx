import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const jsonData = [
  {
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Felicity Edlarraine Tangcay",
		"STUDENT_EMAIL" : "feTangcay@mcm.edu.ph",
		"COURSE_NAME" : "Oral Communication In Context",
		"GRADE_NAME" : "6.00",
		"SCORE" : 6.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alexa Joy Alves",
		"STUDENT_EMAIL" : "ajalves@mcm.edu.ph",
		"COURSE_NAME" : "Ethics",
		"GRADE_NAME" : "1.25",
		"SCORE" : 14.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alexa Joy Alves",
		"STUDENT_EMAIL" : "ajalves@mcm.edu.ph",
		"COURSE_NAME" : "Ethics",
		"GRADE_NAME" : "1.25",
		"SCORE" : 48.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alexa Joy Alves",
		"STUDENT_EMAIL" : "ajalves@mcm.edu.ph",
		"COURSE_NAME" : "Ethics",
		"GRADE_NAME" : "1.5",
		"SCORE" : 9.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Bernard Jay Oclaret_PreviewUser",
		"STUDENT_EMAIL" : "bjgoclaret@mcm.edu.ph",
		"COURSE_NAME" : "Structural Design 2: Steel Design",
		"GRADE_NAME" : "20.00",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Bernard Jay Oclaret_PreviewUser",
		"STUDENT_EMAIL" : "bjgoclaret@mcm.edu.ph",
		"COURSE_NAME" : "Structural Design 2: Steel Design",
		"GRADE_NAME" : "82.00",
		"SCORE" : 82.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Bernard Jay Oclaret_PreviewUser",
		"STUDENT_EMAIL" : "bjgoclaret@mcm.edu.ph",
		"COURSE_NAME" : "Structural Design 2: Steel Design",
		"GRADE_NAME" : "55.00",
		"SCORE" : 55.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Bernard Jay Oclaret_PreviewUser",
		"STUDENT_EMAIL" : "bjgoclaret@mcm.edu.ph",
		"COURSE_NAME" : "Structural Design 2: Steel Design",
		"GRADE_NAME" : "6.00",
		"SCORE" : 6.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Bernard Jay Oclaret_PreviewUser",
		"STUDENT_EMAIL" : "bjgoclaret@mcm.edu.ph",
		"COURSE_NAME" : "Structural Design 2: Steel Design",
		"GRADE_NAME" : "33.00",
		"SCORE" : 33.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Kent Lawrence Bautista",
		"STUDENT_EMAIL" : "klBautista@mcm.edu.ph",
		"COURSE_NAME" : "Animation (80Hrs)",
		"GRADE_NAME" : "1",
		"SCORE" : 1.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Surveying",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Practical Research 2 (Prerequisite: Statistics & Probability)",
		"GRADE_NAME" : "1.25",
		"SCORE" : 14.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Practical Research 2 (Prerequisite: Statistics & Probability)",
		"GRADE_NAME" : "1.25",
		"SCORE" : 14.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Creative Writing",
		"GRADE_NAME" : "2.25",
		"SCORE" : 23.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Creative Writing",
		"GRADE_NAME" : "2.5",
		"SCORE" : 21.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Creative Writing",
		"GRADE_NAME" : "2.25",
		"SCORE" : 39.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Creative Writing",
		"GRADE_NAME" : "2.5",
		"SCORE" : 22.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Creative Writing",
		"GRADE_NAME" : "1",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Creative Writing",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Physical Education and Health",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Physical Education and Health",
		"GRADE_NAME" : "IP",
		"SCORE" : 3.5
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Physical Education and Health",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Physical Education and Health",
		"GRADE_NAME" : "1",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "40.00",
		"SCORE" : 40.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "2.25",
		"SCORE" : 15.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "1.25",
		"SCORE" : 24.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "1.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "2",
		"SCORE" : 16.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "1.25",
		"SCORE" : 95.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Understanding Culture, Society and Politics",
		"GRADE_NAME" : "1.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Contemporary Philippine Arts From The Regions",
		"GRADE_NAME" : "1",
		"SCORE" : 5.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Contemporary Philippine Arts From The Regions",
		"GRADE_NAME" : "1.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Contemporary Philippine Arts From The Regions",
		"GRADE_NAME" : "1.5",
		"SCORE" : 9.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Contemporary Philippine Arts From The Regions",
		"GRADE_NAME" : "1",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Contemporary Philippine Arts From The Regions",
		"GRADE_NAME" : "3",
		"SCORE" : 12.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 100.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 15.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 100.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Introduction To Philosophy of The Human Person",
		"GRADE_NAME" : "1",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Disciplines and Ideas In The Applied Sciences (Prereq:Humss2)",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jan Andrei Abiel Apelo",
		"STUDENT_EMAIL" : "jaaApelo@mcm.edu.ph",
		"COURSE_NAME" : "Introduction to Multimedia Arts",
		"GRADE_NAME" : "1.75",
		"SCORE" : 50.99999
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jan Andrei Abiel Apelo",
		"STUDENT_EMAIL" : "jaaApelo@mcm.edu.ph",
		"COURSE_NAME" : "Introduction to Multimedia Arts",
		"GRADE_NAME" : "2.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jan Andrei Abiel Apelo",
		"STUDENT_EMAIL" : "jaaApelo@mcm.edu.ph",
		"COURSE_NAME" : "Introduction to Multimedia Arts",
		"GRADE_NAME" : "2.75",
		"SCORE" : 17.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jan Andrei Abiel Apelo",
		"STUDENT_EMAIL" : "jaaApelo@mcm.edu.ph",
		"COURSE_NAME" : "Introduction to Multimedia Arts",
		"GRADE_NAME" : "IP",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Eurick Maximo",
		"STUDENT_EMAIL" : "eMaximo@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Data Analysis",
		"GRADE_NAME" : "33.00",
		"SCORE" : 33.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Eurick Maximo",
		"STUDENT_EMAIL" : "eMaximo@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Data Analysis",
		"GRADE_NAME" : "24.00",
		"SCORE" : 24.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "1",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "1.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "1",
		"SCORE" : 25.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "1",
		"SCORE" : 50.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "1",
		"SCORE" : 50.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "2.00",
		"SCORE" : 2.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "1",
		"SCORE" : 60.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Komunikasyon At Pananaliksik Sa Wika At Kulturang Pilipino",
		"GRADE_NAME" : "1",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Cyril Jann Agawin",
		"STUDENT_EMAIL" : "cjAgawin@mcm.edu.ph",
		"COURSE_NAME" : "Computer Engineering As A Discipline",
		"GRADE_NAME" : "10.00",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Cyril Jann Agawin",
		"STUDENT_EMAIL" : "cjAgawin@mcm.edu.ph",
		"COURSE_NAME" : "Computer Engineering As A Discipline",
		"GRADE_NAME" : "1.25",
		"SCORE" : 95.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Adrianne Jazmin Padillo",
		"STUDENT_EMAIL" : "ajPadillo@mcm.edu.ph",
		"COURSE_NAME" : "Logic and Critical Thinking",
		"GRADE_NAME" : "1.25",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Adrianne Jazmin Padillo",
		"STUDENT_EMAIL" : "ajPadillo@mcm.edu.ph",
		"COURSE_NAME" : "Logic and Critical Thinking",
		"GRADE_NAME" : "INC_2105251831",
		"SCORE" : 15.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Adrianne Jazmin Padillo",
		"STUDENT_EMAIL" : "ajPadillo@mcm.edu.ph",
		"COURSE_NAME" : "Logic and Critical Thinking",
		"GRADE_NAME" : "1.75",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Adrianne Jazmin Padillo",
		"STUDENT_EMAIL" : "ajPadillo@mcm.edu.ph",
		"COURSE_NAME" : "Logic and Critical Thinking",
		"GRADE_NAME" : "2.5",
		"SCORE" : 60.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Dixy Yzandra Velasco",
		"STUDENT_EMAIL" : "dyVelasco@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Dixy Yzandra Velasco",
		"STUDENT_EMAIL" : "dyVelasco@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "90.00",
		"SCORE" : 90.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Dixy Yzandra Velasco",
		"STUDENT_EMAIL" : "dyVelasco@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Dixy Yzandra Velasco",
		"STUDENT_EMAIL" : "dyVelasco@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "90.00",
		"SCORE" : 90.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Dixy Yzandra Velasco",
		"STUDENT_EMAIL" : "dyVelasco@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "1",
		"SCORE" : 98.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Dixy Yzandra Velasco",
		"STUDENT_EMAIL" : "dyVelasco@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "2",
		"SCORE" : 16.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Kiana Andrea Mirador",
		"STUDENT_EMAIL" : "kaMirador@mcm.edu.ph",
		"COURSE_NAME" : "Oral Communication In Context",
		"GRADE_NAME" : "24.00",
		"SCORE" : 24.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics in The Modern World",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics in The Modern World",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Maricon Estallo",
		"STUDENT_EMAIL" : "mdEstallo@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "3",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Angelo Riola",
		"STUDENT_EMAIL" : "aRiola@mcm.edu.ph",
		"COURSE_NAME" : "Physical Activities Toward Health and Fitness 1",
		"GRADE_NAME" : "1.00",
		"SCORE" : 1.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Art Appreciation",
		"GRADE_NAME" : "1.25",
		"SCORE" : 55.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Angelo Riola",
		"STUDENT_EMAIL" : "aRiola@mcm.edu.ph",
		"COURSE_NAME" : "Introduction to Computer Systems Laboratory",
		"GRADE_NAME" : "101.00",
		"SCORE" : 101.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics In The Modern World",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics In The Modern World",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Robert Paul Nery",
		"STUDENT_EMAIL" : "rpNery@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "IP",
		"SCORE" : 4.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Robert Paul Nery",
		"STUDENT_EMAIL" : "rpNery@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Robert Paul Nery",
		"STUDENT_EMAIL" : "rpNery@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Abdel Ferdaus Malon",
		"STUDENT_EMAIL" : "afMalon@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics In The Modern World",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Abdel Ferdaus Malon",
		"STUDENT_EMAIL" : "afMalon@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics In The Modern World",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Romeo Jose Alimasag",
		"STUDENT_EMAIL" : "rjAlimasag@mcm.edu.ph",
		"COURSE_NAME" : "Introduction to Blackboard Learn Ultra",
		"GRADE_NAME" : "2.75",
		"SCORE" : 12.93333
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Charles Alden Ferenal",
		"STUDENT_EMAIL" : "caFerenal@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "IP",
		"SCORE" : 4.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Charles Alden Ferenal",
		"STUDENT_EMAIL" : "caFerenal@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "IP",
		"SCORE" : 9.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "2.75",
		"SCORE" : 13.5
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "2.5",
		"SCORE" : 14.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "10.00",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alan Jorge Ali",
		"STUDENT_EMAIL" : "ajAli@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Physical Education and Health (20Hrs)",
		"GRADE_NAME" : "1",
		"SCORE" : 15.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Clarence Ybañez",
		"STUDENT_EMAIL" : "cYbanez@mcm.edu.ph",
		"COURSE_NAME" : "Physical Education and Health (20Hrs)",
		"GRADE_NAME" : "1.25",
		"SCORE" : 28.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Personal Development",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Personal Development",
		"GRADE_NAME" : "1.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Personal Development",
		"GRADE_NAME" : "1.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Personal Development",
		"GRADE_NAME" : "1.75",
		"SCORE" : 17.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Personal Development",
		"GRADE_NAME" : "1.75",
		"SCORE" : 13.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Sheena Kyle De Guzman",
		"STUDENT_EMAIL" : "skbDeGuzman@mcm.edu.ph",
		"COURSE_NAME" : "The Contemporary World (Module 3)",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Philippine Politics and Governance",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Philippine Politics and Governance",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Philippine Politics and Governance",
		"GRADE_NAME" : "1",
		"SCORE" : 16.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Philippine Politics and Governance",
		"GRADE_NAME" : "1.75",
		"SCORE" : 13.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "1",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "2",
		"SCORE" : 16.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "1.75",
		"SCORE" : 17.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "3",
		"SCORE" : 19.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "IP",
		"SCORE" : 11.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Understanding The Self",
		"GRADE_NAME" : "2",
		"SCORE" : 41.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larangan (Akademik)",
		"GRADE_NAME" : "1",
		"SCORE" : 20.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larangan (Akademik)",
		"GRADE_NAME" : "1",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larangan (Akademik)",
		"GRADE_NAME" : "1",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larangan (Akademik)",
		"GRADE_NAME" : "1",
		"SCORE" : 25.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larangan (Akademik)",
		"GRADE_NAME" : "30.00",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larangan (Akademik)",
		"GRADE_NAME" : "2.75",
		"SCORE" : 56.09
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Frankie Lou Marabiles",
		"STUDENT_EMAIL" : "flMarabiles@mcm.edu.ph",
		"COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larangan (Akademik)",
		"GRADE_NAME" : "1.75",
		"SCORE" : 25.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Ricky Capin",
		"STUDENT_EMAIL" : "rCapin@mcm.edu.ph",
		"COURSE_NAME" : "Art Appreciation",
		"GRADE_NAME" : "27.00",
		"SCORE" : 27.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Ricky Capin",
		"STUDENT_EMAIL" : "rCapin@mcm.edu.ph",
		"COURSE_NAME" : "Art Appreciation",
		"GRADE_NAME" : "18.00",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Ricky Capin",
		"STUDENT_EMAIL" : "rCapin@mcm.edu.ph",
		"COURSE_NAME" : "Art Appreciation",
		"GRADE_NAME" : "1.75",
		"SCORE" : 50.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Ricky Capin",
		"STUDENT_EMAIL" : "rCapin@mcm.edu.ph",
		"COURSE_NAME" : "Art Appreciation",
		"GRADE_NAME" : "17.00",
		"SCORE" : 17.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Ricky Capin",
		"STUDENT_EMAIL" : "rCapin@mcm.edu.ph",
		"COURSE_NAME" : "Art Appreciation",
		"GRADE_NAME" : "7.00",
		"SCORE" : 7.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics for Engineers",
		"GRADE_NAME" : "11.00",
		"SCORE" : 11.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "Mathematics for Engineers",
		"GRADE_NAME" : "450.00",
		"SCORE" : 450.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "11.00",
		"SCORE" : 11.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "1",
		"SCORE" : 5.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "2",
		"SCORE" : 16.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Tracy Anne Yuson",
		"STUDENT_EMAIL" : "taYuson@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "2",
		"SCORE" : 24.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jesus III Dureza",
		"STUDENT_EMAIL" : "jiDureza@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "2.25",
		"SCORE" : 15.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jesus III Dureza",
		"STUDENT_EMAIL" : "jiDureza@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "1.25",
		"SCORE" : 67.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jesus III Dureza",
		"STUDENT_EMAIL" : "jiDureza@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "2.25",
		"SCORE" : 23.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Jesus III Dureza",
		"STUDENT_EMAIL" : "jiDureza@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "1",
		"SCORE" : 39.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "3",
		"SCORE" : 3.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "1.75",
		"SCORE" : 26.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "IP",
		"SCORE" : 6.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "National Service Training Program 1",
		"GRADE_NAME" : "3",
		"SCORE" : 3.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "George Marco Orito",
		"STUDENT_EMAIL" : "gmOrito@mcm.edu.ph",
		"COURSE_NAME" : "Environmental Science and Engineering (MWF 12:00PM-1:15PM)",
		"GRADE_NAME" : "89.00%",
		"SCORE" : 89.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "George Marco Orito",
		"STUDENT_EMAIL" : "gmOrito@mcm.edu.ph",
		"COURSE_NAME" : "Environmental Science and Engineering (MWF 12:00PM-1:15PM)",
		"GRADE_NAME" : "85.00%",
		"SCORE" : 85.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "George Marco Orito",
		"STUDENT_EMAIL" : "gmOrito@mcm.edu.ph",
		"COURSE_NAME" : "Environmental Science and Engineering (MWF 12:00PM-1:15PM)",
		"GRADE_NAME" : "89.00%",
		"SCORE" : 89.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "George Marco Orito",
		"STUDENT_EMAIL" : "gmOrito@mcm.edu.ph",
		"COURSE_NAME" : "Environmental Science and Engineering (MWF 12:00PM-1:15PM)",
		"GRADE_NAME" : "93.00%",
		"SCORE" : 93.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "George Marco Orito",
		"STUDENT_EMAIL" : "gmOrito@mcm.edu.ph",
		"COURSE_NAME" : "Environmental Science and Engineering (MWF 12:00PM-1:15PM)",
		"GRADE_NAME" : "1",
		"SCORE" : 40.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "George Marco Orito",
		"STUDENT_EMAIL" : "gmOrito@mcm.edu.ph",
		"COURSE_NAME" : "Environmental Science and Engineering (MWF 12:00PM-1:15PM)",
		"GRADE_NAME" : "93.00",
		"SCORE" : 93.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 2",
		"GRADE_NAME" : "3",
		"SCORE" : 6.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 2",
		"GRADE_NAME" : "3",
		"SCORE" : 6.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 2",
		"GRADE_NAME" : "30.00",
		"SCORE" : 30.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Yna Janica Dela Cruz",
		"STUDENT_EMAIL" : "yjDelaCruz@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 2",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Drawing 1",
		"GRADE_NAME" : "1.00",
		"SCORE" : 1.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Drawing 1",
		"GRADE_NAME" : "100.00",
		"SCORE" : 100.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Drawing 1",
		"GRADE_NAME" : "1.00",
		"SCORE" : 1.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Drawing 1",
		"GRADE_NAME" : "1",
		"SCORE" : 100.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Drawing 1",
		"GRADE_NAME" : "1.00",
		"SCORE" : 1.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Drawing 1",
		"GRADE_NAME" : "1.00",
		"SCORE" : 1.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "China Mae Silvosa",
		"STUDENT_EMAIL" : "cmSilvosa@mcm.edu.ph",
		"COURSE_NAME" : "Engineering Drawing 1",
		"GRADE_NAME" : "500.00",
		"SCORE" : 500.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Marian Janelle Alcantara",
		"STUDENT_EMAIL" : "mjAlcantara@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "1.5",
		"SCORE" : 18.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Marian Janelle Alcantara",
		"STUDENT_EMAIL" : "mjAlcantara@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "1.25",
		"SCORE" : 37.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Marian Janelle Alcantara",
		"STUDENT_EMAIL" : "mjAlcantara@mcm.edu.ph",
		"COURSE_NAME" : "Receptive Communication Skills",
		"GRADE_NAME" : "1.5",
		"SCORE" : 27.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Enea Lucarini",
		"STUDENT_EMAIL" : "eLucarini@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Enea Lucarini",
		"STUDENT_EMAIL" : "eLucarini@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1.75",
		"SCORE" : 26.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Enea Lucarini",
		"STUDENT_EMAIL" : "eLucarini@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Enea Lucarini",
		"STUDENT_EMAIL" : "eLucarini@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Enea Lucarini",
		"STUDENT_EMAIL" : "eLucarini@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Enea Lucarini",
		"STUDENT_EMAIL" : "eLucarini@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1",
		"SCORE" : 10.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "1.5",
		"SCORE" : 9.0
	},
	{
		"INSTITUTION_ROLE" : "S",
		"STUDENT_NAME" : "Alwyn John Baldonaza",
		"STUDENT_EMAIL" : "ajBaldonaza@mcm.edu.ph",
		"COURSE_NAME" : "Life Coaching Series 1",
		"GRADE_NAME" : "2",
		"SCORE" : 8.0
	},
];

const ReactPage = () => {
  const [searchText, setSearchText] = useState('');
  
  // Filter data based on search text
  const filteredData = jsonData.filter((item) =>
    item.STUDENT_NAME.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ margin: '20px 0' }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Institution Role</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Student Email</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Grade Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.INSTITUTION_ROLE}</TableCell>
                <TableCell>{row.STUDENT_NAME}</TableCell>
                <TableCell>{row.STUDENT_EMAIL}</TableCell>
                <TableCell>{row.COURSE_NAME}</TableCell>
                <TableCell>{row.GRADE_NAME}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReactPage;
