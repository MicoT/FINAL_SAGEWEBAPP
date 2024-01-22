import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Autocomplete,
} from "@mui/material";

const PassingRatePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  // Sample data
  const data = [
    {
      "COURSE_NAME" : "(A221)Data Structures and Algorithms (Paired) | Monday(7:00 - 10:45PM) @R604",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.934000
    },
    {
      "COURSE_NAME" : "(A222)Data Structures and Algorithms (Paired) | Monday(10:45-2:30PM) @R604",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.077100
    },
    {
      "COURSE_NAME" : "3D ANIMATION",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 57.384000
    },
    {
      "COURSE_NAME" : "3D ANIMATION",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.960800
    },
    {
      "COURSE_NAME" : "3D Animation",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 79.467700
    },
    {
      "COURSE_NAME" : "3D Animation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.540700
    },
    {
      "COURSE_NAME" : "3D Animation - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "3D Animation - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 44.444400
    },
    {
      "COURSE_NAME" : "3D MODELING",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 61.236500
    },
    {
      "COURSE_NAME" : "3D Modeling",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 60.672700
    },
    {
      "COURSE_NAME" : "3D Modeling (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "3D Modeling (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "A143 CHEMISTRY FOR ENGINEERS (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 49.411800
    },
    {
      "COURSE_NAME" : "A143 CHEMISTRY FOR ENGINEERS (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.481400
    },
    {
      "COURSE_NAME" : "A221-Web Programming (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.809000
    },
    {
      "COURSE_NAME" : "A221-Web Programming (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.775800
    },
    {
      "COURSE_NAME" : "A222-Web Programming (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 56.521700
    },
    {
      "COURSE_NAME" : "A222-Web Programming (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.704000
    },
    {
      "COURSE_NAME" : "A223-Web Programming (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "AC Apparatus And Devices (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 43.548400
    },
    {
      "COURSE_NAME" : "AC Apparatus and Devices",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "AC Apparatus and Devices (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 84.000000
    },
    {
      "COURSE_NAME" : "AC Apparatus and Devices (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.285700
    },
    {
      "COURSE_NAME" : "AC Machinery (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 63.636400
    },
    {
      "COURSE_NAME" : "AC Machinery (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 82.716000
    },
    {
      "COURSE_NAME" : "AC Machinery - Laboratory (Summer)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "ACCOUNTANCY RESEARCH",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "ACCOUNTANCY RESEARCH",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "ACCOUNTING FOR GOVERNMENT AND NON-PROFIT ORGANIZATION FLUX TThS 11:30-1PM",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "ACCOUNTING FOR SPECIAL TRANSACTIONS FLUX TThS 10AM-11:30AM",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 94.444400
    },
    {
      "COURSE_NAME" : "ACTING AND DIRECTING FOR FILM",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 49.161500
    },
    {
      "COURSE_NAME" : "ACTING AND DIRECTING FOR FILM LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.503200
    },
    {
      "COURSE_NAME" : "ADVANCED ELECTRICAL SYSTEM DESIGN: HIGH-RISE AND INDUSTRIAL BUILDINGS (PAIRED)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.862100
    },
    {
      "COURSE_NAME" : "ADVANCED POWER SYSTEMS ANALYSIS: ECONOMIC OPERATION AND CONTROL",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 91.428600
    },
    {
      "COURSE_NAME" : "APPLIED DATA SCIENCE LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.785400
    },
    {
      "COURSE_NAME" : "ARCHITECTURAL DESIGN 3: CREATIVE DESIGN IN ARCHITECTURAL INTERIORS (PAIRED)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 59.467700
    },
    {
      "COURSE_NAME" : "ARCHITECTURAL DESIGN 4: SPACE PLANNING 1 (PAIRED)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 77.887000
    },
    {
      "COURSE_NAME" : "ARCHITECTURAL DESIGN 5: SPACE PLANNING 2 (PAIRED)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.955000
    },
    {
      "COURSE_NAME" : "ARCHITECTURAL DESIGN 6: SITE DEVELOPMENT PLANNING AND LANDSCAPING (PAIRED)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.027700
    },
    {
      "COURSE_NAME" : "AUDITING AND ASSURANCE PRINCIPLES FLUX TThS 8:30-10AM",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 82.352900
    },
    {
      "COURSE_NAME" : "AUDITING AND ASSURANCE: CONCEPTS AND APPLICATIONS 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 70.000000
    },
    {
      "COURSE_NAME" : "AUDITING AND ASSURANCE: CONCEPTS AND APPLICATIONS 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "AUDITING AND ASSURANCE: SPECIALIZED INDUSTRIES",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 94.444400
    },
    {
      "COURSE_NAME" : "AUDITING IN A CIS ENVIRONMENT",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Accomodation Operations and Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 87.500000
    },
    {
      "COURSE_NAME" : "Accounting Information System",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Accounting Information System",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 96.226400
    },
    {
      "COURSE_NAME" : "Accounting Intership",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 91.666700
    },
    {
      "COURSE_NAME" : "Accounting for Business Combinations",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Accounting for Business Combinations",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 64.516100
    },
    {
      "COURSE_NAME" : "Acting and Directing for Film",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 44.951100
    },
    {
      "COURSE_NAME" : "Advanced Electrical System Design: High-Rise and Industrial Buildings (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.529400
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 41.641200
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics (Lab)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 55.952400
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics (Lab)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.553200
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 81.707300
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics BLENDED 11:30AM-1:00PM MWF R407",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 49.740900
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics BLENDED 1:00PM-2:30PM MWF R406",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 69.822500
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics BLENDED 2:30PM-4:00PM TTHS R406",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 60.109300
    },
    {
      "COURSE_NAME" : "Advanced Engineering Mathematics BLENDED 4:00PM-5:30PM MWF R405",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 69.364200
    },
    {
      "COURSE_NAME" : "Advanced Power System Design: Substation and Distribution (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 80.597000
    },
    {
      "COURSE_NAME" : "Advanced Power System Design: Substation and Distribution (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Advanced Statistical Analysis for Industrial Engineering (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Advertising Principles and Practice",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 86.666700
    },
    {
      "COURSE_NAME" : "Advertising Principles and Practices",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 61.039000
    },
    {
      "COURSE_NAME" : "Air Pollution Control",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 60.000000
    },
    {
      "COURSE_NAME" : "Air-Conditioning and Ventilation Systems",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 73.529400
    },
    {
      "COURSE_NAME" : "Air-Conditioning and Ventilation Systems",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.292700
    },
    {
      "COURSE_NAME" : "Air-Conditioning and Ventilation Systems",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 47.619000
    },
    {
      "COURSE_NAME" : "Algorithms and Complexity",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 96.666700
    },
    {
      "COURSE_NAME" : "Algorithms and Complexity",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 68.221600
    },
    {
      "COURSE_NAME" : "Algorithms and Complexity",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 56.363600
    },
    {
      "COURSE_NAME" : "Alternative Energy Resources",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 60.989000
    },
    {
      "COURSE_NAME" : "Analytical Chemistry 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.639200
    },
    {
      "COURSE_NAME" : "Application Development and Emerging Technologies (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 44.331400
    },
    {
      "COURSE_NAME" : "Applied Game Physics (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Applied Mathematics for Games",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Applied Mathematics for Games",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.454500
    },
    {
      "COURSE_NAME" : "Applied Mathematics for Games",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Araling Panlipunan 8",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 42.446000
    },
    {
      "COURSE_NAME" : "Araling Panlipunan 8",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 57.317100
    },
    {
      "COURSE_NAME" : "Architectural Design 2: Creative Design Fundamentals (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 82.832600
    },
    {
      "COURSE_NAME" : "Architectural Design 2: Creative Design Fundamentals (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 54.624800
    },
    {
      "COURSE_NAME" : "Architectural Design 2: Creative Design Fundamentals (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 47.687600
    },
    {
      "COURSE_NAME" : "Architectural Design 3: Creative Design In Architectural Interiors (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 63.934400
    },
    {
      "COURSE_NAME" : "Architectural Design 3: Creative Design in Architectural Interiors (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 80.412400
    },
    {
      "COURSE_NAME" : "Architectural Design 3: Creative Design in Architectural Interiors (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 83.025800
    },
    {
      "COURSE_NAME" : "Architectural Design 5: Space Planning 2 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 68.737100
    },
    {
      "COURSE_NAME" : "Architectural Design 7: Community Architecture and Urban Design (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 43.662000
    },
    {
      "COURSE_NAME" : "Architectural Design 7: Community Architecture and Urban Design (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 68.093400
    },
    {
      "COURSE_NAME" : "Architectural Design 7: Community Architecture and Urban Design (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.384600
    },
    {
      "COURSE_NAME" : "Architectural Design 8: Design of Complex Structures (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.056000
    },
    {
      "COURSE_NAME" : "Architectural Design 8: Design of Complex Structures (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 47.780700
    },
    {
      "COURSE_NAME" : "Architectural Interiors (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 80.193900
    },
    {
      "COURSE_NAME" : "Architectural Interiors (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.735200
    },
    {
      "COURSE_NAME" : "Architectural Photography",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.362300
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 1: Graphics 1 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 44.298000
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 1: Graphics 1 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 54.447200
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 1: Graphics 1 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.077200
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 3: Graphics 2 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 53.747300
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 3: Graphics 2 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.088800
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 4: Visual Techniques 2 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 53.797500
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 4: Visual Techniques 2 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 72.214400
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 5: Visual Techniques 3 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 73.486100
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 5: Visual Techniques 3 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 63.629900
    },
    {
      "COURSE_NAME" : "Architectural Visual Communications 5: Visual Techniques 3 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.461200
    },
    {
      "COURSE_NAME" : "Architecture and Organization",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 82.058000
    },
    {
      "COURSE_NAME" : "Architecture and Organization",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Architecture and Organization (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Architecture and Organization (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Architecture and Organization (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Architecture and Organization (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.988800
    },
    {
      "COURSE_NAME" : "Architecture and Organization (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.526700
    },
    {
      "COURSE_NAME" : "Art and Design Management (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.142900
    },
    {
      "COURSE_NAME" : "Artificial Intelligence",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.881000
    },
    {
      "COURSE_NAME" : "Auditing in a CIS Environment",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 93.877600
    },
    {
      "COURSE_NAME" : "Automata and Language Theory",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 82.142900
    },
    {
      "COURSE_NAME" : "Automata and Language Theory",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.752200
    },
    {
      "COURSE_NAME" : "Automata and Language Theory (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Automata and Language Theory - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "BIOMOLECULES LABORATORY",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 85.674200
    },
    {
      "COURSE_NAME" : "BUILDING TECHNOLOGY 2: CONSTRUCTION DRAWINGS IN WOOD STEEL AND CONCRETE (1 STOREY BUILDING) (P)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 73.107600
    },
    {
      "COURSE_NAME" : "BUILDING TECHNOLOGY 3: CONSTRUCTION DRAWINGS IN WOOD STEEL AND CONCRETE (2 STOREY BUILDING) (P)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.084600
    },
    {
      "COURSE_NAME" : "BUSINESS INTELLIGENCE",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 83.707900
    },
    {
      "COURSE_NAME" : "BUSINESS INTELLIGENCE",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 71.332000
    },
    {
      "COURSE_NAME" : "Basic Electrical And Electronics Engineering (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Basic Electrical Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.948700
    },
    {
      "COURSE_NAME" : "Basic Electrical Engineering (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 74.698800
    },
    {
      "COURSE_NAME" : "Basic Electrical Engineering (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Basic Electrical Engineering (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Basic Electrical Engineering for ME",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 52.995400
    },
    {
      "COURSE_NAME" : "Basic Electrical Engineering for ME (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.501200
    },
    {
      "COURSE_NAME" : "Basic Electrical and Electronics Engineering",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 56.363600
    },
    {
      "COURSE_NAME" : "Basic Electrical and Electronics Engineering (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 78.882000
    },
    {
      "COURSE_NAME" : "Basic Electrical and Electronics Engineering (Saturday 10:45AM-1:15PM @R414)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 43.299000
    },
    {
      "COURSE_NAME" : "Basic Electronics",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.741300
    },
    {
      "COURSE_NAME" : "Basic Electronics (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 64.568800
    },
    {
      "COURSE_NAME" : "Basic Occupational Safety and Health",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Basic Occupational Safety and Health (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Biochemical Engineering",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.279100
    },
    {
      "COURSE_NAME" : "Biochemical Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.555600
    },
    {
      "COURSE_NAME" : "Bootcamp SHS STEM",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 41.666700
    },
    {
      "COURSE_NAME" : "Brand Communications and Design",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.700900
    },
    {
      "COURSE_NAME" : "Building Systems Design (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 64.444400
    },
    {
      "COURSE_NAME" : "Building Technology 2: Construction Drawings In Wood Steel and Concrete (1 Storey Building) (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 74.045800
    },
    {
      "COURSE_NAME" : "Building Technology 3: Construction Drawings In Wood Steel and Concrete (2 Storey Building) (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 61.702100
    },
    {
      "COURSE_NAME" : "Building Technology 3: Construction Drawings In Wood Steel and Concrete (2-Storey Building)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 77.173900
    },
    {
      "COURSE_NAME" : "Building Technology 4: Specification Writing and Quantity Surveying (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 79.379600
    },
    {
      "COURSE_NAME" : "Building Technology 4: Specification Writing and Quantity Surveying (Paired) (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Building Technology 5: Alternative Building Construction Systems (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 88.059700
    },
    {
      "COURSE_NAME" : "Building Technology 5: Alternative Building Construction Systems (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 77.043300
    },
    {
      "COURSE_NAME" : "Building Utilities 2: Electrical, Electronics and MEchanical Systems (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 44.015200
    },
    {
      "COURSE_NAME" : "Building Utilities 2: Electrical, Electronics and MEchanical Systems (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 54.994100
    },
    {
      "COURSE_NAME" : "Building Utilities 2: Electrical, Electronics and MEchanical Systems (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.231000
    },
    {
      "COURSE_NAME" : "Building Utilities 3: Acoustics and Lighting Systems (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 52.040800
    },
    {
      "COURSE_NAME" : "Building Utilities 3: Acoustics and Lighting Systems (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 81.647900
    },
    {
      "COURSE_NAME" : "Building Utilities 3: Acoustics and Lighting Systems (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 43.722200
    },
    {
      "COURSE_NAME" : "Business Intelligence",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 60.067100
    },
    {
      "COURSE_NAME" : "Business Intelligence",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 49.865200
    },
    {
      "COURSE_NAME" : "Business Law and Regulations",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 90.625000
    },
    {
      "COURSE_NAME" : "Business Law and Regulations",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 95.597500
    },
    {
      "COURSE_NAME" : "Business Law and Taxation",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.704200
    },
    {
      "COURSE_NAME" : "Business Law and Taxation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 49.287200
    },
    {
      "COURSE_NAME" : "Business Law and Taxation",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 79.215700
    },
    {
      "COURSE_NAME" : "Business Law and Taxation (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Business Law and Taxation (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Business Plan Implementation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 52.968000
    },
    {
      "COURSE_NAME" : "Business Plan Implementation",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 98.275900
    },
    {
      "COURSE_NAME" : "Business Plan Preparation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.810800
    },
    {
      "COURSE_NAME" : "Business Ventures in Multimedia",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Business and Transfer Taxes",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 61.290300
    },
    {
      "COURSE_NAME" : "Business of Games and Entrepreneurship",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 46.666700
    },
    {
      "COURSE_NAME" : "CCNA ROUTING AND SWITCHING 2 (PAIRED)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 76.223800
    },
    {
      "COURSE_NAME" : "CCNA ROUTING AND SWITCHING 2 (PAIRED)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.190500
    },
    {
      "COURSE_NAME" : "CCNA Routing And Switching 1(Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 87.878800
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 1(Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.710500
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 1(Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.153800
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 2",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 65.178600
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 54.450300
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 71.378100
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 2 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 46.153800
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 3",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 78.461500
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 3",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 56.578900
    },
    {
      "COURSE_NAME" : "CCNA Routing and Switching 3 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 43.347600
    },
    {
      "COURSE_NAME" : "CE Project 1 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 55.454500
    },
    {
      "COURSE_NAME" : "CE Project 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 53.934900
    },
    {
      "COURSE_NAME" : "CHE Laws and Ethics",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 47.727300
    },
    {
      "COURSE_NAME" : "CHE Thesis 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "CHE Thesis 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 65.896000
    },
    {
      "COURSE_NAME" : "CHEMISTRY FOR ENGINEERS (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 49.590200
    },
    {
      "COURSE_NAME" : "CHEMISTRY FOR ENGINEERS (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.222800
    },
    {
      "COURSE_NAME" : "CHEMISTRY FOR ENGINEERS (Laboratory)  - WEDNESDAY 7:00AM-10:45AM - R615",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 58.296000
    },
    {
      "COURSE_NAME" : "CHEMISTRY FOR ENGINEERS (Laboratory) - MONDAY 7:00AM-10:45AM - R615",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 60.150400
    },
    {
      "COURSE_NAME" : "CIRCUITS 3 (LABORATORY)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "CIRCUITS 3 (LABORATORY) F2F 8:30AM - 1:00PM R612",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 80.000000
    },
    {
      "COURSE_NAME" : "COLOR THEORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 97.445300
    },
    {
      "COURSE_NAME" : "COLOR THEORY LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 80.412400
    },
    {
      "COURSE_NAME" : "COMMUNICATION MANAGEMENT",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 90.000000
    },
    {
      "COURSE_NAME" : "COMPUTER NETWORKS AND SECURITY",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 94.444400
    },
    {
      "COURSE_NAME" : "COMPUTER NETWORKS AND SECURITY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 87.037000
    },
    {
      "COURSE_NAME" : "COMPUTER NETWORKS AND SECURITY (LABORATORY)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 85.714300
    },
    {
      "COURSE_NAME" : "COMPUTER NETWORKS AND SECURITY (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 85.714300
    },
    {
      "COURSE_NAME" : "COMPUTER SOFTWARE IN STRUCTURAL ANALYSIS",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 96.078400
    },
    {
      "COURSE_NAME" : "COMPUTER SOFTWARE IN STRUCTURAL ANALYSIS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 87.528900
    },
    {
      "COURSE_NAME" : "COMPUTER SOFTWARE IN STRUCTURAL ANALYSIS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 67.500000
    },
    {
      "COURSE_NAME" : "CONSTRUCTION MATERIALS AND TESTING",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.787600
    },
    {
      "COURSE_NAME" : "CONSTRUCTION MATERIALS AND TESTING (LABORATORY)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.494300
    },
    {
      "COURSE_NAME" : "COST ACCOUNTING FOR BUSINESS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 86.813200
    },
    {
      "COURSE_NAME" : "CPE Correlation 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "CPE Seminars and Field Trips (Field)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 80.000000
    },
    {
      "COURSE_NAME" : "CPE Seminars and Field Trips (Field)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "CREATIVE THINKING AND INNOVATION",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 56.797600
    },
    {
      "COURSE_NAME" : "CREATIVE THINKING AND INNOVATION LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 63.289000
    },
    {
      "COURSE_NAME" : "Capstone Project 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Capstone Project 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 58.333300
    },
    {
      "COURSE_NAME" : "Capstone Project 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.148100
    },
    {
      "COURSE_NAME" : "Capstone Project 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 85.714300
    },
    {
      "COURSE_NAME" : "Cell and Molecular Biology",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Cell and Molecular Biology Laboratory",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 71.875000
    },
    {
      "COURSE_NAME" : "Chemical Engineering 1 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 64.557000
    },
    {
      "COURSE_NAME" : "Chemical Engineering 1 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Chemical Engineering 2 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "Chemical Engineering 2 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.269800
    },
    {
      "COURSE_NAME" : "Chemical Engineering Design 1 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 77.419400
    },
    {
      "COURSE_NAME" : "Chemical Engineering Field Trips and Seminars (Field)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Chemical Engineering Orientation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.188500
    },
    {
      "COURSE_NAME" : "Chemical Engineering Orientation",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.239100
    },
    {
      "COURSE_NAME" : "Chemical Process (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 75.757600
    },
    {
      "COURSE_NAME" : "Chemical Process Industries",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 66.871200
    },
    {
      "COURSE_NAME" : "Chemical Process Industries",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.328700
    },
    {
      "COURSE_NAME" : "Chemical Reaction Engineering (Paired) (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Chemistry For Engineers (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 60.528900
    },
    {
      "COURSE_NAME" : "Chemistry for Engineers (Laboratory) - THURSDAY 10:45AM-2.30PM - R615",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.279700
    },
    {
      "COURSE_NAME" : "Chemistry for Engineers (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 45.161300
    },
    {
      "COURSE_NAME" : "Cinematography - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Circuits 1 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.521100
    },
    {
      "COURSE_NAME" : "Circuits 2 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 57.142900
    },
    {
      "COURSE_NAME" : "Civil Engineering Orientation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.047700
    },
    {
      "COURSE_NAME" : "Combustion Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Combustion Engineering (Wed & Fri)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.393900
    },
    {
      "COURSE_NAME" : "Communication Planning (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Compensation Administration",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Computer Applications for MEchanical Engineers (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 76.555000
    },
    {
      "COURSE_NAME" : "Computer Applications for Mechanical Engineers (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 84.684700
    },
    {
      "COURSE_NAME" : "Computer Applications in CHE (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Computer Applications in CHE (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 88.837200
    },
    {
      "COURSE_NAME" : "Computer Applications in CHE (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.740700
    },
    {
      "COURSE_NAME" : "Computer Architecture and Organization",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 43.750000
    },
    {
      "COURSE_NAME" : "Computer Architecture and Organization",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.055000
    },
    {
      "COURSE_NAME" : "Computer Architecture and Organization",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 58.333300
    },
    {
      "COURSE_NAME" : "Computer Architecture and Organization (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 84.615400
    },
    {
      "COURSE_NAME" : "Computer Architecture and Organization (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.698100
    },
    {
      "COURSE_NAME" : "Computer Architecture and Organization (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Computer Engineering 1 Exit Exam",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Computer Engineering 2 Exit Exam",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Computer Engineering As A Discipline",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 62.612600
    },
    {
      "COURSE_NAME" : "Computer Engineering As A Discipline",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Computer Engineering As A Discipline",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.032400
    },
    {
      "COURSE_NAME" : "Computer Engineering Drafting and Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 60.736200
    },
    {
      "COURSE_NAME" : "Computer Engineering Drafting and Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.454500
    },
    {
      "COURSE_NAME" : "Computer Engineering Drafting and Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.127800
    },
    {
      "COURSE_NAME" : "Computer Engineering as a Discipline",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 66.551700
    },
    {
      "COURSE_NAME" : "Computer Fundamentals And Programming 2 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 63.106800
    },
    {
      "COURSE_NAME" : "Computer Fundamentals and Programming 1 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 55.059700
    },
    {
      "COURSE_NAME" : "Computer Fundamentals and Programming 1 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 53.978100
    },
    {
      "COURSE_NAME" : "Computer Fundamentals and Programming 1 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.665500
    },
    {
      "COURSE_NAME" : "Computer Fundamentals and Programming 2 (Lab)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 53.944000
    },
    {
      "COURSE_NAME" : "Computer Fundamentals and Programming 2 (Lab)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 44.740100
    },
    {
      "COURSE_NAME" : "Computer Fundamentals and Programming 2 (Lab)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.704400
    },
    {
      "COURSE_NAME" : "Computer Networks and Security",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 45.238100
    },
    {
      "COURSE_NAME" : "Computer Networks and Security",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 73.076900
    },
    {
      "COURSE_NAME" : "Computer Networks and Security",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 76.470600
    },
    {
      "COURSE_NAME" : "Computer Networks and Security (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 69.874500
    },
    {
      "COURSE_NAME" : "Computer Networks and Security (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 55.555600
    },
    {
      "COURSE_NAME" : "Computer Networks and Security (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Computer Networks and Security (Laboratory) - Module 1 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Computer Programming (320 Hrs)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.789500
    },
    {
      "COURSE_NAME" : "Computer Programming Concepts 1 (Paired) - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "Computer Programming Concepts 2 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 83.882100
    },
    {
      "COURSE_NAME" : "Computer Programming Concepts 2 (Paired) (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Computer-Aided Calculations (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 51.270800
    },
    {
      "COURSE_NAME" : "Computer-Aided Calculations (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 43.678700
    },
    {
      "COURSE_NAME" : "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 67.299900
    },
    {
      "COURSE_NAME" : "Computer-Aided Design and Drafting for Architecture 1 (Paired) (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 44.444400
    },
    {
      "COURSE_NAME" : "Computer-Aided Design and Drafting for Architecture 2 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 92.857100
    },
    {
      "COURSE_NAME" : "Computer-Aided Drafting (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 60.991000
    },
    {
      "COURSE_NAME" : "Computer-Aided Drafting (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 54.335600
    },
    {
      "COURSE_NAME" : "Computer-Aided Drafting (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.110300
    },
    {
      "COURSE_NAME" : "Computer-Aided Drafting (Laboratory) [ W 1045A - 0230P]",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 72.727300
    },
    {
      "COURSE_NAME" : "Computer-Aided Drafting (Laboratory) [T 7000A - 1045A]",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 87.500000
    },
    {
      "COURSE_NAME" : "Computer-Aided Drafting (Laboratory) [W 7000A - 1045A]",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 85.714300
    },
    {
      "COURSE_NAME" : "Computer-Aided Drafting(Laboratory) (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 60.000000
    },
    {
      "COURSE_NAME" : "Construction MEthods and Equipment",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 70.731700
    },
    {
      "COURSE_NAME" : "Construction MEthods and Project Management",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 44.954100
    },
    {
      "COURSE_NAME" : "Construction MEthods and Project Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 74.373300
    },
    {
      "COURSE_NAME" : "Construction MEthods and Project Management (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Construction MEthods and Project Management (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 85.582800
    },
    {
      "COURSE_NAME" : "Construction MEthods and Project Management (Laboratory) - A441",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 47.500000
    },
    {
      "COURSE_NAME" : "Construction MEthods and Project Management (Laboratory) - A442",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 48.750000
    },
    {
      "COURSE_NAME" : "Construction Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 49.829200
    },
    {
      "COURSE_NAME" : "Construction Materials and Testing (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 54.707400
    },
    {
      "COURSE_NAME" : "Construction Materials and Testing (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 83.539500
    },
    {
      "COURSE_NAME" : "Construction Methods and Project Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Construction Methods and Project Management (Laboratory) - A443",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 44.736800
    },
    {
      "COURSE_NAME" : "Construction Occupational Safety and Health",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 52.773400
    },
    {
      "COURSE_NAME" : "Control Engineering (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 68.059700
    },
    {
      "COURSE_NAME" : "Control Engineering (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.711200
    },
    {
      "COURSE_NAME" : "Creative Industries I: Applied Arts and Design",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Creative Industries II: Performing Arts",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.620700
    },
    {
      "COURSE_NAME" : "DATA AND DIGITAL COMMUNICATIONS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 70.535700
    },
    {
      "COURSE_NAME" : "DATA AND DIGITAL COMMUNICATIONS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.129600
    },
    {
      "COURSE_NAME" : "DATA STRUCTURES AND ALGORITHMS (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 47.474700
    },
    {
      "COURSE_NAME" : "DC MACHINERY (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 95.000000
    },
    {
      "COURSE_NAME" : "DC Machinery (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 49.333300
    },
    {
      "COURSE_NAME" : "DC\/AC Machinery (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.026200
    },
    {
      "COURSE_NAME" : "DC\/AC Machinery (Laboratory) (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "DC\/AC Machinery (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "DEVELOPMENTAL BIOLOGY (PLANTS AND ANIMALS)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "DIGITAL SOUND PRODUCTION (LAB)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 68.349800
    },
    {
      "COURSE_NAME" : "DRAWING 1",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 98.571400
    },
    {
      "COURSE_NAME" : "DRAWING 2",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 98.932400
    },
    {
      "COURSE_NAME" : "Data Communications",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Data Communications",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 69.343100
    },
    {
      "COURSE_NAME" : "Data Communications (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 68.965500
    },
    {
      "COURSE_NAME" : "Data Communications (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 97.744400
    },
    {
      "COURSE_NAME" : "Data Mining",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Data Mining (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Data Structures and Algorithms (Paired) (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Data and Digital Communications",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.250000
    },
    {
      "COURSE_NAME" : "Design and Production Process",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Development Communication (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Differential Equations",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 47.047000
    },
    {
      "COURSE_NAME" : "Differential Equations (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Differential Equations (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Digital Electronics: Logic Circuits and Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.214300
    },
    {
      "COURSE_NAME" : "Digital Electronics: Logic Circuits and Design (Laboratory) (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Digital Electronics: Logic Circuits and Design (Laboratory) (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Digital Electronics: Logic Circuits and Design (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Digital Electronics: Logic Circuits and Design (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Digital Photography",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 63.636400
    },
    {
      "COURSE_NAME" : "Digital Signal Processing",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Digital Signal Processing (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.666700
    },
    {
      "COURSE_NAME" : "Digital Signal Processing (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.974400
    },
    {
      "COURSE_NAME" : "Digital Sound Production",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 56.302500
    },
    {
      "COURSE_NAME" : "Digital Storyboarding",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.468600
    },
    {
      "COURSE_NAME" : "Discrete Mathematics",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 47.208100
    },
    {
      "COURSE_NAME" : "Discrete Structures 1 (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Distribution Systems and Substation Design",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Distribution Systems and Substation Design",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.148100
    },
    {
      "COURSE_NAME" : "Distribution Systems and Substation Design",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Distribution Systems and Substation Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 65.000000
    },
    {
      "COURSE_NAME" : "Distribution Systems and Substation Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.454500
    },
    {
      "COURSE_NAME" : "Distribution Systems and Substation Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Drawing 1",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 71.121700
    },
    {
      "COURSE_NAME" : "Drawing 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.381700
    },
    {
      "COURSE_NAME" : "Drawing 2",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 70.263200
    },
    {
      "COURSE_NAME" : "Drawing 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 42.978100
    },
    {
      "COURSE_NAME" : "Drawing 2 - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.428600
    },
    {
      "COURSE_NAME" : "Dynamics of Rigid Bodies",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 67.751500
    },
    {
      "COURSE_NAME" : "Dynamics of Rigid Bodies (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "E-Commerce",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 81.712100
    },
    {
      "COURSE_NAME" : "E-Commerce",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.430900
    },
    {
      "COURSE_NAME" : "ECE Laws, Codes and Professional Ethics",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 73.939400
    },
    {
      "COURSE_NAME" : "ECE Seminars and Colloquium (Field)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.428600
    },
    {
      "COURSE_NAME" : "ECE Seminars and Colloquium (Field)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 90.000000
    },
    {
      "COURSE_NAME" : "ECOTOURISM MANAGEMENT",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 90.625000
    },
    {
      "COURSE_NAME" : "EE Seminars and Colloqiuim (Field)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "ELECTRICAL ENGINEERING ORIENTATION",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 49.328900
    },
    {
      "COURSE_NAME" : "ELECTRICAL ENGINEERING ORIENTATION",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 43.750000
    },
    {
      "COURSE_NAME" : "ELECTRICAL SYSTEMS AND ILLUMINATION ENGINEERING DESIGN",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "ELECTRICAL SYSTEMS AND ILLUMINATION ENGINEERING DESIGN",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 88.888900
    },
    {
      "COURSE_NAME" : "ELECTRICAL SYSTEMS DESIGN (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.444400
    },
    {
      "COURSE_NAME" : "ELECTROMAGNETICS FOR EE",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 58.163300
    },
    {
      "COURSE_NAME" : "ELECTRONICS CIRCUITS: DEVICES AND ANALYSIS (LAB)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 42.666700
    },
    {
      "COURSE_NAME" : "ELECTRONICS CIRCUITS: DEVICES AND ANALYSIS (LAB)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 51.388900
    },
    {
      "COURSE_NAME" : "ELEMENTS AND PRINCIPLES OF DESIGN",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 66.380500
    },
    {
      "COURSE_NAME" : "EMBEDDED SYSTEMS (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.142900
    },
    {
      "COURSE_NAME" : "ENGINEERING UTILITIES 1: BASIC MECHANICAL ENGINEERING",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "ENGINEERING UTILITIES 2 m w f 7_8:30",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.025600
    },
    {
      "COURSE_NAME" : "ENGINEERING UTILITIES 2 tths 4-5:30",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.472300
    },
    {
      "COURSE_NAME" : "ENGINEERING UTILITIES 2 tths 7-8:30",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.696200
    },
    {
      "COURSE_NAME" : "ENTREPRENEURIAL BEHAVIOR (MODULE 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "ENVIRONMENTAL SCIENCE",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "ENVIRONMENTAL SCIENCE AND ENGINEERING",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "EXPERIMENTAL PSYCHOLOGY",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 87.500000
    },
    {
      "COURSE_NAME" : "EXPERIMENTAL PSYCHOLOGY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 70.786500
    },
    {
      "COURSE_NAME" : "EXPERIMENTAL PSYCHOLOGY LABORATORY",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 87.500000
    },
    {
      "COURSE_NAME" : "EXPERIMENTAL PSYCHOLOGY LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 70.786500
    },
    {
      "COURSE_NAME" : "Earthquake Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 74.603200
    },
    {
      "COURSE_NAME" : "Ee Capstone Project 1",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Electrical Engineering Laws, Codes and Ethics (TTh 5:30PM-7:00PM @R413)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 73.049600
    },
    {
      "COURSE_NAME" : "Electrical Engineering Orientation (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 74.849100
    },
    {
      "COURSE_NAME" : "Electrical Standards and Practices (Laboratory) (WF 7:00PM-8:30PM @R411)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 80.487800
    },
    {
      "COURSE_NAME" : "Electrical Systems Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 91.111100
    },
    {
      "COURSE_NAME" : "Electrical Systems Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Electrical Systems and Illumination Engineering Design",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 47.619000
    },
    {
      "COURSE_NAME" : "Electronic Schematics, Diagram and Modules (Lab)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Electronic Schematics, Diagram and Modules (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Electronic Schematics, Diagram and Modules (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.935500
    },
    {
      "COURSE_NAME" : "Electronic Systems and Design",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 56.428600
    },
    {
      "COURSE_NAME" : "Electronic Systems and Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 65.789500
    },
    {
      "COURSE_NAME" : "Electronic Systems and Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 73.134300
    },
    {
      "COURSE_NAME" : "Electronic Systems and Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 87.500000
    },
    {
      "COURSE_NAME" : "Electronics Circuits Analysis and Design (Lab)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.474600
    },
    {
      "COURSE_NAME" : "Electronics Circuits Analysis and Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 44.198900
    },
    {
      "COURSE_NAME" : "Electronics Circuits: Devices and Analysis (Lab)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Electronics Circuits: Devices and Analysis (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.555600
    },
    {
      "COURSE_NAME" : "Electronics Devices And Circuits (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 86.363600
    },
    {
      "COURSE_NAME" : "Electronics Devices and Circuits",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Electronics Devices and Circuits (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Electronics Devices and Circuits (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.585900
    },
    {
      "COURSE_NAME" : "Electronics Devices and Circuits (Laboratory) (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Electronics Devices and Circuits (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.555600
    },
    {
      "COURSE_NAME" : "Embedded Systems",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 57.692300
    },
    {
      "COURSE_NAME" : "Embedded Systems (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Embedded Systems (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 46.391800
    },
    {
      "COURSE_NAME" : "Emc Practicum 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Emc Practicum 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Emc Practicum 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Emerging Technologies in CPE",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 57.352900
    },
    {
      "COURSE_NAME" : "Emerging Technologies in CPE",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Emerging Technologies in Cpe",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.818200
    },
    {
      "COURSE_NAME" : "Emerging Technologies in Cpe",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 52.147200
    },
    {
      "COURSE_NAME" : "Energy Management",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 80.882400
    },
    {
      "COURSE_NAME" : "Energy Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Engineering Data Analysis (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Engineering Drawing - A143",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 49.857500
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 49.248400
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.018000
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 45.968600
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 (Monday)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.067800
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 (Thursday)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.960100
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 (Tuesday)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.086300
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 - A142",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 54.242000
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 - A144",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.201600
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 - A145",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 45.141100
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 - A146",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 47.158200
    },
    {
      "COURSE_NAME" : "Engineering Drawing 1 - A147",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 49.076900
    },
    {
      "COURSE_NAME" : "Engineering Management",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 46.202500
    },
    {
      "COURSE_NAME" : "Engineering Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 60.265100
    },
    {
      "COURSE_NAME" : "Engineering Utilities 1 (Paired) (MWF 7:30PM-8:45PM \/ R405) (Sat 1:15PM-5:00PM \/ R612)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 43.156200
    },
    {
      "COURSE_NAME" : "Engineering Utilities 1 (Paired); MWF (7:30PM-8:45PM) @R413; Th (5:00PM-8:45PM) @R614",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.351400
    },
    {
      "COURSE_NAME" : "Engineering Utilities 2 (5:00-6:15PM MWF R304)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 92.105300
    },
    {
      "COURSE_NAME" : "Engineering Utilities 2 (8:15-9:30 Mon R407  Wed & Fri R406))",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 97.435900
    },
    {
      "COURSE_NAME" : "Engineering Utilities 2: Basic Electrical Engineering (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 48.339100
    },
    {
      "COURSE_NAME" : "Enterprise Architecture (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Enterprise Architecture (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Enterprise Architecture (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Entrepreneurial Behavior",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.932600
    },
    {
      "COURSE_NAME" : "Entrepreneurial Leadership in An Organization",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.000000
    },
    {
      "COURSE_NAME" : "Environmental Science and Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.663100
    },
    {
      "COURSE_NAME" : "Environmental Science and Engineering (MWF 12:00PM-1:15PM)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 82.566600
    },
    {
      "COURSE_NAME" : "Environmental Science and Engineering (MWF 8:15AM-9:30AM)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 81.051000
    },
    {
      "COURSE_NAME" : "Environmental Science and Engineering (TTHS 5:00PM-6:15PM)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.606600
    },
    {
      "COURSE_NAME" : "Ergonomics 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 47.619000
    },
    {
      "COURSE_NAME" : "Ergonomics 1 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 70.000000
    },
    {
      "COURSE_NAME" : "Ergonomics 1 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 79.411800
    },
    {
      "COURSE_NAME" : "Ergonomics 1 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 77.305000
    },
    {
      "COURSE_NAME" : "Ergonomics 2 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.561800
    },
    {
      "COURSE_NAME" : "Ergonomics 2 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 76.378000
    },
    {
      "COURSE_NAME" : "Ergonomics 2 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 90.810800
    },
    {
      "COURSE_NAME" : "Ethics (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Events Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "FINANCIAL ACCOUNTING AND REPORTING",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.666700
    },
    {
      "COURSE_NAME" : "FINANCIAL MARKETS (MODULE 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "FUNDAMENTAL OF ELECTRONIC CIRCUITS (LABORATORY)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 76.000000
    },
    {
      "COURSE_NAME" : "FUNDAMENTAL OF ELECTRONIC CIRCUITS (LABORATORY)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 51.219500
    },
    {
      "COURSE_NAME" : "FUNDAMENTAL OF ELECTRONIC CIRCUITS (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 83.720900
    },
    {
      "COURSE_NAME" : "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.430400
    },
    {
      "COURSE_NAME" : "FUNDAMENTALS OF MIXED SIGNALS AND SENSORS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 57.894700
    },
    {
      "COURSE_NAME" : "FUNDAMENTALS OF MIXED SIGNALS AND SENSORS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 63.636400
    },
    {
      "COURSE_NAME" : "Feedback And Control Systems (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 80.000000
    },
    {
      "COURSE_NAME" : "Feedback and Control Systems (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 74.866300
    },
    {
      "COURSE_NAME" : "Feedback and Control Systems (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 56.896600
    },
    {
      "COURSE_NAME" : "Financial Accounting and Report in Tourism",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 82.191800
    },
    {
      "COURSE_NAME" : "Financial Market",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 94.915300
    },
    {
      "COURSE_NAME" : "Fluid Machineries",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 63.664600
    },
    {
      "COURSE_NAME" : "Fluid Machineries",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Fluid Mechanics",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 56.818200
    },
    {
      "COURSE_NAME" : "Fluid Mechanics for ME",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.387100
    },
    {
      "COURSE_NAME" : "Foreign Language 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.333300
    },
    {
      "COURSE_NAME" : "Franchising",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 40.816300
    },
    {
      "COURSE_NAME" : "Freehand and Digital Drawing (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Freehand and Digital Drawing (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Fundamental of Electronic Circuits (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 90.909100
    },
    {
      "COURSE_NAME" : "Fundamentals In Film And Video Production",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 80.308900
    },
    {
      "COURSE_NAME" : "Fundamentals of Electrical Circuits (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 53.333300
    },
    {
      "COURSE_NAME" : "Fundamentals of Electrical Circuits (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Fundamentals of Information Systems (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Fundamentals of Information Systems - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 77.777800
    },
    {
      "COURSE_NAME" : "Fundamentals of Material Science and Engineering (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 72.561000
    },
    {
      "COURSE_NAME" : "Fundamentals of Material Science and Engineering (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 56.626500
    },
    {
      "COURSE_NAME" : "Fundamentals of Material Science and Engineering for ME",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.978700
    },
    {
      "COURSE_NAME" : "Fundamentals of Material Science and Engineering for ME (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 79.661000
    },
    {
      "COURSE_NAME" : "Fundamentals of Material Science and Engineering for ME (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 78.195500
    },
    {
      "COURSE_NAME" : "Fundamentals of Mixed Signals and Sensors (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 77.777800
    },
    {
      "COURSE_NAME" : "Fundamentals of Power Plant Engineering Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Fundamentals of Power Plant Engineering Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.666700
    },
    {
      "COURSE_NAME" : "Fundamentals of Power Plant Engineering Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.684200
    },
    {
      "COURSE_NAME" : "GENERAL ECOLOGY",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 55.000000
    },
    {
      "COURSE_NAME" : "GENERAL ECOLOGY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "GENERAL ECOLOGY LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 58.333300
    },
    {
      "COURSE_NAME" : "GEOTECHNICAL ENGINEERING: SOIL MECHANICS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 54.794500
    },
    {
      "COURSE_NAME" : "GEOTECHNICAL ENGINEERING: SOIL MECHANICS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.424200
    },
    {
      "COURSE_NAME" : "Game Design: Art Production (Non-Programming) (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 80.000000
    },
    {
      "COURSE_NAME" : "Game Networking",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 53.846200
    },
    {
      "COURSE_NAME" : "General Chemistry 1 - Summer",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.666700
    },
    {
      "COURSE_NAME" : "Geotechnical Engineering: Soil MEchanics",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.669500
    },
    {
      "COURSE_NAME" : "Global Culture & Tourism Geography",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 74.359000
    },
    {
      "COURSE_NAME" : "HIGHWAY AND RAILROAD ENGINEERING",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 89.610400
    },
    {
      "COURSE_NAME" : "HISTORY OF GRAPHIC DESIGN",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 51.223200
    },
    {
      "COURSE_NAME" : "HUMAN BIOLOGY (LABORATORY) FLUX 1:00-5:30 PM MON\/WED R609",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "HYDRAULICS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 42.924900
    },
    {
      "COURSE_NAME" : "HYDRAULICS (LABORATORY)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 59.570800
    },
    {
      "COURSE_NAME" : "HYDRAULICS (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.151500
    },
    {
      "COURSE_NAME" : "Heat Transfer",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.258400
    },
    {
      "COURSE_NAME" : "Heat and Mass Transfer 1 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 76.923100
    },
    {
      "COURSE_NAME" : "Highway and Railroad Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.449700
    },
    {
      "COURSE_NAME" : "History of Architecture 1",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 58.013100
    },
    {
      "COURSE_NAME" : "History of Architecture 2",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 70.367600
    },
    {
      "COURSE_NAME" : "History of Architecture 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 47.716000
    },
    {
      "COURSE_NAME" : "History of Architecture 3",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 63.970600
    },
    {
      "COURSE_NAME" : "History of Architecture 3",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.193500
    },
    {
      "COURSE_NAME" : "History of Architecture 3",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 60.589800
    },
    {
      "COURSE_NAME" : "History of Architecture 4",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.467400
    },
    {
      "COURSE_NAME" : "History of Architecture 4",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 52.145700
    },
    {
      "COURSE_NAME" : "History of Graphic Design (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "History of Graphic Design (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Homeroom Aliwagwag",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 67.441900
    },
    {
      "COURSE_NAME" : "Homeroom Kalatungan",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 73.684200
    },
    {
      "COURSE_NAME" : "Hydraulics",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 70.592900
    },
    {
      "COURSE_NAME" : "Hydraulics (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 67.643700
    },
    {
      "COURSE_NAME" : "Hydraulics (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 70.037100
    },
    {
      "COURSE_NAME" : "Hydraulics - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "IE Capstone Project 2",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "IE Capstone Project 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "IE Seminars and Plant Visits (Field)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 90.000000
    },
    {
      "COURSE_NAME" : "IE Seminars and Plant Visits (Field)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.862100
    },
    {
      "COURSE_NAME" : "ILLUMINATION ENGINEERING DESIGN (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 71.428600
    },
    {
      "COURSE_NAME" : "INDUSTRIAL ELECTRONICS FOR ELECTRICAL ENGINEERS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "INDUSTRIAL ELECTRONICS FOR ELECTRICAL ENGINEERS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.089500
    },
    {
      "COURSE_NAME" : "INDUSTRIAL ELECTRONICS FOR ELECTRICAL ENGINEERS (LAB)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 61.805600
    },
    {
      "COURSE_NAME" : "INTERMEDIATE ACCOUNTING 2A",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 73.717900
    },
    {
      "COURSE_NAME" : "INTRODUCTION TO AIRLINE SERVICES",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 94.444400
    },
    {
      "COURSE_NAME" : "INTRODUCTION TO BIOTECHNOLOGY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 43.243200
    },
    {
      "COURSE_NAME" : "INTRODUCTION TO MULTIMEDIA ARTS",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 53.608200
    },
    {
      "COURSE_NAME" : "IS Project Management 1 (Paired) - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "IS Project Management 2 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "IS Project Management 2 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 42.500000
    },
    {
      "COURSE_NAME" : "IT Application Tools In Business",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 60.000000
    },
    {
      "COURSE_NAME" : "IT Application Tools in Business",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.441600
    },
    {
      "COURSE_NAME" : "IT Infrastructure and Network Technologies (Paired) - Thursday 7AM - 1130AM R604-HyFlex",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 47.761200
    },
    {
      "COURSE_NAME" : "IT Infrastucture and Network Technologies (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.710400
    },
    {
      "COURSE_NAME" : "IT Infrastucture and Network Technologies (Paired) - Friday 11:30am to 2:30pm R602",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.941700
    },
    {
      "COURSE_NAME" : "Illumination Engineering Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 85.714300
    },
    {
      "COURSE_NAME" : "Illumination Engineering Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.816300
    },
    {
      "COURSE_NAME" : "Image Management for Business Professionals",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.151500
    },
    {
      "COURSE_NAME" : "Income Taxation",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 45.714300
    },
    {
      "COURSE_NAME" : "Income Taxation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 93.548400
    },
    {
      "COURSE_NAME" : "Industrial Electronics for Electrical Engineers",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 43.933100
    },
    {
      "COURSE_NAME" : "Industrial Electronics for Electrical Engineers (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 54.210500
    },
    {
      "COURSE_NAME" : "Industrial Engineering Orientation",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 72.872300
    },
    {
      "COURSE_NAME" : "Industrial Engineering Orientation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 78.873200
    },
    {
      "COURSE_NAME" : "Industrial Engineering Orientation",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 64.516100
    },
    {
      "COURSE_NAME" : "Industrial Engineering Orientation (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 77.777800
    },
    {
      "COURSE_NAME" : "Industrial Materials and Processes (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 47.663600
    },
    {
      "COURSE_NAME" : "Industrial Materials and Processess (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 84.523800
    },
    {
      "COURSE_NAME" : "Industrial Plant Engineering (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 51.515200
    },
    {
      "COURSE_NAME" : "Industrial Plant Engineering (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 84.615400
    },
    {
      "COURSE_NAME" : "Information Management (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Information Management (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.886400
    },
    {
      "COURSE_NAME" : "Information Management (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.959400
    },
    {
      "COURSE_NAME" : "Information Systems (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Information Systems (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Innovation Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 77.966100
    },
    {
      "COURSE_NAME" : "Inquiries, Investigation & Immersion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 52.054800
    },
    {
      "COURSE_NAME" : "Instrumentation and Control (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 60.000000
    },
    {
      "COURSE_NAME" : "Instrumentation and Control (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Instrumentation and Control M & W 5 - 6:15 PM @ R508",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.555600
    },
    {
      "COURSE_NAME" : "InterMediate Accounting 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "InterMediate Accounting 2A",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Interactive MEdia Design - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Interactive Media Design",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 51.111100
    },
    {
      "COURSE_NAME" : "Intermediate Accounting 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.130200
    },
    {
      "COURSE_NAME" : "Intermediate Accounting 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 83.606600
    },
    {
      "COURSE_NAME" : "Intermediate Accounting 3",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 56.024100
    },
    {
      "COURSE_NAME" : "Intermediate Accounting 3A",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 72.316400
    },
    {
      "COURSE_NAME" : "Introduction To Data Science",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 68.631600
    },
    {
      "COURSE_NAME" : "Introduction To Matlab (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 56.188700
    },
    {
      "COURSE_NAME" : "Introduction To MultiMedia Arts",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 80.000000
    },
    {
      "COURSE_NAME" : "Introduction To MultiMedia Arts (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Introduction to Communication Media (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Introduction to Computer Systems Laboratory",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 49.123400
    },
    {
      "COURSE_NAME" : "Introduction to Data Science",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 56.953600
    },
    {
      "COURSE_NAME" : "Introduction to Data Science",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 58.898300
    },
    {
      "COURSE_NAME" : "Introduction to Game Design and Development",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 56.654000
    },
    {
      "COURSE_NAME" : "Introduction to Hardware Description Language (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 78.846200
    },
    {
      "COURSE_NAME" : "Introduction to Hardware Description Language (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 77.027000
    },
    {
      "COURSE_NAME" : "Introduction to Hardware Description Language (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 76.923100
    },
    {
      "COURSE_NAME" : "Introduction to Multimedia Arts",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 61.226500
    },
    {
      "COURSE_NAME" : "Introduction to Multimedia Arts",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.227900
    },
    {
      "COURSE_NAME" : "Introduction to Philosophy of The Human Person",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.192500
    },
    {
      "COURSE_NAME" : "Introduction to Philosophy of the Human Person",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 65.211000
    },
    {
      "COURSE_NAME" : "Introduction to Psychology (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "It Infrastucture and Network Technologies (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "It Infrastucture and Network Technologies (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "LEGAL ASPECTS IN TOURISM AND HOSPITALITY",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "LOGIC CIRCUIT AND SWITCHING THEORY",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "LOGIC CIRCUITS AND SWITCHING THEORY FOR EE",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "LUXURY MANAGEMENT",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 93.750000
    },
    {
      "COURSE_NAME" : "LUXURY MANAGEMENT",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Labster Test Course",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Law On Obligations and Contracts",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 67.187500
    },
    {
      "COURSE_NAME" : "Law On Obligations and Contracts F2F Sched Mondays\/Wednesdays 1-2:30 R405",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 43.220300
    },
    {
      "COURSE_NAME" : "Law On Obligations and Contracts F2F Sched Mondays\/Wednesdays 2:30-4:00 R403",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.740700
    },
    {
      "COURSE_NAME" : "Logic Circuit and Switching Theory (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Logic Circuit and Switching Theory (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 71.666700
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory (Laboratory) (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory for EE",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 41.666700
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory for EE",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 47.876400
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory for EE (Lab)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.578900
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory for EE (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Logic Circuits and Switching Theory for EE (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "MANAGEMENT ACCOUNTING INTERNSHIP",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "MANAGEMENT ACCOUNTING RESEARCH",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "ME Capstone Project 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 68.442600
    },
    {
      "COURSE_NAME" : "ME Laws, Contracts and Ethics",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 82.758600
    },
    {
      "COURSE_NAME" : "ME Laws, Contracts and Ethics",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 67.033000
    },
    {
      "COURSE_NAME" : "METHODS OF TOURISM RESEARCH",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "MICROBIOLOGY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 91.666700
    },
    {
      "COURSE_NAME" : "MICROBIOLOGY LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "MICROECONOMICS THEORY AND PRACTICE (MODULE 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "MICROECONOMICS THEORY AND PRACTICE (MODULE 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "MICROECONOMICS THEORY AND PRACTICE (MODULE 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "MOTION GRAPHICS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 45.345300
    },
    {
      "COURSE_NAME" : "MULTIMEDIA PUBLISHING",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 63.245500
    },
    {
      "COURSE_NAME" : "MULTIMEDIA PUBLISHING LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.785500
    },
    {
      "COURSE_NAME" : "Machine Design 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 75.098800
    },
    {
      "COURSE_NAME" : "Machine Design 2 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 97.260300
    },
    {
      "COURSE_NAME" : "Machine Design 2 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 74.517400
    },
    {
      "COURSE_NAME" : "Machine Elements (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.606900
    },
    {
      "COURSE_NAME" : "Machine Learning",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 78.282800
    },
    {
      "COURSE_NAME" : "Machine Learning",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Machine Learning (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 80.478100
    },
    {
      "COURSE_NAME" : "Machine Learning (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.405300
    },
    {
      "COURSE_NAME" : "Machine Shop Theory and Practice 1 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 60.869600
    },
    {
      "COURSE_NAME" : "Machine Shop Theory and Practice 1 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Machine Shop Theory and Practice 2 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 64.705900
    },
    {
      "COURSE_NAME" : "Machine Shop Theory and Practice 2 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 73.304200
    },
    {
      "COURSE_NAME" : "Machine Shop Theory and Practice 2 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 64.238400
    },
    {
      "COURSE_NAME" : "Management Science",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 70.303000
    },
    {
      "COURSE_NAME" : "Managerial Accounting",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 95.959600
    },
    {
      "COURSE_NAME" : "Managerial Accounting",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 94.827600
    },
    {
      "COURSE_NAME" : "Market Research and Consumer Behavior",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 96.385500
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 1 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 69.613300
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 1 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 89.285700
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 1 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 61.111100
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 2 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 83.000000
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 2 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 97.916700
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 3 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 3 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 86.419800
    },
    {
      "COURSE_NAME" : "Mechanical Engineering 3 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 92.173900
    },
    {
      "COURSE_NAME" : "Mechanical Engineering Laboratory 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 80.503100
    },
    {
      "COURSE_NAME" : "Mechanics of Deformable Bodies (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Mechanics of Deformable Bodies for CE (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.545500
    },
    {
      "COURSE_NAME" : "Methods of Research",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 67.896700
    },
    {
      "COURSE_NAME" : "Micro Perspective of Tourism and Hospitality",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 76.404500
    },
    {
      "COURSE_NAME" : "Micro-Hydro Electric Plant Design",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "Micro-Hydro Electric Plant Design",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 89.189200
    },
    {
      "COURSE_NAME" : "Micro-Hydro Electric Plant Design",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.333300
    },
    {
      "COURSE_NAME" : "Microprocessor Systems for Electrical Engineers",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Microprocessor Systems for Electrical Engineers (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.428600
    },
    {
      "COURSE_NAME" : "Microprocessor Systems for Electrical Engineers (Laboratory) - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Microprocessor and Microcontroller Systems and Design",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 42.105300
    },
    {
      "COURSE_NAME" : "Microprocessor and Microcontroller Systems and Design",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.237100
    },
    {
      "COURSE_NAME" : "Microprocessor and Microcontroller Systems and Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Microprocessor and Microcontroller Systems and Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 83.582100
    },
    {
      "COURSE_NAME" : "Microprocessors",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 55.000000
    },
    {
      "COURSE_NAME" : "Microprocessors",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 43.150700
    },
    {
      "COURSE_NAME" : "Microprocessors (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 63.095200
    },
    {
      "COURSE_NAME" : "Microprocessors (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 68.992200
    },
    {
      "COURSE_NAME" : "Microprocessors (Laboratory) - Module 1 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Mobile Application Development (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 88.888900
    },
    {
      "COURSE_NAME" : "Mobile Application Development (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 63.679200
    },
    {
      "COURSE_NAME" : "Modelling and Simulation Theory (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Modulation And Coding Techniques Laboratory",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.877200
    },
    {
      "COURSE_NAME" : "Modulation and Coding Techniques",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.400000
    },
    {
      "COURSE_NAME" : "Modulation and Coding Techniques Laboratory",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 67.368400
    },
    {
      "COURSE_NAME" : "Motion Graphics",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.040800
    },
    {
      "COURSE_NAME" : "Motion Graphics Laboratory",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 48.732900
    },
    {
      "COURSE_NAME" : "Multicultural Diversity in The Workplace",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 82.051300
    },
    {
      "COURSE_NAME" : "Multimedia Publishing",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 66.513800
    },
    {
      "COURSE_NAME" : "Negotiation",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 58.812300
    },
    {
      "COURSE_NAME" : "New Trends in IE",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "Numerical MEthods (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 43.413200
    },
    {
      "COURSE_NAME" : "Numerical MEthods (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.704400
    },
    {
      "COURSE_NAME" : "Numerical Methods",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 59.635700
    },
    {
      "COURSE_NAME" : "Numerical Methods (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 76.056300
    },
    {
      "COURSE_NAME" : "Numerical Methods BLENDED 5:30PM-7:00PM MWF R411",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.595900
    },
    {
      "COURSE_NAME" : "ORGANIC MOLECULES\/INTRODUCTION TO ORGANIC CHEMISTRY (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 56.250000
    },
    {
      "COURSE_NAME" : "ORGANIC MOLECULES\/INTRODUCTION TO ORGANIC CHEMISTRY LABORATORY (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "ORGANIC MOLECULES\/INTRODUCTION TO ORGANIC CHEMISTRY LABORATORY (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Object Oriented Programing (Lab)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.454400
    },
    {
      "COURSE_NAME" : "Object Oriented Programing (Lab)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 53.015100
    },
    {
      "COURSE_NAME" : "On-The-Job Training\/Practicum",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Operating Systems",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 45.333300
    },
    {
      "COURSE_NAME" : "Operating Systems",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.666700
    },
    {
      "COURSE_NAME" : "Operating Systems (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 69.879500
    },
    {
      "COURSE_NAME" : "Operating Systems (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.739100
    },
    {
      "COURSE_NAME" : "Operating Systems (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.280900
    },
    {
      "COURSE_NAME" : "Operations Audit",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 97.849500
    },
    {
      "COURSE_NAME" : "Operations Management (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 63.809500
    },
    {
      "COURSE_NAME" : "Operations Management (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.891900
    },
    {
      "COURSE_NAME" : "Operations Management (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 69.306900
    },
    {
      "COURSE_NAME" : "Operations Research 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 63.551400
    },
    {
      "COURSE_NAME" : "Operations Research 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.303800
    },
    {
      "COURSE_NAME" : "Opportunity Seeking",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.967100
    },
    {
      "COURSE_NAME" : "Oral Communication in Context - Summer",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 67.142900
    },
    {
      "COURSE_NAME" : "Organic Chemistry 2 Lecture",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Organization",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "PHILIPPINE POPULAR CULTURE",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 84.431100
    },
    {
      "COURSE_NAME" : "POWER SYSTEM PROTECTION",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "POWER SYSTEM PROTECTION",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.428600
    },
    {
      "COURSE_NAME" : "POWER SYSTEMS ANALYSIS 1 (LABORATORY) F2F 8:30AM - 1:00PM R612",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 61.904800
    },
    {
      "COURSE_NAME" : "POWER SYSTEMS ANALYSIS 1 (TTh 7:00PM-8:30PM @R414)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.714300
    },
    {
      "COURSE_NAME" : "PRINCIPLES OF 3D ANIMATION (PAIRED)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "PRODUCT DESIGN AND DEVELOPMENT",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "PROFESSIONAL DEVELOPMENT & APPLIED ETHICS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 96.551700
    },
    {
      "COURSE_NAME" : "PROGRAMMING LOGIC AND DESIGN (LAB)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 93.723800
    },
    {
      "COURSE_NAME" : "PSYCHOLOGICAL STATISTICS (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "PSYCHOLOGICAL STATISTICS LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.625000
    },
    {
      "COURSE_NAME" : "Pagsulat Sa Filipino Sa Piling Larang (Tech-Voc)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.705900
    },
    {
      "COURSE_NAME" : "Pagsulat sa Filipino sa Piling Larangan (Tech-Voc)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 40.185500
    },
    {
      "COURSE_NAME" : "Pagsulat sa Filipino sa Piling Larangan (Tech-Voc)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.428600
    },
    {
      "COURSE_NAME" : "Particle Technology (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 68.776400
    },
    {
      "COURSE_NAME" : "Particle Technology (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 41.266400
    },
    {
      "COURSE_NAME" : "Performance Management Systems",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 97.500000
    },
    {
      "COURSE_NAME" : "Philippine Culture and Tourism Geography",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 91.666700
    },
    {
      "COURSE_NAME" : "Philippine Literature (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Philippine Popular Culture (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Physical Chemistry For Engineers 2 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Physical Chemistry for Engineers 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.333300
    },
    {
      "COURSE_NAME" : "Physical Chemistry for Engineers 1 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 90.062100
    },
    {
      "COURSE_NAME" : "Physical Chemistry for Engineers 1 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.458700
    },
    {
      "COURSE_NAME" : "Physical Chemistry for Engineers 2 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.737900
    },
    {
      "COURSE_NAME" : "Physical Chemistry for Engineers 2 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 95.000000
    },
    {
      "COURSE_NAME" : "Physics For Ece  (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 44.915300
    },
    {
      "COURSE_NAME" : "Physics for ECE",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.689700
    },
    {
      "COURSE_NAME" : "Physics for ECE (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.816300
    },
    {
      "COURSE_NAME" : "Physics for ECE (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.033900
    },
    {
      "COURSE_NAME" : "Physics for Engineers (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.515400
    },
    {
      "COURSE_NAME" : "Planning 1: Site Planning and Landscape Architecture",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.343600
    },
    {
      "COURSE_NAME" : "Planning 1: Site Planning and Landscape Architecture (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Planning 2: Fundamentals of Urban Design and Community Architecture",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 42.027000
    },
    {
      "COURSE_NAME" : "Planning 3: Introduction to Urban and Regional Planning",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 47.384600
    },
    {
      "COURSE_NAME" : "Portfolio Preparation and Exhibit Design",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.952400
    },
    {
      "COURSE_NAME" : "Power Plant Design With Renewable Energy (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 63.725500
    },
    {
      "COURSE_NAME" : "Power Plant Design With Renewable Energy (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 81.383000
    },
    {
      "COURSE_NAME" : "Power Systems Analysis 1 (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 40.425500
    },
    {
      "COURSE_NAME" : "Power Systems Analysis 1 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.428600
    },
    {
      "COURSE_NAME" : "Power Systems Analysis 2",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Power Systems Analysis 2 (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 64.583300
    },
    {
      "COURSE_NAME" : "Power Systems Analysis 2 (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 86.734700
    },
    {
      "COURSE_NAME" : "Practical Research 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 70.000000
    },
    {
      "COURSE_NAME" : "Practicum",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 63.013700
    },
    {
      "COURSE_NAME" : "Practicum",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 85.057500
    },
    {
      "COURSE_NAME" : "Principles of 3D Animation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 57.407400
    },
    {
      "COURSE_NAME" : "Principles of 3D Animation",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.204700
    },
    {
      "COURSE_NAME" : "Principles of Communication System",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 62.015500
    },
    {
      "COURSE_NAME" : "Principles of Communication System",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 64.745800
    },
    {
      "COURSE_NAME" : "Principles of Communication System (Lab)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 49.505000
    },
    {
      "COURSE_NAME" : "Principles of Communication System (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 81.250000
    },
    {
      "COURSE_NAME" : "Principles of Communication System (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Principles of Economics",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 89.411800
    },
    {
      "COURSE_NAME" : "Principles of Economics",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 64.516100
    },
    {
      "COURSE_NAME" : "Principles of Economics (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 57.142900
    },
    {
      "COURSE_NAME" : "Principles of Economics (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Principles of Economics (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Principles of Transportation Engineering",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.963000
    },
    {
      "COURSE_NAME" : "Principles of Transportation Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.603300
    },
    {
      "COURSE_NAME" : "Process Dynamics and Control (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 83.946500
    },
    {
      "COURSE_NAME" : "Process Dynamics and Control (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 87.261100
    },
    {
      "COURSE_NAME" : "Process Safety",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 43.750000
    },
    {
      "COURSE_NAME" : "Production and Operations Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 81.467200
    },
    {
      "COURSE_NAME" : "Professional Issues in Information System (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Professional Practice 1: Laws Affecting The Practice of Architecture",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.975200
    },
    {
      "COURSE_NAME" : "Professional Writing (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Programming",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 80.801500
    },
    {
      "COURSE_NAME" : "Programming (320 Hrs)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 45.312500
    },
    {
      "COURSE_NAME" : "Programming Logic and Design (Lab) (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 86.666700
    },
    {
      "COURSE_NAME" : "Programming Logic and Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 65.087100
    },
    {
      "COURSE_NAME" : "Programs and Policies On Enterprise Development",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Programs and Policies On Enterprise Development",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 55.411300
    },
    {
      "COURSE_NAME" : "Project Feasibility",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.031700
    },
    {
      "COURSE_NAME" : "Project Feasibility",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Project Management",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.666700
    },
    {
      "COURSE_NAME" : "Project Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 57.142900
    },
    {
      "COURSE_NAME" : "Psychological Statistics",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Purposive Communication (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Quantitative Techniques in Business",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Quantity Surveying (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.210700
    },
    {
      "COURSE_NAME" : "Quantity Surveying (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 59.816300
    },
    {
      "COURSE_NAME" : "REGULATORY FRAMEWORK AND LEGAL ISSUES IN BUSINESS",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "REGULATORY FRAMEWORK AND LEGAL ISSUES IN BUSINESS",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 95.698900
    },
    {
      "COURSE_NAME" : "RESEARCH IN TOURISM",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "RISK MANAGEMENT as Applied to Safety, Security, and Sanitation",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 90.000000
    },
    {
      "COURSE_NAME" : "RISK MANAGEMENT as Applied to Safety, Security, and Sanitation",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 83.544300
    },
    {
      "COURSE_NAME" : "Readings in Philippine History - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 46.428600
    },
    {
      "COURSE_NAME" : "Refrigeration Systems",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 73.770500
    },
    {
      "COURSE_NAME" : "Refrigeration Systems",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 58.430200
    },
    {
      "COURSE_NAME" : "Risk Analysis and Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "SAP ERP 6.0 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 46.666700
    },
    {
      "COURSE_NAME" : "SAP ERP 6.0 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.637400
    },
    {
      "COURSE_NAME" : "SOCIAL PSYCHOLOGY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.069800
    },
    {
      "COURSE_NAME" : "STRUCTURAL DESIGN 1 : RCD AND PRE-STRESSED CONCRETE",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 46.400000
    },
    {
      "COURSE_NAME" : "STRUCTURAL DESIGN 1 : RCD AND PRE-STRESSED CONCRETE (LABORATORY)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "STRUCTURAL DESIGN 1 : RCD AND PRE-STRESSED CONCRETE (LABORATORY)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "STRUCTURAL THEORY  (PAIRED)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.708200
    },
    {
      "COURSE_NAME" : "SURVEYING (FIELD)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 47.580600
    },
    {
      "COURSE_NAME" : "SURVEYING (FIELD) 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 46.172800
    },
    {
      "COURSE_NAME" : "SURVEYING 1 (FIELD)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 80.254800
    },
    {
      "COURSE_NAME" : "SURVEYING 1 (FIELD)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.405500
    },
    {
      "COURSE_NAME" : "SURVEYING 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 44.869600
    },
    {
      "COURSE_NAME" : "SURVEYING 2 (FIELD)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 51.958200
    },
    {
      "COURSE_NAME" : "SURVEYING 2 (FIELD)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.210800
    },
    {
      "COURSE_NAME" : "SYSTEMATICS",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 52.941200
    },
    {
      "COURSE_NAME" : "Safety Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Science, Technology, and Society (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Separation Processes (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 54.923100
    },
    {
      "COURSE_NAME" : "Separation Processes (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 69.060800
    },
    {
      "COURSE_NAME" : "Signals Spectra and Signal Processing (Lab)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 55.102000
    },
    {
      "COURSE_NAME" : "Signals Spectra and Signal Processing (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 58.441600
    },
    {
      "COURSE_NAME" : "Signals Spectra and Signal Processing (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 70.629400
    },
    {
      "COURSE_NAME" : "Small Business Consulting\/Business Development Service",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 91.489400
    },
    {
      "COURSE_NAME" : "Social Issues and Professional Practices",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.186000
    },
    {
      "COURSE_NAME" : "Social Media Marketing",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Social Media Marketing",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Social Media Marketing",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.423100
    },
    {
      "COURSE_NAME" : "Software Design",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 58.126700
    },
    {
      "COURSE_NAME" : "Software Design",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 88.235300
    },
    {
      "COURSE_NAME" : "Software Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 53.319500
    },
    {
      "COURSE_NAME" : "Software Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Software Engineering 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 72.641500
    },
    {
      "COURSE_NAME" : "Software Engineering 1 (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 96.666700
    },
    {
      "COURSE_NAME" : "Software Engineering 1 (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 96.958200
    },
    {
      "COURSE_NAME" : "Software Engineering 1 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 97.607700
    },
    {
      "COURSE_NAME" : "Software Engineering 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 44.444400
    },
    {
      "COURSE_NAME" : "Software Engineering 2 (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 90.449400
    },
    {
      "COURSE_NAME" : "Solar and Wind Utilization (MWF 5:30PM-7:00PM @R405)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 69.767400
    },
    {
      "COURSE_NAME" : "Solar and Wind Utilization (MWF 5:30PM-7:00PM @R405)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 84.269700
    },
    {
      "COURSE_NAME" : "Solutions Thermodynamics (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 41.463400
    },
    {
      "COURSE_NAME" : "Solutions Thermodynamics (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.776400
    },
    {
      "COURSE_NAME" : "Special Topics In Computer Engineering (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Special Topics In Mech'l Eng'g (6:15-7:30PM MWF)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Special Topics in Chemical Engineering",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Special Topics in MEchanical Engineering",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 72.000000
    },
    {
      "COURSE_NAME" : "Special Topics in Mechanical Engineering",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 98.701300
    },
    {
      "COURSE_NAME" : "Speech for RTV and Emerging Media",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Statics for Rigid Bodies (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Statics of Rigid Bodies (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Strategic Cost Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 94.736800
    },
    {
      "COURSE_NAME" : "Strategic Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.173900
    },
    {
      "COURSE_NAME" : "Strategic Tax Management Mondays\/Wednesdays 4:00-5:30 Room R403",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Structural Design 1 : RCD and Pre-Stressed Concrete (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 43.478300
    },
    {
      "COURSE_NAME" : "Structural Design 1 : RCD and Pre-Stressed Concrete (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Structural Design 1 : RCD and Pre-Stressed Concrete (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 65.151500
    },
    {
      "COURSE_NAME" : "Structural Design 1 : Rcd and Pre-Stressed Concrete (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 52.941200
    },
    {
      "COURSE_NAME" : "Structural Design 1 : Rcd and Pre-Stressed Concrete (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 47.770700
    },
    {
      "COURSE_NAME" : "Structural Design 1 : Rcd and Pre-Stressed Concrete (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.278700
    },
    {
      "COURSE_NAME" : "Structural Design 1 : Rcd and Pre-Stressed Concrete (Laboratory) - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 49.152500
    },
    {
      "COURSE_NAME" : "Structural Design 2: Steel Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Structural Design 2: Steel Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 63.685600
    },
    {
      "COURSE_NAME" : "Structural Design 2: Steel Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 53.237400
    },
    {
      "COURSE_NAME" : "Structural Design 2: Steel Design (Laboratory) - Module 1 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Structural Design 2: Steel Design (Laboratory) - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Structural Design 2: Steel Design (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Structural Design 2: Steel Design - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 46.153800
    },
    {
      "COURSE_NAME" : "Structural Theory (Paired) - Module 2 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 75.000000
    },
    {
      "COURSE_NAME" : "Structural Theory(Paired) (Module 1)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 62.500000
    },
    {
      "COURSE_NAME" : "Supply Chain Management",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 92.307700
    },
    {
      "COURSE_NAME" : "Supply Chain Management",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.909100
    },
    {
      "COURSE_NAME" : "Supply Chain Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 85.000000
    },
    {
      "COURSE_NAME" : "Surveying (Field)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 75.675700
    },
    {
      "COURSE_NAME" : "Surveying 1 (Field)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 40.444400
    },
    {
      "COURSE_NAME" : "Surveying 1 (Field) (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 66.666700
    },
    {
      "COURSE_NAME" : "Surveying 1 (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 48.387100
    },
    {
      "COURSE_NAME" : "Surveying 1 (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 45.714300
    },
    {
      "COURSE_NAME" : "Surveying 2 (Field)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 66.341500
    },
    {
      "COURSE_NAME" : "Sustainability and Strategic Audit",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Sustainable Tourism",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.473700
    },
    {
      "COURSE_NAME" : "System Fundamentals",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 59.649100
    },
    {
      "COURSE_NAME" : "System Fundamentals",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 88.940100
    },
    {
      "COURSE_NAME" : "System Fundamentals",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 60.526300
    },
    {
      "COURSE_NAME" : "Systems Engineering",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 60.821900
    },
    {
      "COURSE_NAME" : "Systems Engineering",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 93.750000
    },
    {
      "COURSE_NAME" : "Systems Engineering",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 89.592800
    },
    {
      "COURSE_NAME" : "TYPOGRAPHY AND LAYOUT",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 49.425300
    },
    {
      "COURSE_NAME" : "TYPOGRAPHY AND LAYOUT LABORATORY",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 56.521700
    },
    {
      "COURSE_NAME" : "Technology and Livelihood Education 10",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 62.559200
    },
    {
      "COURSE_NAME" : "Technopreneurship",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.363600
    },
    {
      "COURSE_NAME" : "Technopreneurship",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 46.002400
    },
    {
      "COURSE_NAME" : "Technopreneurship (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Technopreneurship for IE",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 63.157900
    },
    {
      "COURSE_NAME" : "Technopreneurship | FLUX-Monday : 7:00PM to 8:30PM|R407",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 70.640400
    },
    {
      "COURSE_NAME" : "Technopreneurship | FLUX-Wednesday : 8:30AM to 11:30AM | R414",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.777800
    },
    {
      "COURSE_NAME" : "Technopreneurship | FLUX-Wednesday : 8:30AM to 11:30AM | R414",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 56.000000
    },
    {
      "COURSE_NAME" : "Technopreneurship |FLUX-Tuesday : 5:30PM to 7:00PM | R409",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 71.869600
    },
    {
      "COURSE_NAME" : "The Contemporary World (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "The Contemporary World (Module 3)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 63.157900
    },
    {
      "COURSE_NAME" : "Theory of Architecture 1 (Paired) (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Thermodynamics 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.857100
    },
    {
      "COURSE_NAME" : "Thesis 1",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Thesis 1",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 54.166700
    },
    {
      "COURSE_NAME" : "Thesis 2",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 44.736800
    },
    {
      "COURSE_NAME" : "Thesis 2",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Tour Guiding",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Tour and Travel Management",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Tourism and Hospitality Marketing",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Transmission Media and Antenna Systems and Design",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 43.750000
    },
    {
      "COURSE_NAME" : "Transmission Media and Antenna Systems and Design (Lab)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Transmission Media and Antenna Systems and Design (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Transmission Media and Antenna Systems and Design (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Transmission Media and Antenna Systems and Design (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Tropical Design",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.053900
    },
    {
      "COURSE_NAME" : "Updates in Financial Reporting Standards ONLINE 5:00-6:00PM FRI",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "Updates in Management Accounting",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 88.888900
    },
    {
      "COURSE_NAME" : "Valuation Concepts and Methods",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 91.666700
    },
    {
      "COURSE_NAME" : "Venture Finance",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.029000
    },
    {
      "COURSE_NAME" : "Vibration Engineering (Module 1)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "WATER RESOURCES ENGINEERING",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 91.228100
    },
    {
      "COURSE_NAME" : "WATER RESOURCES ENGINEERING - A442",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 40.000000
    },
    {
      "COURSE_NAME" : "WEB DESIGN AND DEVELOPMENT (LABORATORY)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 72.000000
    },
    {
      "COURSE_NAME" : "WRITING FOR NEW MEDIA - Module 3 Completion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 41.666700
    },
    {
      "COURSE_NAME" : "Water Resources Engineering (Module 2)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Web Design and Development (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 87.443900
    },
    {
      "COURSE_NAME" : "Web Programming (Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Web Programming (Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Wireless Communications (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 71.428600
    },
    {
      "COURSE_NAME" : "Wireless Communicatons (Paired)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Wireless Communicatons (Paired)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Wireless Communicatons (Paired)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 100.000000
    },
    {
      "COURSE_NAME" : "Work Immersion",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 59.821400
    },
    {
      "COURSE_NAME" : "Work Immersion",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 43.488900
    },
    {
      "COURSE_NAME" : "Work Study And Measurement (Laboratory)",
      "YEAR" : 2021,
      "AVERAGE_PASSING_RATE" : 41.116800
    },
    {
      "COURSE_NAME" : "Work Study and Measurement (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 61.538500
    },
    {
      "COURSE_NAME" : "Workshop Theory and Practice (Laboratory)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 74.242400
    },
    {
      "COURSE_NAME" : "Workshop Theory and Practice (Laboratory)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 60.919500
    },
    {
      "COURSE_NAME" : "World Literature: the Masterpieces(Module 2)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "World Literature: the Masterpieces(Module 3)",
      "YEAR" : 2022,
      "AVERAGE_PASSING_RATE" : 50.000000
    },
    {
      "COURSE_NAME" : "Writing for Film and Television",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 65.552500
    },
    {
      "COURSE_NAME" : "Writing for New Media",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 42.180100
    },
    {
      "COURSE_NAME" : "[A242] Engineering Utilities 1 (MWF 6:15PM-7:30PM R413 \/ Th 8:15AM-12:00PM)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 51.851900
    },
    {
      "COURSE_NAME" : "[A243] Engineering Utilities 1 (TThS 3:45PM-5:00PM R413 \/ M1:15PM-5:00PM )",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 60.714300
    },
    {
      "COURSE_NAME" : "[A245] Engineering Utilities 1 (TThS 5:00PM-6:15PM R413 \/ W 1:15PM-5:00PM)",
      "YEAR" : 2023,
      "AVERAGE_PASSING_RATE" : 45.454500
    }
  ];

  const sanitizeText = (text) => {
    // Remove symbols and convert to lowercase
    return text.replace(/[^\w\s]/g, "").toLowerCase();
  };

  const allCourses = data.map((course) => course.COURSE_NAME);

  const filteredCourses = allCourses
    .filter((course) =>
      sanitizeText(course).includes(sanitizeText(searchTerm))
    )
    .slice(0, 1);

  const handleCourseChange = (_, value) => {
    setSelectedCourse(value);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Typography variant="h4">Passing Rates</Typography>

      <Autocomplete
        options={allCourses}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Course"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        )}
        value={selectedCourse}
        onChange={handleCourseChange}
      />

      <Box display="flex" justifyContent="space-between">
        {[2021, 2022, 2023].map((year) => (
          <Card
            key={year}
            style={{
              width: "30%",
              margin: "0.5rem",
              visibility: selectedCourse ? "visible" : "hidden",
            }}
          >
            <CardHeader title={`Year ${year}`} />
            <CardContent>
              {data
                .filter((course) => course.YEAR === year && course.COURSE_NAME === selectedCourse)
                .map((course) => (
                  <div key={course.COURSE_NAME}>
                    <Typography variant="h4">
                      {course.AVERAGE_PASSING_RATE}%
                    </Typography>
                    <br />
                  </div>
                ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PassingRatePage;
