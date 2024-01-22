import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';


const ProfessorTable = () => {
  const [data] = useState([
    {
      INSTRUCTOR_LAST_NAME: "Velarde",
      INSTRUCTOR_FIRST_NAME: "Jen Matthew",
      COURSE_NAME: "Account Lockout Intervention",
    },
    {
      INSTRUCTOR_LAST_NAME: "VALENCERINA",
      INSTRUCTOR_FIRST_NAME: "HANNA REGINE",
      COURSE_NAME: "Animation",
    },
    {
      INSTRUCTOR_LAST_NAME: "NUEVO",
      INSTRUCTOR_FIRST_NAME: "GENIE CELINI D.",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "SAYMAN",
      INSTRUCTOR_FIRST_NAME: "JEAN",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "SIMBULAS",
      INSTRUCTOR_FIRST_NAME: "FIDES",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Haw",
      INSTRUCTOR_FIRST_NAME: "Tatiana Beatrice",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Rhochel B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Veran",
      INSTRUCTOR_FIRST_NAME: "Rydel Heart S",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mahipus",
      INSTRUCTOR_FIRST_NAME: "Gwen Myer",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabara",
      INSTRUCTOR_FIRST_NAME: "Veia Gwyneth M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Iwazaki",
      INSTRUCTOR_FIRST_NAME: "Toshiko",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Vann Vinzent",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montegrande",
      INSTRUCTOR_FIRST_NAME: "Krystle Cendy",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacheco",
      INSTRUCTOR_FIRST_NAME: "Jose Miguel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tajantajan",
      INSTRUCTOR_FIRST_NAME: "Wrenn Harvyl",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sy",
      INSTRUCTOR_FIRST_NAME: "Aldrich Jedrek",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomas",
      INSTRUCTOR_FIRST_NAME: "Vincent Alfred B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Larroza",
      INSTRUCTOR_FIRST_NAME: "Lee Robin",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villadolid",
      INSTRUCTOR_FIRST_NAME: "Julienne Maree",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laud",
      INSTRUCTOR_FIRST_NAME: "Kristine Anne A",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labirua",
      INSTRUCTOR_FIRST_NAME: "Pat Ramses",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Qiu",
      INSTRUCTOR_FIRST_NAME: "James",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruperto",
      INSTRUCTOR_FIRST_NAME: "Marie Angelique M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruperto",
      INSTRUCTOR_FIRST_NAME: "Luke Aaron M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Servillon",
      INSTRUCTOR_FIRST_NAME: "Vanesse Richen",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vibar",
      INSTRUCTOR_FIRST_NAME: "Eirron Seth B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parcia",
      INSTRUCTOR_FIRST_NAME: "Jin Andrei Y.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Lance Richmond P.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mempin",
      INSTRUCTOR_FIRST_NAME: "Jose Enrique",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capricho",
      INSTRUCTOR_FIRST_NAME: "John Lloyd",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Burgos",
      INSTRUCTOR_FIRST_NAME: "Marlo",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buslon",
      INSTRUCTOR_FIRST_NAME: "Elna May",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zibelsberger",
      INSTRUCTOR_FIRST_NAME: "Kim-Dennis S.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estrada",
      INSTRUCTOR_FIRST_NAME: "Ruvic Christian N",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimeno",
      INSTRUCTOR_FIRST_NAME: "Aaron Christian Domini",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Tzed Keanu Kylle",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Felongco",
      INSTRUCTOR_FIRST_NAME: "Dharline Faith K.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Zedrick Dave",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santillana",
      INSTRUCTOR_FIRST_NAME: "Jaezon Zhach P.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magalona",
      INSTRUCTOR_FIRST_NAME: "Rica Flor",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maxey",
      INSTRUCTOR_FIRST_NAME: "Antonette",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vales",
      INSTRUCTOR_FIRST_NAME: "Alvin Francis C",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alagano",
      INSTRUCTOR_FIRST_NAME: "Khayle Maurey",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montebon",
      INSTRUCTOR_FIRST_NAME: "Terexia",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Alisha Thea",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Umusig",
      INSTRUCTOR_FIRST_NAME: "Ric Andre G.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sy",
      INSTRUCTOR_FIRST_NAME: "Mhegan Anthony",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabanos",
      INSTRUCTOR_FIRST_NAME: "Alliah Cassandra",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dungan",
      INSTRUCTOR_FIRST_NAME: "Al-Rajeed G.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortes",
      INSTRUCTOR_FIRST_NAME: "Charles Anthony D.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monterola",
      INSTRUCTOR_FIRST_NAME: "Le'Cole",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Desabilla",
      INSTRUCTOR_FIRST_NAME: "Kaiser Owen",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ablay",
      INSTRUCTOR_FIRST_NAME: "John Sebastian",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cubelo",
      INSTRUCTOR_FIRST_NAME: "Sarah Lene C.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dugaduga",
      INSTRUCTOR_FIRST_NAME: "Alexis Miguel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Añora",
      INSTRUCTOR_FIRST_NAME: "Carol Jules",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andales",
      INSTRUCTOR_FIRST_NAME: "Kylene Faith A.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Murray",
      INSTRUCTOR_FIRST_NAME: "Sitty Raimie Dee",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cirunay",
      INSTRUCTOR_FIRST_NAME: "Selwyn Rex",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabio",
      INSTRUCTOR_FIRST_NAME: "Japs Gabriel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bangcaya",
      INSTRUCTOR_FIRST_NAME: "Jerick Jann",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mantiquilla",
      INSTRUCTOR_FIRST_NAME: "Lean Amier Jn. J",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brito",
      INSTRUCTOR_FIRST_NAME: "Cyd Christian O.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tsunashima",
      INSTRUCTOR_FIRST_NAME: "Zeus A.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamicpic",
      INSTRUCTOR_FIRST_NAME: "Seagfreud Reeve E.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maloles",
      INSTRUCTOR_FIRST_NAME: "Ralph Laurenz V.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tsushima",
      INSTRUCTOR_FIRST_NAME: "Kouji",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Kenneth Jude B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guilao",
      INSTRUCTOR_FIRST_NAME: "Joemar Danniel R.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cajes",
      INSTRUCTOR_FIRST_NAME: "Thomybon",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esma",
      INSTRUCTOR_FIRST_NAME: "Luke Derek",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallaza",
      INSTRUCTOR_FIRST_NAME: "Francine Elaine",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Genota",
      INSTRUCTOR_FIRST_NAME: "Carl Christian",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Langco",
      INSTRUCTOR_FIRST_NAME: "Prince Sayyid Abdulaziz",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Josol",
      INSTRUCTOR_FIRST_NAME: "Christian Dominic",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bornea",
      INSTRUCTOR_FIRST_NAME: "Ramon Emmanuel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mundia",
      INSTRUCTOR_FIRST_NAME: "Jandy Moore",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daga-ang",
      INSTRUCTOR_FIRST_NAME: "Joann",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ayucan",
      INSTRUCTOR_FIRST_NAME: "Aila Kamyll",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amasol",
      INSTRUCTOR_FIRST_NAME: "Michael Feleandro",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diez",
      INSTRUCTOR_FIRST_NAME: "Ralph Elly",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abolcair",
      INSTRUCTOR_FIRST_NAME: "Adnan B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Resma",
      INSTRUCTOR_FIRST_NAME: "Julio Raphael",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sy",
      INSTRUCTOR_FIRST_NAME: "King Kerwin Matthew F.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pastrana",
      INSTRUCTOR_FIRST_NAME: "Jemuel Christopher",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Faustino",
      INSTRUCTOR_FIRST_NAME: "Justine A",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palicte",
      INSTRUCTOR_FIRST_NAME: "Trisha Jennesse",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leguip",
      INSTRUCTOR_FIRST_NAME: "Sven Eric",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labrague",
      INSTRUCTOR_FIRST_NAME: "Van Jake",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abarca",
      INSTRUCTOR_FIRST_NAME: "Keith Adriel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Napoles",
      INSTRUCTOR_FIRST_NAME: "Sheldon Seth",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ano-os",
      INSTRUCTOR_FIRST_NAME: "Gwenneaver",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Porter",
      INSTRUCTOR_FIRST_NAME: "Hans Thomas A.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cahiles",
      INSTRUCTOR_FIRST_NAME: "Maria Andrea V.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jayag",
      INSTRUCTOR_FIRST_NAME: "Angelo Jerome",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sacal",
      INSTRUCTOR_FIRST_NAME: "Cristal Jane",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nudalo",
      INSTRUCTOR_FIRST_NAME: "Jedely A.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bajado III",
      INSTRUCTOR_FIRST_NAME: "Gregorio",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arreola",
      INSTRUCTOR_FIRST_NAME: "Julia Arlene",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cosare",
      INSTRUCTOR_FIRST_NAME: "Christian James",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumable",
      INSTRUCTOR_FIRST_NAME: "Mark Chernobyle U.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toraja",
      INSTRUCTOR_FIRST_NAME: "Maryah Kaye",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peig",
      INSTRUCTOR_FIRST_NAME: "Audrey Marie Hyacinth D.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aranton",
      INSTRUCTOR_FIRST_NAME: "Tracy Monique",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salat",
      INSTRUCTOR_FIRST_NAME: "Datu Al-Ashari J.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sucayan",
      INSTRUCTOR_FIRST_NAME: "Ralf Raymond A.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sindao",
      INSTRUCTOR_FIRST_NAME: "Joshua Elijah R.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wong",
      INSTRUCTOR_FIRST_NAME: "Samuelle Hannah M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gan",
      INSTRUCTOR_FIRST_NAME: "Jessica Rachell",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clavisillas",
      INSTRUCTOR_FIRST_NAME: "Ian Varkey",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Detalla",
      INSTRUCTOR_FIRST_NAME: "Gabriel G.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reginio",
      INSTRUCTOR_FIRST_NAME: "Kim Addrian Y.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Loyloy",
      INSTRUCTOR_FIRST_NAME: "George Anthony",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hewe",
      INSTRUCTOR_FIRST_NAME: "Thomas Raphael",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nazareno",
      INSTRUCTOR_FIRST_NAME: "Justin Matthew",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paclar",
      INSTRUCTOR_FIRST_NAME: "Karl Vincent",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balmes",
      INSTRUCTOR_FIRST_NAME: "Rizza Leonor S.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Troy Joshua M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Remoroza",
      INSTRUCTOR_FIRST_NAME: "Jamie Gem B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abid",
      INSTRUCTOR_FIRST_NAME: "James Paul",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Angelika Heart",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cablay",
      INSTRUCTOR_FIRST_NAME: "Meldy Mier",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nadong",
      INSTRUCTOR_FIRST_NAME: "Justin Enrique P.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mercado",
      INSTRUCTOR_FIRST_NAME: "Ada Audrey Nichole",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nazareno",
      INSTRUCTOR_FIRST_NAME: "Cherry Mae",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yretarino",
      INSTRUCTOR_FIRST_NAME: "Maubert Fred P.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gurrea",
      INSTRUCTOR_FIRST_NAME: "Marfranz Niño",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bartolata",
      INSTRUCTOR_FIRST_NAME: "Noellene Marie",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amplayo",
      INSTRUCTOR_FIRST_NAME: "Chrysta Mae",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Narciso",
      INSTRUCTOR_FIRST_NAME: "Joshua Yves",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pandian",
      INSTRUCTOR_FIRST_NAME: "Dennise O.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castro",
      INSTRUCTOR_FIRST_NAME: "Carmila O.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "de los Santos",
      INSTRUCTOR_FIRST_NAME: "Kathlene Eve T.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sigayle",
      INSTRUCTOR_FIRST_NAME: "Mario B",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jadraque",
      INSTRUCTOR_FIRST_NAME: "Joey Mae",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juntilla",
      INSTRUCTOR_FIRST_NAME: "Isaiah",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tambilawan",
      INSTRUCTOR_FIRST_NAME: "Morris L.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagare",
      INSTRUCTOR_FIRST_NAME: "Louis Raphael",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aldeguer",
      INSTRUCTOR_FIRST_NAME: "Brett Derek",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solaña",
      INSTRUCTOR_FIRST_NAME: "Rica Ann R",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gordo",
      INSTRUCTOR_FIRST_NAME: "Jewel Krista T",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sandiego",
      INSTRUCTOR_FIRST_NAME: "Lorenzo Nico",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buquia",
      INSTRUCTOR_FIRST_NAME: "Arnulfo",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilapil",
      INSTRUCTOR_FIRST_NAME: "Marinelle V.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mancao",
      INSTRUCTOR_FIRST_NAME: "Jon Raphael",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Joshua James C.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Narca",
      INSTRUCTOR_FIRST_NAME: "Luke Aison M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomaquin",
      INSTRUCTOR_FIRST_NAME: "Recel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eugenio",
      INSTRUCTOR_FIRST_NAME: "Joel Vincent",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Romero-Salas",
      INSTRUCTOR_FIRST_NAME: "Javier J.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mordeno",
      INSTRUCTOR_FIRST_NAME: "Shara Mae",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortega",
      INSTRUCTOR_FIRST_NAME: "Arabella L.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamutan",
      INSTRUCTOR_FIRST_NAME: "Adrian",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Encarnacion",
      INSTRUCTOR_FIRST_NAME: "Ruwin L.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumongsod",
      INSTRUCTOR_FIRST_NAME: "Austin Jacob V.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nicart",
      INSTRUCTOR_FIRST_NAME: "Karyll Kate",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Savillo",
      INSTRUCTOR_FIRST_NAME: "Rey Joseph",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montero",
      INSTRUCTOR_FIRST_NAME: "Kevin Keir",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nisnisan",
      INSTRUCTOR_FIRST_NAME: "Luke Daniel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villote",
      INSTRUCTOR_FIRST_NAME: "Kricia Umel R.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Campos",
      INSTRUCTOR_FIRST_NAME: "Ma. Trish Kristel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamon",
      INSTRUCTOR_FIRST_NAME: "Joel Psalm",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luminarias",
      INSTRUCTOR_FIRST_NAME: "Zedner Mick",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cejas",
      INSTRUCTOR_FIRST_NAME: "Enrico Martin",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paragoso",
      INSTRUCTOR_FIRST_NAME: "Sofija Katreena",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bracamonte",
      INSTRUCTOR_FIRST_NAME: "Lester Miguel C",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Kevin Shaun",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palma",
      INSTRUCTOR_FIRST_NAME: "Kerby Jan M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampongol",
      INSTRUCTOR_FIRST_NAME: "Luke Jellergil",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Franco",
      INSTRUCTOR_FIRST_NAME: "Lynter James",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palma",
      INSTRUCTOR_FIRST_NAME: "Ali Azhar",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Araña",
      INSTRUCTOR_FIRST_NAME: "Jesse Adrian",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Julmani",
      INSTRUCTOR_FIRST_NAME: "Fatima Jazmeen",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daga-ang",
      INSTRUCTOR_FIRST_NAME: "Benjie",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Kris Marnellete",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boddie",
      INSTRUCTOR_FIRST_NAME: "Basilio Corleone",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delgado",
      INSTRUCTOR_FIRST_NAME: "Caryl Andrea",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arjoun",
      INSTRUCTOR_FIRST_NAME: "Nizar",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alvarez",
      INSTRUCTOR_FIRST_NAME: "Gene Armin",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Mary Zheen D.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oraiz",
      INSTRUCTOR_FIRST_NAME: "Jason O.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mondia",
      INSTRUCTOR_FIRST_NAME: "Karl Monico",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mastura",
      INSTRUCTOR_FIRST_NAME: "Bai Nurjeannah",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernaldez",
      INSTRUCTOR_FIRST_NAME: "Ryne Raphael",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puno",
      INSTRUCTOR_FIRST_NAME: "Deborah Kim B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Basalo",
      INSTRUCTOR_FIRST_NAME: "Jopeth John J.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alpuerto",
      INSTRUCTOR_FIRST_NAME: "David Ezekeil J.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Misa",
      INSTRUCTOR_FIRST_NAME: "Jumille",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jovenir",
      INSTRUCTOR_FIRST_NAME: "Jhon Clifford",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Riparip",
      INSTRUCTOR_FIRST_NAME: "Han Iven M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Co",
      INSTRUCTOR_FIRST_NAME: "Kyle Justin",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galope",
      INSTRUCTOR_FIRST_NAME: "Reznee Mariel",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tiu",
      INSTRUCTOR_FIRST_NAME: "Ervin Jann C.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delatina",
      INSTRUCTOR_FIRST_NAME: "John Carl I.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aviola",
      INSTRUCTOR_FIRST_NAME: "Lucas Simon",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ipong",
      INSTRUCTOR_FIRST_NAME: "Valerie Joy",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Sean Christian E",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siase",
      INSTRUCTOR_FIRST_NAME: "Jero Numer J.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tanudra",
      INSTRUCTOR_FIRST_NAME: "Joshua Mark R.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albano",
      INSTRUCTOR_FIRST_NAME: "Ericka Bianca J.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Singh",
      INSTRUCTOR_FIRST_NAME: "Jagwinder",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mantilla",
      INSTRUCTOR_FIRST_NAME: "Aldrin Lewy R.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cael",
      INSTRUCTOR_FIRST_NAME: "Alexandra Thea",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gregorio",
      INSTRUCTOR_FIRST_NAME: "Darline Joy",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Que",
      INSTRUCTOR_FIRST_NAME: "Gian Carlo R",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magno",
      INSTRUCTOR_FIRST_NAME: "Ace Adrian",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lonzaga",
      INSTRUCTOR_FIRST_NAME: "John Patrick",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Roque",
      INSTRUCTOR_FIRST_NAME: "Kohl Ree A.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Neis",
      INSTRUCTOR_FIRST_NAME: "Clegie Mikhaela G",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salse",
      INSTRUCTOR_FIRST_NAME: "Redelyn L.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Jechz Jacob M",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortañez",
      INSTRUCTOR_FIRST_NAME: "Juan Emmanuel P.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suarez",
      INSTRUCTOR_FIRST_NAME: "Rafael Eduardo L.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagatan",
      INSTRUCTOR_FIRST_NAME: "John Lloyd Y.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escabarte",
      INSTRUCTOR_FIRST_NAME: "Karl Steven",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garrido",
      INSTRUCTOR_FIRST_NAME: "John Nicholas",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malificiado",
      INSTRUCTOR_FIRST_NAME: "Jonard Chavyn",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saavedra",
      INSTRUCTOR_FIRST_NAME: "Cherly M.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agayan",
      INSTRUCTOR_FIRST_NAME: "Jiah Viktoria",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Seras",
      INSTRUCTOR_FIRST_NAME: "Amber Trizia C",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corpuz",
      INSTRUCTOR_FIRST_NAME: "Ethan Alexis Luis",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Felicity F.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carandang",
      INSTRUCTOR_FIRST_NAME: "Moreinne",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bansil",
      INSTRUCTOR_FIRST_NAME: "Shehan",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duco",
      INSTRUCTOR_FIRST_NAME: "Christine Faye",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madayag",
      INSTRUCTOR_FIRST_NAME: "Euan Angelo B.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laurel",
      INSTRUCTOR_FIRST_NAME: "Julianna Marie S.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jeng",
      INSTRUCTOR_FIRST_NAME: "Claire Natalene",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estacio",
      INSTRUCTOR_FIRST_NAME: "Jan Paul James",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pariolan",
      INSTRUCTOR_FIRST_NAME: "Jaad P.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bornales",
      INSTRUCTOR_FIRST_NAME: "Carmela Bea C.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tacuyan",
      INSTRUCTOR_FIRST_NAME: "Ertzie Fate P",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maratas",
      INSTRUCTOR_FIRST_NAME: "Aaron Christian D",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juanday",
      INSTRUCTOR_FIRST_NAME: "Earl Juvic Junssell",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "Henry Ford",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solarte",
      INSTRUCTOR_FIRST_NAME: "Chantal Reiy A.",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fudot",
      INSTRUCTOR_FIRST_NAME: "Pamela",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fudot",
      INSTRUCTOR_FIRST_NAME: "Reggie",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Micabalo",
      INSTRUCTOR_FIRST_NAME: "Patrick Ivan",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cariño",
      INSTRUCTOR_FIRST_NAME: "Xylyn Joyce",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Robles",
      INSTRUCTOR_FIRST_NAME: "Kenichi",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apura",
      INSTRUCTOR_FIRST_NAME: "Chancy Mae E",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morante",
      INSTRUCTOR_FIRST_NAME: "Luis Miguel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "EMPAS",
      INSTRUCTOR_FIRST_NAME: "PAUL EMMANUEL",
      COURSE_NAME: "TEAMS CHECKER",
    },
    {
      INSTRUCTOR_LAST_NAME: "SORIÑO",
      INSTRUCTOR_FIRST_NAME: "HONEY JANE",
      COURSE_NAME: "Construction Materials and Testing",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laspoña",
      INSTRUCTOR_FIRST_NAME: "Roggie",
      COURSE_NAME: "HyFlex Learning Workshop",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tay",
      INSTRUCTOR_FIRST_NAME: "Laurenz Earl N.",
      COURSE_NAME: "Physics for Engineers (PHY033.A171.3T.21.22)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wing",
      INSTRUCTOR_FIRST_NAME: "Christian Vincent M",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Honesto Wilfrido M.",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bersabal",
      INSTRUCTOR_FIRST_NAME: "Dunhill James L",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabido",
      INSTRUCTOR_FIRST_NAME: "Bea Francesca",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duran",
      INSTRUCTOR_FIRST_NAME: "Yna Kassandra M",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bustaleño",
      INSTRUCTOR_FIRST_NAME: "Aisis Dana",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Handugan",
      INSTRUCTOR_FIRST_NAME: "Chris Harry",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llanos",
      INSTRUCTOR_FIRST_NAME: "Euan Miguel",
      COURSE_NAME: "Computer Fundamentals and Programming 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elbanbuena",
      INSTRUCTOR_FIRST_NAME: "Irvin",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madarang",
      INSTRUCTOR_FIRST_NAME: "Johndel Matthew",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rendon",
      INSTRUCTOR_FIRST_NAME: "Jannella E.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Japon",
      INSTRUCTOR_FIRST_NAME: "Lyandro Harold",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sulog",
      INSTRUCTOR_FIRST_NAME: "Alyssa C.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bocao",
      INSTRUCTOR_FIRST_NAME: "Mandy Shane",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alcober",
      INSTRUCTOR_FIRST_NAME: "Raven Grace",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arcamo",
      INSTRUCTOR_FIRST_NAME: "Charles Joshua",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dula",
      INSTRUCTOR_FIRST_NAME: "Rochelle Althea S.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bales",
      INSTRUCTOR_FIRST_NAME: "Skyler Maconro",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labit",
      INSTRUCTOR_FIRST_NAME: "Adrianne Gale",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Andre Deuce",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estares",
      INSTRUCTOR_FIRST_NAME: "Vincent Louie",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mañacap",
      INSTRUCTOR_FIRST_NAME: "Niño",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamutan",
      INSTRUCTOR_FIRST_NAME: "Francis Angelo",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Prejula",
      INSTRUCTOR_FIRST_NAME: "Philip Andrew M",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monterola",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Piñol",
      INSTRUCTOR_FIRST_NAME: "Gerard Aaron",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Picardal",
      INSTRUCTOR_FIRST_NAME: "Michael John M.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gopiteo",
      INSTRUCTOR_FIRST_NAME: "Clark John P.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buat",
      INSTRUCTOR_FIRST_NAME: "Josh Brylle",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Edillon",
      INSTRUCTOR_FIRST_NAME: "Ethan Kendrick",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ausin",
      INSTRUCTOR_FIRST_NAME: "Renzo Francis",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marin",
      INSTRUCTOR_FIRST_NAME: "Mary Ann",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jamero",
      INSTRUCTOR_FIRST_NAME: "Estelle Xaris",
      COURSE_NAME: "Chemistry for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chiu",
      INSTRUCTOR_FIRST_NAME: "James Benson",
      COURSE_NAME: "Chemistry for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Umayam",
      INSTRUCTOR_FIRST_NAME: "Antawn Zahl D",
      COURSE_NAME: "Chemistry for Engineers - A191",
    },
    {
      INSTRUCTOR_LAST_NAME: "Damiao",
      INSTRUCTOR_FIRST_NAME: "Herwin Maida",
      COURSE_NAME: "Chemistry for Engineers - A191",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarzona",
      INSTRUCTOR_FIRST_NAME: "Darwin David C",
      COURSE_NAME: "Chemistry for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sereño",
      INSTRUCTOR_FIRST_NAME: "Ysabela Skye S.",
      COURSE_NAME: "Chemistry for Engineers - A191",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tugade",
      INSTRUCTOR_FIRST_NAME: "Ivan Yanni",
      COURSE_NAME: "Chemistry for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bentoy",
      INSTRUCTOR_FIRST_NAME: "Elvin",
      COURSE_NAME: "Chemistry for Engineers - A191",
    },
    {
      INSTRUCTOR_LAST_NAME: "Braga",
      INSTRUCTOR_FIRST_NAME: "Rodlyn Joise C.",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ando",
      INSTRUCTOR_FIRST_NAME: "Maxine Alessandra Grace",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Langones",
      INSTRUCTOR_FIRST_NAME: "Patrisha Louise",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vestil",
      INSTRUCTOR_FIRST_NAME: "Prince Bryan C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galaura",
      INSTRUCTOR_FIRST_NAME: "Enif",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peliño",
      INSTRUCTOR_FIRST_NAME: "Alexia Kathleen J",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valencia",
      INSTRUCTOR_FIRST_NAME: "Sebastian Kyle D",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gulben",
      INSTRUCTOR_FIRST_NAME: "Karell Keith",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almarez",
      INSTRUCTOR_FIRST_NAME: "Kyle Colyn M",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barrozo",
      INSTRUCTOR_FIRST_NAME: "Geo Mcdave",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Liwanan",
      INSTRUCTOR_FIRST_NAME: "Shadrach Fidel",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baylon",
      INSTRUCTOR_FIRST_NAME: "Angela Uriel B",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peñero",
      INSTRUCTOR_FIRST_NAME: "Jose Janver Gabriel",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimacali",
      INSTRUCTOR_FIRST_NAME: "Joy Maxine",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lauzon",
      INSTRUCTOR_FIRST_NAME: "Bely Jay P",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangente",
      INSTRUCTOR_FIRST_NAME: "Iris Jane",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Babael",
      INSTRUCTOR_FIRST_NAME: "Samantha Genesis Joyce",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Conol",
      INSTRUCTOR_FIRST_NAME: "Jolla Therese R.",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sango",
      INSTRUCTOR_FIRST_NAME: "Joshua Emmanuel S",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Silveron",
      INSTRUCTOR_FIRST_NAME: "Richan Lord Panfilo",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Eduardo",
      COURSE_NAME:
        "Advanced Electrical System Design: High-Rise and Industrial Buildings (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nazareno",
      INSTRUCTOR_FIRST_NAME: "Tomas",
      COURSE_NAME: "Chemistry for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Takano",
      INSTRUCTOR_FIRST_NAME: "Marie Ky M",
      COURSE_NAME: "Facilities Planning and Design Principles",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brillantes",
      INSTRUCTOR_FIRST_NAME: "Ysobel Iree",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabanao",
      INSTRUCTOR_FIRST_NAME: "Kaysie Andrea A.",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Argoncillo",
      INSTRUCTOR_FIRST_NAME: "Hans Dave",
      COURSE_NAME: "2D ANIMATION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duque",
      INSTRUCTOR_FIRST_NAME: "Keona Antoinette",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tatlonghari",
      INSTRUCTOR_FIRST_NAME: "Hyacinth Zoeie",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapenit",
      INSTRUCTOR_FIRST_NAME: "Adrian Glenn A",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Narsolis",
      INSTRUCTOR_FIRST_NAME: "Russel Allen",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañete",
      INSTRUCTOR_FIRST_NAME: "April Renee",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabat",
      INSTRUCTOR_FIRST_NAME: "Leonardo Sebastian",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guerra",
      INSTRUCTOR_FIRST_NAME: "Jhoana Luz Nazary",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sac",
      INSTRUCTOR_FIRST_NAME: "Patric Joshua G",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dulay",
      INSTRUCTOR_FIRST_NAME: "Erika Kristi",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Namang",
      INSTRUCTOR_FIRST_NAME: "Donard Michael M",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortel",
      INSTRUCTOR_FIRST_NAME: "John William",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Imanaga",
      INSTRUCTOR_FIRST_NAME: "Heede",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibalio",
      INSTRUCTOR_FIRST_NAME: "Jan Carlo",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mabale",
      INSTRUCTOR_FIRST_NAME: "Euryz",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rivera",
      INSTRUCTOR_FIRST_NAME: "Lorenz Anthon M",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Donaire",
      INSTRUCTOR_FIRST_NAME: "Pius Francois",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magallen",
      INSTRUCTOR_FIRST_NAME: "Hannah Pearl",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Joshua Arnel III",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orihuela",
      INSTRUCTOR_FIRST_NAME: "Danielle Joshua B",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diestro",
      INSTRUCTOR_FIRST_NAME: "Vanessa Nikka",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abear",
      INSTRUCTOR_FIRST_NAME: "Althea Marie C",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Falcon",
      INSTRUCTOR_FIRST_NAME: "Leijoe",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anicoy",
      INSTRUCTOR_FIRST_NAME: "Marian Mae B",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Divinagracia",
      INSTRUCTOR_FIRST_NAME: "Julia Chloe M",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pendatun",
      INSTRUCTOR_FIRST_NAME: "Kylle Anne M",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magtibay",
      INSTRUCTOR_FIRST_NAME: "Zuriel J",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagang",
      INSTRUCTOR_FIRST_NAME: "Justine May",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Facundo",
      INSTRUCTOR_FIRST_NAME: "Liane Marie S",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortez",
      INSTRUCTOR_FIRST_NAME: "Daniel Karl",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leoncito",
      INSTRUCTOR_FIRST_NAME: "Gwynyth Alexandria",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andres",
      INSTRUCTOR_FIRST_NAME: "Karl Patrick",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zaballero",
      INSTRUCTOR_FIRST_NAME: "Pauline Jane N",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montano",
      INSTRUCTOR_FIRST_NAME: "John Marco",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oyao",
      INSTRUCTOR_FIRST_NAME: "Frexcel Marie S.",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacatan",
      INSTRUCTOR_FIRST_NAME: "Dustin Miguel Luke",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hernandez",
      INSTRUCTOR_FIRST_NAME: "Dianne Rose C",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nala",
      INSTRUCTOR_FIRST_NAME: "Tristan Raye Charles",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abuda",
      INSTRUCTOR_FIRST_NAME: "Ken",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pagsaligan",
      INSTRUCTOR_FIRST_NAME: "Renzo Miguel C",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tirol",
      INSTRUCTOR_FIRST_NAME: "Andre Jef S",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pepito",
      INSTRUCTOR_FIRST_NAME: "Denmar A",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capiña",
      INSTRUCTOR_FIRST_NAME: "Mariel",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acosta",
      INSTRUCTOR_FIRST_NAME: "Jean Katherine",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangle",
      INSTRUCTOR_FIRST_NAME: "Rica Fionne",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solarte",
      INSTRUCTOR_FIRST_NAME: "Ma. Sharisse Bettina",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borbon",
      INSTRUCTOR_FIRST_NAME: "Neilky Jane",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matunding",
      INSTRUCTOR_FIRST_NAME: "Johnloyd",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ambalong",
      INSTRUCTOR_FIRST_NAME: "Gheslian Carl A",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boiser",
      INSTRUCTOR_FIRST_NAME: "Shian Megan E",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magcamit",
      INSTRUCTOR_FIRST_NAME: "Rogen",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garrido",
      INSTRUCTOR_FIRST_NAME: "Frances Julia",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cahapay",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Joshua E",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fontanilla",
      INSTRUCTOR_FIRST_NAME: "Andrea Leigh",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Curaza",
      INSTRUCTOR_FIRST_NAME: "Raymond Lee",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Besana",
      INSTRUCTOR_FIRST_NAME: "Joshua B",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ayupan",
      INSTRUCTOR_FIRST_NAME: "Carlo Jay",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labong",
      INSTRUCTOR_FIRST_NAME: "Alexandra Albien",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarong",
      INSTRUCTOR_FIRST_NAME: "Jonathan Kim S",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batingana",
      INSTRUCTOR_FIRST_NAME: "Reed Jude P",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Talingting",
      INSTRUCTOR_FIRST_NAME: "Vince Clyde",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bariquit Jr.",
      INSTRUCTOR_FIRST_NAME: "Teoddy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lauron",
      INSTRUCTOR_FIRST_NAME: "Wenzyr Dale G",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diango",
      INSTRUCTOR_FIRST_NAME: "Cean Daniel",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acilo",
      INSTRUCTOR_FIRST_NAME: "Christina",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Bryan Reiner N",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zerna",
      INSTRUCTOR_FIRST_NAME: "Juan Angelo C",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tiu",
      INSTRUCTOR_FIRST_NAME: "Christian Joseph P",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Beso",
      INSTRUCTOR_FIRST_NAME: "Junelle S.",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orig",
      INSTRUCTOR_FIRST_NAME: "Christian Joseph B",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumapas",
      INSTRUCTOR_FIRST_NAME: "Fernando D",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Angelo Miguel L",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamutan",
      INSTRUCTOR_FIRST_NAME: "Marc Andre C",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plaza",
      INSTRUCTOR_FIRST_NAME: "Carl Angelo S",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tablante",
      INSTRUCTOR_FIRST_NAME: "Kyle N",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacanay",
      INSTRUCTOR_FIRST_NAME: "Harold Jason",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sia",
      INSTRUCTOR_FIRST_NAME: "Dyan Lane",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parac",
      INSTRUCTOR_FIRST_NAME: "James Andrei S",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mahadali",
      INSTRUCTOR_FIRST_NAME: "Datu Serwen N",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Park",
      INSTRUCTOR_FIRST_NAME: "Mark Anthony P",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nanasawa",
      INSTRUCTOR_FIRST_NAME: "Jay Yuu",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "Franchesco",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escoses",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Nikko",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Iewida",
      INSTRUCTOR_FIRST_NAME: "Khaled",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Angeles",
      INSTRUCTOR_FIRST_NAME: "Miles",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manatad",
      INSTRUCTOR_FIRST_NAME: "Cornell Clyde",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reloba",
      INSTRUCTOR_FIRST_NAME: "Lovelyn O",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baring",
      INSTRUCTOR_FIRST_NAME: "Jumel Oliver R",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asna",
      INSTRUCTOR_FIRST_NAME: "Queney",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Cedric-Lee",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calonia",
      INSTRUCTOR_FIRST_NAME: "Fame S",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Briñosa",
      INSTRUCTOR_FIRST_NAME: "Joey Fyke S",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tamayo",
      INSTRUCTOR_FIRST_NAME: "Elaine Joy",
      COURSE_NAME: "Logic Circuits and Switching Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mindalano",
      INSTRUCTOR_FIRST_NAME: "Sonaya F",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Halangdon",
      INSTRUCTOR_FIRST_NAME: "Eduard Joseph Louie",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "San Pedro",
      INSTRUCTOR_FIRST_NAME: "Brent Myles R",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suico",
      INSTRUCTOR_FIRST_NAME: "Rex",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Kyla Mae",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Vince Lorenz",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Becira",
      INSTRUCTOR_FIRST_NAME: "Mae Dominique",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escora",
      INSTRUCTOR_FIRST_NAME: "Julia Adryanne Marie",
      COURSE_NAME: "ECE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aliño",
      INSTRUCTOR_FIRST_NAME: "Cathlien",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mosqueda",
      INSTRUCTOR_FIRST_NAME: "Elijah E",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madera",
      INSTRUCTOR_FIRST_NAME: "Jessa",
      COURSE_NAME: "Project Feasibility (Field)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Hannah Franchesca C",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Quiana G",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Endaya",
      INSTRUCTOR_FIRST_NAME: "Lance Archie",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Senyahan",
      INSTRUCTOR_FIRST_NAME: "Kyle Joshua C",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plasabas",
      INSTRUCTOR_FIRST_NAME: "Albert Edison B.",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chavez",
      INSTRUCTOR_FIRST_NAME: "Sean Elijah V",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sta. Ana",
      INSTRUCTOR_FIRST_NAME: "Vladimir Karl Jasper I",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Francia",
      INSTRUCTOR_FIRST_NAME: "Jayric Stephen C",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mustapha",
      INSTRUCTOR_FIRST_NAME: "Baiummayah",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juanico",
      INSTRUCTOR_FIRST_NAME: "Marvin John",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernando",
      INSTRUCTOR_FIRST_NAME: "Rey Jose D.",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Licera",
      INSTRUCTOR_FIRST_NAME: "Gonzalo Jhay A",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Digma",
      INSTRUCTOR_FIRST_NAME: "Gilianne Muriel A",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oberio",
      INSTRUCTOR_FIRST_NAME: "Riezen",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sukarno",
      INSTRUCTOR_FIRST_NAME: "Suraim Alwin",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avila",
      INSTRUCTOR_FIRST_NAME: "Mico Alejandro",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Nathan Vincent",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aba",
      INSTRUCTOR_FIRST_NAME: "Darylle Alireza",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paradero",
      INSTRUCTOR_FIRST_NAME: "Ronnelle M",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estorninos",
      INSTRUCTOR_FIRST_NAME: "Isabella",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Raga",
      INSTRUCTOR_FIRST_NAME: "Laura Andrea Y",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jailo",
      INSTRUCTOR_FIRST_NAME: "Gavin",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Polines",
      INSTRUCTOR_FIRST_NAME: "Frances Angela",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Real",
      INSTRUCTOR_FIRST_NAME: "Paolo O",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deveza",
      INSTRUCTOR_FIRST_NAME: "Melissa Lois",
      COURSE_NAME: "Geotechnical Engineering: Soil MEchanics (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Purugganan",
      INSTRUCTOR_FIRST_NAME: "Mikaela Nicole Z.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samoranos",
      INSTRUCTOR_FIRST_NAME: "Elijah Joshua U.",
      COURSE_NAME: "Geology for Civil Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bentoy",
      INSTRUCTOR_FIRST_NAME: "Jeramy Rey",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Tara Francesca",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rocero",
      INSTRUCTOR_FIRST_NAME: "Rae Jeremiah",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Celajes",
      INSTRUCTOR_FIRST_NAME: "Vienne Ira",
      COURSE_NAME: "GENERAL ECOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabor",
      INSTRUCTOR_FIRST_NAME: "Annie Shannel R.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galor",
      INSTRUCTOR_FIRST_NAME: "Julian Simon",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manliguez",
      INSTRUCTOR_FIRST_NAME: "Andre John C.",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pawaon",
      INSTRUCTOR_FIRST_NAME: "Jaye Clyde C.",
      COURSE_NAME: "Construction Materials and Testing",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrea",
      INSTRUCTOR_FIRST_NAME: "Jhanamae",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obis",
      INSTRUCTOR_FIRST_NAME: "Jed Ezra",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asoy",
      INSTRUCTOR_FIRST_NAME: "Christopher John Rey",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pasaylo",
      INSTRUCTOR_FIRST_NAME: "Delfin Rey B",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paraon",
      INSTRUCTOR_FIRST_NAME: "Tresa Mae A",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monares",
      INSTRUCTOR_FIRST_NAME: "Christon John S",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antonio",
      INSTRUCTOR_FIRST_NAME: "Duke Jero F",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sevilla",
      INSTRUCTOR_FIRST_NAME: "Ninno Mellcello",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubi",
      INSTRUCTOR_FIRST_NAME: "Ma. Theresa Angela C",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abella",
      INSTRUCTOR_FIRST_NAME: "Samuel Jose R",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alpuerto",
      INSTRUCTOR_FIRST_NAME: "Winnonah Reyah B",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "Therese Rose",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "TEJANO",
      INSTRUCTOR_FIRST_NAME: "MARVIN JESSIE",
      COURSE_NAME: "Dynamics of Rigid Bodies - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Juan Carlos",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Danielle Maxine N",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morales",
      INSTRUCTOR_FIRST_NAME: "Rey Joshua",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palacios",
      INSTRUCTOR_FIRST_NAME: "Alyna Mae D",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelayo",
      INSTRUCTOR_FIRST_NAME: "Khublei Mo Satori G",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sincero",
      INSTRUCTOR_FIRST_NAME: "Altessa Emmanuelle O",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Terrenal",
      INSTRUCTOR_FIRST_NAME: "Louise Althea O",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gerodiaz",
      INSTRUCTOR_FIRST_NAME: "Rico Emmanuel A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alabastro",
      INSTRUCTOR_FIRST_NAME: "Kyle Chrystienne",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Geverola",
      INSTRUCTOR_FIRST_NAME: "Rosemarie Claire T.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suelto",
      INSTRUCTOR_FIRST_NAME: "Lorenz Brent",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bigcas",
      INSTRUCTOR_FIRST_NAME: "Danicah Mary D.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leoncito",
      INSTRUCTOR_FIRST_NAME: "Bea Abigail",
      COURSE_NAME: "Philippine Indigenous Communities - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Merced",
      INSTRUCTOR_FIRST_NAME: "Maxine Gwyneth B",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cresencio",
      INSTRUCTOR_FIRST_NAME: "Cleo",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martin",
      INSTRUCTOR_FIRST_NAME: "Fajail",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apale",
      INSTRUCTOR_FIRST_NAME: "Justin",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llanillo",
      INSTRUCTOR_FIRST_NAME: "Joaquin Alfonso",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lawan",
      INSTRUCTOR_FIRST_NAME: "Piper Shane",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doble",
      INSTRUCTOR_FIRST_NAME: "Shellee Carmela R",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "ULO",
      INSTRUCTOR_FIRST_NAME: "LOUISA ANGELICA",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guico",
      INSTRUCTOR_FIRST_NAME: "Renato P",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubin",
      INSTRUCTOR_FIRST_NAME: "Chad B",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asesor",
      INSTRUCTOR_FIRST_NAME: "Reah Mae",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Felongco",
      INSTRUCTOR_FIRST_NAME: "Vanessa Kristian",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lauron",
      INSTRUCTOR_FIRST_NAME: "Vaughn Drake",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Condez",
      INSTRUCTOR_FIRST_NAME: "Jake S",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Castro",
      INSTRUCTOR_FIRST_NAME: "John Carlo",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jalop",
      INSTRUCTOR_FIRST_NAME: "Paul Harriz",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuaton",
      INSTRUCTOR_FIRST_NAME: "Ysmael Daniel T",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramintas",
      INSTRUCTOR_FIRST_NAME: "Jence Kyle T",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandaragon",
      INSTRUCTOR_FIRST_NAME: "Abdul-aziz",
      COURSE_NAME: "ECE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Loreto",
      INSTRUCTOR_FIRST_NAME: "Jhan Marie C",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guiamad",
      INSTRUCTOR_FIRST_NAME: "Almuamar",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banguis",
      INSTRUCTOR_FIRST_NAME: "Jan Azriel",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimeno_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Froilan",
      COURSE_NAME: "Account Lockout Intervention",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malda",
      INSTRUCTOR_FIRST_NAME: "Aaron Jan Rafael",
      COURSE_NAME: "Account Lockout Intervention",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pajaron",
      INSTRUCTOR_FIRST_NAME: "Cyndi Lu",
      COURSE_NAME: "Account Lockout Intervention",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alilaya",
      INSTRUCTOR_FIRST_NAME: "Omville",
      COURSE_NAME: "Account Lockout Intervention",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ebuen",
      INSTRUCTOR_FIRST_NAME: "Ebi J.",
      COURSE_NAME: "PSYCHOLOGICAL STATISTICS - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacito",
      INSTRUCTOR_FIRST_NAME: "Karl Justin",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Redoblado",
      INSTRUCTOR_FIRST_NAME: "Honny Queen S",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bajao",
      INSTRUCTOR_FIRST_NAME: "Clyde John",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magbanua",
      INSTRUCTOR_FIRST_NAME: "Kim Julius",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villacura",
      INSTRUCTOR_FIRST_NAME: "Rona Mae M",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Golosinda",
      INSTRUCTOR_FIRST_NAME: "Kenneth Von",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enriquez",
      INSTRUCTOR_FIRST_NAME: "Priscilla Anne",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perodez",
      INSTRUCTOR_FIRST_NAME: "Maria Sushmita P",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabahug",
      INSTRUCTOR_FIRST_NAME: "Benjamin Simon Pio",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nasa",
      INSTRUCTOR_FIRST_NAME: "Jamaica",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gentallan",
      INSTRUCTOR_FIRST_NAME: "Iannah Mae",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cartajenas",
      INSTRUCTOR_FIRST_NAME: "Rona Cyla",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cagas",
      INSTRUCTOR_FIRST_NAME: "Ana Cleo",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Curato",
      INSTRUCTOR_FIRST_NAME: "Kyla Olive",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olfato",
      INSTRUCTOR_FIRST_NAME: "Kenneth Michael P",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estiva",
      INSTRUCTOR_FIRST_NAME: "John Lloyd",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Belga",
      INSTRUCTOR_FIRST_NAME: "Allen Dexter D",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eguia",
      INSTRUCTOR_FIRST_NAME: "Joven Gabrielle",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leynes",
      INSTRUCTOR_FIRST_NAME: "Francis Evan",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sy",
      INSTRUCTOR_FIRST_NAME: "Marjomillen Reave N",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yamas",
      INSTRUCTOR_FIRST_NAME: "Jon Alessandra A",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Natad",
      INSTRUCTOR_FIRST_NAME: "Nikka Annia R",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañete",
      INSTRUCTOR_FIRST_NAME: "Macario Ii T",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Operario",
      INSTRUCTOR_FIRST_NAME: "Marcu Pelayo L",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soledad",
      INSTRUCTOR_FIRST_NAME: "John Marco",
      COURSE_NAME: "SURVEY UPDATE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nisnea",
      INSTRUCTOR_FIRST_NAME: "Ruby Ann Marie",
      COURSE_NAME: "ANALYTICAL METHODS FOR BIOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valencia",
      INSTRUCTOR_FIRST_NAME: "Rafayel A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "VEGA",
      INSTRUCTOR_FIRST_NAME: "FRANCES",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eloja",
      INSTRUCTOR_FIRST_NAME: "Marvin Paul D.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mascardo",
      INSTRUCTOR_FIRST_NAME: "Thomas Jaime A.",
      COURSE_NAME: "Engineering Calculus 1 - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arabe",
      INSTRUCTOR_FIRST_NAME: "Angel Rienna",
      COURSE_NAME: "Engineering Calculus 1 - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muñoz",
      INSTRUCTOR_FIRST_NAME: "Timothy Henry",
      COURSE_NAME: "Engineering Calculus 1 - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Naparan",
      INSTRUCTOR_FIRST_NAME: "Jan Aaron Vince",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tanchico",
      INSTRUCTOR_FIRST_NAME: "Tej Allaine",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castrodes",
      INSTRUCTOR_FIRST_NAME: "Vincent Carlo",
      COURSE_NAME: "Engineering Calculus 1 - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garte",
      INSTRUCTOR_FIRST_NAME: "Elijio Miguel L.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Matthew Szenel",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocampo",
      INSTRUCTOR_FIRST_NAME: "Jian Carlo",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juliano",
      INSTRUCTOR_FIRST_NAME: "Vladimier",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cervantes",
      INSTRUCTOR_FIRST_NAME: "Edrianne Angeli L.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pueblos",
      INSTRUCTOR_FIRST_NAME: "Jasmine I.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deles",
      INSTRUCTOR_FIRST_NAME: "Jess Angelo R.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Erese",
      INSTRUCTOR_FIRST_NAME: "Piolo Antonio",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laorden",
      INSTRUCTOR_FIRST_NAME: "John Russell",
      COURSE_NAME: "Engineering Calculus 1 - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tugay",
      INSTRUCTOR_FIRST_NAME: "Dara E.",
      COURSE_NAME: "Engineering Calculus 1 - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Joshua Gabriel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boholano",
      INSTRUCTOR_FIRST_NAME: "Carlos Renoe Joachim",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baclaan",
      INSTRUCTOR_FIRST_NAME: "Soraya Remel",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quijada",
      INSTRUCTOR_FIRST_NAME: "Harvey",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quintanilla",
      INSTRUCTOR_FIRST_NAME: "Ian Angelou T",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serrano",
      INSTRUCTOR_FIRST_NAME: "Simon Arziah O",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leynes",
      INSTRUCTOR_FIRST_NAME: "Christian Aaron D",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacillo",
      INSTRUCTOR_FIRST_NAME: "Rosch Mc Billy L",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castro",
      INSTRUCTOR_FIRST_NAME: "Jericho A",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabini",
      INSTRUCTOR_FIRST_NAME: "Michael Geiryl",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aclera",
      INSTRUCTOR_FIRST_NAME: "Maureen Grace O",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Silagan",
      INSTRUCTOR_FIRST_NAME: "Don Marc Edwin V",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kesid",
      INSTRUCTOR_FIRST_NAME: "Heshim",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sangeban",
      INSTRUCTOR_FIRST_NAME: "Graham Ali B",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borres",
      INSTRUCTOR_FIRST_NAME: "Resien Vince",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Nikki Angela S",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alentajan",
      INSTRUCTOR_FIRST_NAME: "Kahil Diego Bonifacio A",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jauod",
      INSTRUCTOR_FIRST_NAME: "Faith Niña",
      COURSE_NAME: "Logic Circuits and Switching Theory (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Gillian Isabelle F",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Joshua Andrei",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chang",
      INSTRUCTOR_FIRST_NAME: "Clint Chester",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manhilot",
      INSTRUCTOR_FIRST_NAME: "Juan Miguel",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enerio",
      INSTRUCTOR_FIRST_NAME: "Kevin D",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Ella Beatriz V",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agleron",
      INSTRUCTOR_FIRST_NAME: "Rina Nathalie",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paña",
      INSTRUCTOR_FIRST_NAME: "Geraldine May P",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avila",
      INSTRUCTOR_FIRST_NAME: "Al Dinh Reece",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sedayao",
      INSTRUCTOR_FIRST_NAME: "Jerrex Juls A",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chiongson",
      INSTRUCTOR_FIRST_NAME: "Charlize Angela L",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calubag",
      INSTRUCTOR_FIRST_NAME: "Hazel Ann A",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Velayo",
      INSTRUCTOR_FIRST_NAME: "Trizsa Mae R",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacarisas",
      INSTRUCTOR_FIRST_NAME: "Janna",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Czaryna B",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blanco",
      INSTRUCTOR_FIRST_NAME: "John Miguel M",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibrahim",
      INSTRUCTOR_FIRST_NAME: "Mohammad Rayyan",
      COURSE_NAME: "HyFlex Learning Workshop",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enoy",
      INSTRUCTOR_FIRST_NAME: "Sphynx Qwynzlyr",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magalona",
      INSTRUCTOR_FIRST_NAME: "Carl Angylo",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caberos",
      INSTRUCTOR_FIRST_NAME: "Charlie Kim",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Geroche",
      INSTRUCTOR_FIRST_NAME: "Nille Jealeen",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atienza",
      INSTRUCTOR_FIRST_NAME: "Bianca Louise",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Omila",
      INSTRUCTOR_FIRST_NAME: "Isiah Carl",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tancontian",
      INSTRUCTOR_FIRST_NAME: "Chad Romano B",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juanillo",
      INSTRUCTOR_FIRST_NAME: "Jan Jocef C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Kirk Keaton M",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Booc",
      INSTRUCTOR_FIRST_NAME: "Enrico B",
      COURSE_NAME: "Mathematics for Engineers (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maongco",
      INSTRUCTOR_FIRST_NAME: "Mohammad Hassan A",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangubat",
      INSTRUCTOR_FIRST_NAME: "Jamee Mariz L",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Imdani",
      INSTRUCTOR_FIRST_NAME: "Jazmyne",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangodas",
      INSTRUCTOR_FIRST_NAME: "Leamsi Gem",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leuenberger",
      INSTRUCTOR_FIRST_NAME: "Eduard Moritz",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elman",
      INSTRUCTOR_FIRST_NAME: "Christian Jomari",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kuit",
      INSTRUCTOR_FIRST_NAME: "Nebuchadnezzar S.",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Josiah Izaak",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Señor",
      INSTRUCTOR_FIRST_NAME: "Laurence C",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brillante",
      INSTRUCTOR_FIRST_NAME: "Franz Dominic",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Accad",
      INSTRUCTOR_FIRST_NAME: "Kyle Angelo",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escosora",
      INSTRUCTOR_FIRST_NAME: "Kevin Joshua G",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Felicilda",
      INSTRUCTOR_FIRST_NAME: "Christian Miles C",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diosay",
      INSTRUCTOR_FIRST_NAME: "John Mickhael",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalagan",
      INSTRUCTOR_FIRST_NAME: "Kayla Marri N.",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abdulbasit",
      INSTRUCTOR_FIRST_NAME: "Abduljalil",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ti",
      INSTRUCTOR_FIRST_NAME: "Jan Marc L",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trugillo",
      INSTRUCTOR_FIRST_NAME: "Jon Leo",
      COURSE_NAME: "Philippine Indigenous Communities - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Ray Gabriel",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Jose Emmanuel N",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallego",
      INSTRUCTOR_FIRST_NAME: "Daniel L",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Kobe Christian L",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palanggalan",
      INSTRUCTOR_FIRST_NAME: "Al-Noor Hassan S",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandes",
      INSTRUCTOR_FIRST_NAME: "Cristian Carl Assumption",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bioco",
      INSTRUCTOR_FIRST_NAME: "Kerby",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Remolisan",
      INSTRUCTOR_FIRST_NAME: "Kent John Philip B",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hernaez",
      INSTRUCTOR_FIRST_NAME: "Carlos Nicolas G",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "Andre Miguelle",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simborio",
      INSTRUCTOR_FIRST_NAME: "John Darwin P",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galera",
      INSTRUCTOR_FIRST_NAME: "Jam Claire",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vasquez",
      INSTRUCTOR_FIRST_NAME: "Yurica R",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bajo",
      INSTRUCTOR_FIRST_NAME: "Christian Justine",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wasada",
      INSTRUCTOR_FIRST_NAME: "Eri P",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Kier Francis R",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tarroza",
      INSTRUCTOR_FIRST_NAME: "Rosendo T.",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matalam",
      INSTRUCTOR_FIRST_NAME: "Victor Luigi",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarenas",
      INSTRUCTOR_FIRST_NAME: "Alexander Rey V",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hollite",
      INSTRUCTOR_FIRST_NAME: "Moises Mika Ayrton S",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sembrano",
      INSTRUCTOR_FIRST_NAME: "Katerina A",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te Eng Fo",
      INSTRUCTOR_FIRST_NAME: "Andrei Dominic",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estores",
      INSTRUCTOR_FIRST_NAME: "Don Raphael C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villamor",
      INSTRUCTOR_FIRST_NAME: "Elmie Feyne R",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paclibar",
      INSTRUCTOR_FIRST_NAME: "Lancelot P",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soledad",
      INSTRUCTOR_FIRST_NAME: "Edrienne Kaye C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arrojado",
      INSTRUCTOR_FIRST_NAME: "Jasper Buen",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palabrica",
      INSTRUCTOR_FIRST_NAME: "Kate Danielle",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabado",
      INSTRUCTOR_FIRST_NAME: "Julian John H",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olea",
      INSTRUCTOR_FIRST_NAME: "Kobe Caesar P",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinsuat",
      INSTRUCTOR_FIRST_NAME: "Datu Al Mahajid D",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moscoso",
      INSTRUCTOR_FIRST_NAME: "Jibril Luth",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibuyan",
      INSTRUCTOR_FIRST_NAME: "Louis Gabriel",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arceño",
      INSTRUCTOR_FIRST_NAME: "Hanz Christian Nix",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarabillo",
      INSTRUCTOR_FIRST_NAME: "Jamea James Marie M",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peña",
      INSTRUCTOR_FIRST_NAME: "Jana Alexa Marri M",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tuboro",
      INSTRUCTOR_FIRST_NAME: "Mayumi S",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montilla",
      INSTRUCTOR_FIRST_NAME: "Alyssa Kate",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cedeño",
      INSTRUCTOR_FIRST_NAME: "Marc Jeremy",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Heinzson John",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guinto",
      INSTRUCTOR_FIRST_NAME: "Ysanne",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sicat",
      INSTRUCTOR_FIRST_NAME: "Antoniette Erica",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabudol",
      INSTRUCTOR_FIRST_NAME: "Irish T",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Butongkay",
      INSTRUCTOR_FIRST_NAME: "Julhany",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gapasin",
      INSTRUCTOR_FIRST_NAME: "Victorianne Gracielle",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banzon",
      INSTRUCTOR_FIRST_NAME: "Carla Patricia",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tangan",
      INSTRUCTOR_FIRST_NAME: "Rob",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gilot",
      INSTRUCTOR_FIRST_NAME: "Kiana Alessandra",
      COURSE_NAME: "CPE Practice and Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Guzman",
      INSTRUCTOR_FIRST_NAME: "Jericho Jay P",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chavez",
      INSTRUCTOR_FIRST_NAME: "Eukie Auwen H",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Largo",
      INSTRUCTOR_FIRST_NAME: "Rey Mari Q",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samoranos",
      INSTRUCTOR_FIRST_NAME: "Boyen Zorel Q",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Qiu",
      INSTRUCTOR_FIRST_NAME: "Carl Anthony L",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Casis",
      INSTRUCTOR_FIRST_NAME: "Emmanuella Jester",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vargas",
      INSTRUCTOR_FIRST_NAME: "Takumi Danilo S",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Detuya",
      INSTRUCTOR_FIRST_NAME: "Glory Alexies Nicole A",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gaid",
      INSTRUCTOR_FIRST_NAME: "Warl Cate M",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manongas",
      INSTRUCTOR_FIRST_NAME: "Jenny Marie B",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yecyec",
      INSTRUCTOR_FIRST_NAME: "Leomer Allen V",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coronel",
      INSTRUCTOR_FIRST_NAME: "Klyde",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balolong",
      INSTRUCTOR_FIRST_NAME: "Lorelle Pauleen V",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bolo",
      INSTRUCTOR_FIRST_NAME: "Shari R",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oliva",
      INSTRUCTOR_FIRST_NAME: "Gian Josh",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabila",
      INSTRUCTOR_FIRST_NAME: "Francis Oriel E",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dorado",
      INSTRUCTOR_FIRST_NAME: "Ethan John T",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumpot",
      INSTRUCTOR_FIRST_NAME: "Justine",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gorospe",
      INSTRUCTOR_FIRST_NAME: "Karl Simon",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yokota",
      INSTRUCTOR_FIRST_NAME: "Ryuji J",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Andrei Christian",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Jasiel Micah M",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabijon",
      INSTRUCTOR_FIRST_NAME: "Fernando A",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumera",
      INSTRUCTOR_FIRST_NAME: "Kian Rayden",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nobleza",
      INSTRUCTOR_FIRST_NAME: "Jakob G",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jamlid",
      INSTRUCTOR_FIRST_NAME: "Rafael A",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuico",
      INSTRUCTOR_FIRST_NAME: "Lenefer",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Remolar",
      INSTRUCTOR_FIRST_NAME: "Dorothy S",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Geralde",
      INSTRUCTOR_FIRST_NAME: "Guia Desiree",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boja",
      INSTRUCTOR_FIRST_NAME: "Lorenz Miguel C",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayanan",
      INSTRUCTOR_FIRST_NAME: "Joanna Grace",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Luna",
      INSTRUCTOR_FIRST_NAME: "Ycer Vince",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buca",
      INSTRUCTOR_FIRST_NAME: "Athea Gene",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alibangbang",
      INSTRUCTOR_FIRST_NAME: "Japhet Ray",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sopoco",
      INSTRUCTOR_FIRST_NAME: "Armand Mateo P",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponong",
      INSTRUCTOR_FIRST_NAME: "Reign Hanilei",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Carlos Lorenzo",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villamor",
      INSTRUCTOR_FIRST_NAME: "Lean Patrick M",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joguilon",
      INSTRUCTOR_FIRST_NAME: "Elmer A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espiritu",
      INSTRUCTOR_FIRST_NAME: "Danna Krystel L",
      COURSE_NAME: "Artificial Intelligence in Games (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quinto",
      INSTRUCTOR_FIRST_NAME: "Taj Cedrick R",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Ranna Angela L",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Han",
      INSTRUCTOR_FIRST_NAME: "Geonhee",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carbajosa",
      INSTRUCTOR_FIRST_NAME: "Giulliano M",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangui-ob",
      INSTRUCTOR_FIRST_NAME: "Noel Zerdl",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sevilla",
      INSTRUCTOR_FIRST_NAME: "Joshua U",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Larida",
      INSTRUCTOR_FIRST_NAME: "Giancarlo",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "David",
      INSTRUCTOR_FIRST_NAME: "Harold Raynel",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Liston",
      INSTRUCTOR_FIRST_NAME: "Jorge Daniel",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Haruyama",
      INSTRUCTOR_FIRST_NAME: "Tadayuki",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mantalaba",
      INSTRUCTOR_FIRST_NAME: "Yuri M",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mantalaba",
      INSTRUCTOR_FIRST_NAME: "Brent M",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panogan",
      INSTRUCTOR_FIRST_NAME: "Gabriel Miguel L.",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nasser",
      INSTRUCTOR_FIRST_NAME: "Baron",
      COURSE_NAME: "Mathematics for Engineers (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabie",
      INSTRUCTOR_FIRST_NAME: "Dazel Grace",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Changmin",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagundino",
      INSTRUCTOR_FIRST_NAME: "Daniel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arellano",
      INSTRUCTOR_FIRST_NAME: "Justine Floyd Angelou",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabie",
      INSTRUCTOR_FIRST_NAME: "Steiner Angelo",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mahinay",
      INSTRUCTOR_FIRST_NAME: "Kate Christian Liro A",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mondala",
      INSTRUCTOR_FIRST_NAME: "Anjelo Kristian Louise",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cagampang",
      INSTRUCTOR_FIRST_NAME: "Maria Bernadette A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabato",
      INSTRUCTOR_FIRST_NAME: "Quennie Andrea R",
      COURSE_NAME: "Operating Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paras",
      INSTRUCTOR_FIRST_NAME: "Jubilee N",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Busico",
      INSTRUCTOR_FIRST_NAME: "Bien Don",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Yna Corazon B",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villarosa",
      INSTRUCTOR_FIRST_NAME: "Joneb",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esperon",
      INSTRUCTOR_FIRST_NAME: "Altrio E",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sia",
      INSTRUCTOR_FIRST_NAME: "Enrico Sebastian F",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapat",
      INSTRUCTOR_FIRST_NAME: "Christ John A.",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plariza",
      INSTRUCTOR_FIRST_NAME: "Kristine Ellah Margaret L",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zogg",
      INSTRUCTOR_FIRST_NAME: "Ethan James O",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarmiento",
      INSTRUCTOR_FIRST_NAME: "June Carl D",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cambal",
      INSTRUCTOR_FIRST_NAME: "Arne Darylle",
      COURSE_NAME: "Modulation and Coding Techniques Laboratory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangalos",
      INSTRUCTOR_FIRST_NAME: "Luke Ixl",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Selga",
      INSTRUCTOR_FIRST_NAME: "Maiquel Jawn T",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oman II",
      INSTRUCTOR_FIRST_NAME: "Richard",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arrieta",
      INSTRUCTOR_FIRST_NAME: "Ruth Christianne",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benedicto",
      INSTRUCTOR_FIRST_NAME: "Ashley Duane B",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adonis",
      INSTRUCTOR_FIRST_NAME: "Julianne Moira B",
      COURSE_NAME: "2D ANIMATION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agulan",
      INSTRUCTOR_FIRST_NAME: "Faith Lalaine R",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sultan",
      INSTRUCTOR_FIRST_NAME: "Denise Margareth B",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rastrullo",
      INSTRUCTOR_FIRST_NAME: "Jubella Dhee G",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Prado",
      INSTRUCTOR_FIRST_NAME: "Kristian Kyle O.",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Posadas",
      INSTRUCTOR_FIRST_NAME: "Crispin A",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bulisig",
      INSTRUCTOR_FIRST_NAME: "Bryxter Shem",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cunanan",
      INSTRUCTOR_FIRST_NAME: "Ma. Kenshein Andrea",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Roca",
      INSTRUCTOR_FIRST_NAME: "Erliben Zowe",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Penoliar",
      INSTRUCTOR_FIRST_NAME: "Kate Issabel D.",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jocson",
      INSTRUCTOR_FIRST_NAME: "John Jacob A",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Ericka Faith B",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponce",
      INSTRUCTOR_FIRST_NAME: "Mikhaela",
      COURSE_NAME: "System Analysis and Design (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Rama",
      INSTRUCTOR_FIRST_NAME: "Angelica Edriesel V",
      COURSE_NAME: "EE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Curato",
      INSTRUCTOR_FIRST_NAME: "John Norman G",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asas",
      INSTRUCTOR_FIRST_NAME: "Diane Tracy Angel",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solis",
      INSTRUCTOR_FIRST_NAME: "Alyannah Martine T",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albino",
      INSTRUCTOR_FIRST_NAME: "Danielle Mikaela",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maddara",
      INSTRUCTOR_FIRST_NAME: "Marlon",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quinto",
      INSTRUCTOR_FIRST_NAME: "Raymarj A",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pasia",
      INSTRUCTOR_FIRST_NAME: "Christian Angelo P",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumajel",
      INSTRUCTOR_FIRST_NAME: "Ken David R",
      COURSE_NAME: "Operating Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nanual",
      INSTRUCTOR_FIRST_NAME: "Audrey Carmel Jay",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bago-od",
      INSTRUCTOR_FIRST_NAME: "John Mark Anthony",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sacil",
      INSTRUCTOR_FIRST_NAME: "Eliazar I",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ebita",
      INSTRUCTOR_FIRST_NAME: "Alfre Czar",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borromeo",
      INSTRUCTOR_FIRST_NAME: "Allen Carlo B",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Danielle Murzik Alexanne M",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Threezia Angelica Z",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alimento",
      INSTRUCTOR_FIRST_NAME: "Aya Mariequit A",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabahug",
      INSTRUCTOR_FIRST_NAME: "Adrian Mari",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morales",
      INSTRUCTOR_FIRST_NAME: "Mikael",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gatmaitan",
      INSTRUCTOR_FIRST_NAME: "Alyssa Renee Tk",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Shariffa Fatima S",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuliga",
      INSTRUCTOR_FIRST_NAME: "Anthony Bernard L",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ancheta",
      INSTRUCTOR_FIRST_NAME: "James Paolo",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lauren",
      INSTRUCTOR_FIRST_NAME: "Angel Nathalie",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obsuna",
      INSTRUCTOR_FIRST_NAME: "Neowel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tado",
      INSTRUCTOR_FIRST_NAME: "Al Xavier T",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balfermoso",
      INSTRUCTOR_FIRST_NAME: "Vince Harrison",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ongchangco",
      INSTRUCTOR_FIRST_NAME: "Isabella Bianca V",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dadia",
      INSTRUCTOR_FIRST_NAME: "Abdul Rauf O",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buyser",
      INSTRUCTOR_FIRST_NAME: "Chaile Dawn",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joquiño",
      INSTRUCTOR_FIRST_NAME: "Nicholas Andrew P",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andolana",
      INSTRUCTOR_FIRST_NAME: "Grenuary P",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabucan",
      INSTRUCTOR_FIRST_NAME: "Harley David B",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dy",
      INSTRUCTOR_FIRST_NAME: "Ahlea Trisha",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ogoc",
      INSTRUCTOR_FIRST_NAME: "Elinil Ivcen D",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baker",
      INSTRUCTOR_FIRST_NAME: "Liam Patrick",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Hailey Alison Z",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labrador",
      INSTRUCTOR_FIRST_NAME: "Uno Jose",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maquidato",
      INSTRUCTOR_FIRST_NAME: "Sheena Marie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panaligan",
      INSTRUCTOR_FIRST_NAME: "Joereel Steve L",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caparas",
      INSTRUCTOR_FIRST_NAME: "Paul Gabriel G",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Castro",
      INSTRUCTOR_FIRST_NAME: "Allan Pete Loreall",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagohoy",
      INSTRUCTOR_FIRST_NAME: "Joseph",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asombrado",
      INSTRUCTOR_FIRST_NAME: "Kervi Kent C",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eltagonde",
      INSTRUCTOR_FIRST_NAME: "Mariah Alyssa P.",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagahit",
      INSTRUCTOR_FIRST_NAME: "Camille E",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañete",
      INSTRUCTOR_FIRST_NAME: "Lyka Gleigh",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Butulan",
      INSTRUCTOR_FIRST_NAME: "Andrei Quin",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mataranas",
      INSTRUCTOR_FIRST_NAME: "Athlea Kyle B",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Razonable",
      INSTRUCTOR_FIRST_NAME: "Aalyssa Lianne A",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chan",
      INSTRUCTOR_FIRST_NAME: "Jaye Martin",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jo",
      INSTRUCTOR_FIRST_NAME: "Jangyun",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Suwon",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guerrero",
      INSTRUCTOR_FIRST_NAME: "Stephanny Marie Jean",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paguntalan",
      INSTRUCTOR_FIRST_NAME: "Xandrix Jill",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Porras",
      INSTRUCTOR_FIRST_NAME: "Arturo U",
      COURSE_NAME: "Global Culture & Tourism Geography",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aleria",
      INSTRUCTOR_FIRST_NAME: "Trisha Jeanna",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Commandante",
      INSTRUCTOR_FIRST_NAME: "Jyle P",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Francesca Morrei",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Marchell Kriza",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abad",
      INSTRUCTOR_FIRST_NAME: "Ardiwednes",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morales",
      INSTRUCTOR_FIRST_NAME: "John Alexie Melchor",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avila",
      INSTRUCTOR_FIRST_NAME: "Marline Danielle",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Iwamoto",
      INSTRUCTOR_FIRST_NAME: "Nehei Ian",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tongol",
      INSTRUCTOR_FIRST_NAME: "Ivan Jacob L",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sulaiman",
      INSTRUCTOR_FIRST_NAME: "Ershad Azeer S",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Shekinah Margaret",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gacer",
      INSTRUCTOR_FIRST_NAME: "Jan Alexis S",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miralles",
      INSTRUCTOR_FIRST_NAME: "Olivia Felicity",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olan-olan",
      INSTRUCTOR_FIRST_NAME: "Kyrine Mae",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Druz Ali",
      INSTRUCTOR_FIRST_NAME: "Bai Haritz U",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdivia",
      INSTRUCTOR_FIRST_NAME: "Angelica Jullie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Basmayor",
      INSTRUCTOR_FIRST_NAME: "Alan Angelo",
      COURSE_NAME: "Chemistry for Engineers - A191",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laput",
      INSTRUCTOR_FIRST_NAME: "Harold C",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barber",
      INSTRUCTOR_FIRST_NAME: "Wendz Reynold F",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "San Juan",
      INSTRUCTOR_FIRST_NAME: "John Kyle C",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Graza",
      INSTRUCTOR_FIRST_NAME: "Coleen Angelique V",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramon",
      INSTRUCTOR_FIRST_NAME: "Justine Jacob",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valencia",
      INSTRUCTOR_FIRST_NAME: "Miguel Santino S",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Camacho",
      INSTRUCTOR_FIRST_NAME: "Miguel Niño",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Adrien Nixon",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simbulan",
      INSTRUCTOR_FIRST_NAME: "Jose Henrico",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Leon",
      INSTRUCTOR_FIRST_NAME: "Jose Benigno",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trimor",
      INSTRUCTOR_FIRST_NAME: "Joeneil G",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arboleda",
      INSTRUCTOR_FIRST_NAME: "Gideon Psalm",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vequizo",
      INSTRUCTOR_FIRST_NAME: "Jeffroster",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocite",
      INSTRUCTOR_FIRST_NAME: "Kennedy Cloi",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dupay",
      INSTRUCTOR_FIRST_NAME: "Dave Christian",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dungan",
      INSTRUCTOR_FIRST_NAME: "Al Rayesh",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bisnar",
      INSTRUCTOR_FIRST_NAME: "Jermaine Dave",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salas",
      INSTRUCTOR_FIRST_NAME: "Matt Hugh Albert",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galera",
      INSTRUCTOR_FIRST_NAME: "Jan Cloyd",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacsal",
      INSTRUCTOR_FIRST_NAME: "Uean Carlo",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Billones",
      INSTRUCTOR_FIRST_NAME: "Edselle Genine",
      COURSE_NAME: "Electronics Circuits Analysis and Design (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumlao",
      INSTRUCTOR_FIRST_NAME: "Lianne Angel",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jao",
      INSTRUCTOR_FIRST_NAME: "Ivan Karl",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Refuerzo",
      INSTRUCTOR_FIRST_NAME: "Abigail Ruth G",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zosa",
      INSTRUCTOR_FIRST_NAME: "Andrea Camille",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vergara",
      INSTRUCTOR_FIRST_NAME: "Rae Beatrice",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores II",
      INSTRUCTOR_FIRST_NAME: "Eugene",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabian",
      INSTRUCTOR_FIRST_NAME: "Perry Louie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magallanes",
      INSTRUCTOR_FIRST_NAME: "Paolo Maxine",
      COURSE_NAME: "The Life and Works of Jose Rizal (Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gemida",
      INSTRUCTOR_FIRST_NAME: "Athena Jane",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "David",
      INSTRUCTOR_FIRST_NAME: "Alexandra",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parnada",
      INSTRUCTOR_FIRST_NAME: "Tish Avereth",
      COURSE_NAME: "Good Governance and Social Responsibility",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deangkinay",
      INSTRUCTOR_FIRST_NAME: "Ethan Joaquin",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escobal",
      INSTRUCTOR_FIRST_NAME: "Mark Jill",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Managbanag",
      INSTRUCTOR_FIRST_NAME: "Anna Jane",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tee",
      INSTRUCTOR_FIRST_NAME: "Ilesha Gabriel",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saladero",
      INSTRUCTOR_FIRST_NAME: "Krisha",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Reyes",
      INSTRUCTOR_FIRST_NAME: "Thea Patriz",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Liguan",
      INSTRUCTOR_FIRST_NAME: "Erick Jay",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dante",
      INSTRUCTOR_FIRST_NAME: "Andrian Jay",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortega",
      INSTRUCTOR_FIRST_NAME: "Athina Danielle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Raga",
      INSTRUCTOR_FIRST_NAME: "Raphaella Angela",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asentista",
      INSTRUCTOR_FIRST_NAME: "Jhon Alfred",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabro",
      INSTRUCTOR_FIRST_NAME: "Sheila Mae",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Camaganacan",
      INSTRUCTOR_FIRST_NAME: "Joseph Eugene",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardo",
      INSTRUCTOR_FIRST_NAME: "Antonio Miguel",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cariño",
      INSTRUCTOR_FIRST_NAME: "Fergei Anne",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tumulak",
      INSTRUCTOR_FIRST_NAME: "Juvylane",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Briola",
      INSTRUCTOR_FIRST_NAME: "Francis Gabriel",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacaldo",
      INSTRUCTOR_FIRST_NAME: "Marc Lester",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maala",
      INSTRUCTOR_FIRST_NAME: "Leif Robert",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cago",
      INSTRUCTOR_FIRST_NAME: "Mary Angela",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pogay",
      INSTRUCTOR_FIRST_NAME: "Neil Carlo",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacsarpa",
      INSTRUCTOR_FIRST_NAME: "Xena Jenn",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayuday",
      INSTRUCTOR_FIRST_NAME: "Daryl Yvonne",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Vera Nicole",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balagtas",
      INSTRUCTOR_FIRST_NAME: "Denzel",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mahinay",
      INSTRUCTOR_FIRST_NAME: "Loraine",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daro",
      INSTRUCTOR_FIRST_NAME: "Carl Janus",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jusain",
      INSTRUCTOR_FIRST_NAME: "Rianne Marie",
      COURSE_NAME: "IE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pirote",
      INSTRUCTOR_FIRST_NAME: "Wenston",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fornan",
      INSTRUCTOR_FIRST_NAME: "Garscyle",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Timbal",
      INSTRUCTOR_FIRST_NAME: "Kent Benedict",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buagas",
      INSTRUCTOR_FIRST_NAME: "Carlo",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balante",
      INSTRUCTOR_FIRST_NAME: "Jeremiah Vonn E",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Belaniso",
      INSTRUCTOR_FIRST_NAME: "Lea Isabel",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lomantas",
      INSTRUCTOR_FIRST_NAME: "Jarese Ericah",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lomantas",
      INSTRUCTOR_FIRST_NAME: "Jarese Micah",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labasano",
      INSTRUCTOR_FIRST_NAME: "Mel Alfonzo",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salon",
      INSTRUCTOR_FIRST_NAME: "Tyron James",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delima",
      INSTRUCTOR_FIRST_NAME: "Mary Anthonette",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arciaga",
      INSTRUCTOR_FIRST_NAME: "Marthom Alfonso",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mejias",
      INSTRUCTOR_FIRST_NAME: "Ma. Angela",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estardo",
      INSTRUCTOR_FIRST_NAME: "Jerrik Michael",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marchan",
      INSTRUCTOR_FIRST_NAME: "John Dave",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kierulf",
      INSTRUCTOR_FIRST_NAME: "Donver Andrew M",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bangcasan",
      INSTRUCTOR_FIRST_NAME: "Gianne Angel",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bose",
      INSTRUCTOR_FIRST_NAME: "Yestin",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Verdida",
      INSTRUCTOR_FIRST_NAME: "Adrianne",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cosare",
      INSTRUCTOR_FIRST_NAME: "Benz Simon",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caballero",
      INSTRUCTOR_FIRST_NAME: "Andrea Nicole",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valenzuela",
      INSTRUCTOR_FIRST_NAME: "Thea Amor",
      COURSE_NAME: "CCNA Routing and Switching 1(Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benigno",
      INSTRUCTOR_FIRST_NAME: "Angel Amor",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mesia",
      INSTRUCTOR_FIRST_NAME: "John Joshua",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moreno",
      INSTRUCTOR_FIRST_NAME: "Rendell James",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borrega",
      INSTRUCTOR_FIRST_NAME: "Carl Lowell",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangle",
      INSTRUCTOR_FIRST_NAME: "Reanne Lea D",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Socias",
      INSTRUCTOR_FIRST_NAME: "Remzel Leobert",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olo",
      INSTRUCTOR_FIRST_NAME: "Human Walter",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aglubo",
      INSTRUCTOR_FIRST_NAME: "Izzieh Jyll",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabroquez",
      INSTRUCTOR_FIRST_NAME: "Benz Bernadine",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangin",
      INSTRUCTOR_FIRST_NAME: "Johne Carlo",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lago",
      INSTRUCTOR_FIRST_NAME: "Kayela  Nicole",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alison",
      INSTRUCTOR_FIRST_NAME: "Bill John",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Seballa",
      INSTRUCTOR_FIRST_NAME: "Kien James",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macalam",
      INSTRUCTOR_FIRST_NAME: "Keren Gabrielle",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdevieso",
      INSTRUCTOR_FIRST_NAME: "Erika",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lua",
      INSTRUCTOR_FIRST_NAME: "Irvin",
      COURSE_NAME: "The Life and Works of Jose Rizal (Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clomera",
      INSTRUCTOR_FIRST_NAME: "Anika Marielle",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dataya",
      INSTRUCTOR_FIRST_NAME: "Omar Kyle",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Derrayal",
      INSTRUCTOR_FIRST_NAME: "Roy Anthony",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Angelo Gabriel",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Mikko Jed",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deniega",
      INSTRUCTOR_FIRST_NAME: "Angelique Yvette",
      COURSE_NAME: "Electronics Circuits Analysis and Design (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elizalde",
      INSTRUCTOR_FIRST_NAME: "Ysabel Leeann Jhudiel",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tanduyan",
      INSTRUCTOR_FIRST_NAME: "Krisha Nicole",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dawa",
      INSTRUCTOR_FIRST_NAME: "Nickolle Angelo",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Mark Adrian",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bajao",
      INSTRUCTOR_FIRST_NAME: "Quisha",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tolang",
      INSTRUCTOR_FIRST_NAME: "Gercylane H",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caballero",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pepino",
      INSTRUCTOR_FIRST_NAME: "Manuel Rey Andrew",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Kian Brian M",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agudo",
      INSTRUCTOR_FIRST_NAME: "Judy Ann",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sato",
      INSTRUCTOR_FIRST_NAME: "Romella Angel",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calipes",
      INSTRUCTOR_FIRST_NAME: "Shaira Elaine C",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estela",
      INSTRUCTOR_FIRST_NAME: "Gabriel",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bagohin",
      INSTRUCTOR_FIRST_NAME: "Gian Karlo",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Camaganacan",
      INSTRUCTOR_FIRST_NAME: "James Raye",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Namocatcat",
      INSTRUCTOR_FIRST_NAME: "Chris John",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buhian",
      INSTRUCTOR_FIRST_NAME: "Jay Mark",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabudlong",
      INSTRUCTOR_FIRST_NAME: "Anna Loren",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Requillo",
      INSTRUCTOR_FIRST_NAME: "Desiree Ann",
      COURSE_NAME: "Art and Design Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jocson",
      INSTRUCTOR_FIRST_NAME: "Kate",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saga",
      INSTRUCTOR_FIRST_NAME: "Charl Riobert",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Javellana",
      INSTRUCTOR_FIRST_NAME: "Jace Conrad",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oani",
      INSTRUCTOR_FIRST_NAME: "Jhoanne",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manalastas",
      INSTRUCTOR_FIRST_NAME: "Dylan Judd",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tolda",
      INSTRUCTOR_FIRST_NAME: "Fe",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lastra",
      INSTRUCTOR_FIRST_NAME: "Patrick Jan",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jaroda",
      INSTRUCTOR_FIRST_NAME: "Dianne Gretch",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kobayashi",
      INSTRUCTOR_FIRST_NAME: "Princess",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cero",
      INSTRUCTOR_FIRST_NAME: "Inna Vincenza",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antiga",
      INSTRUCTOR_FIRST_NAME: "Danielle Mary Louise",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Abraham Selwyn",
      COURSE_NAME: "Mathematics for Engineers (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palatulan",
      INSTRUCTOR_FIRST_NAME: "Gabriela Marie",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Am-is",
      INSTRUCTOR_FIRST_NAME: "Hannah",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adenir",
      INSTRUCTOR_FIRST_NAME: "Vince John",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calulut",
      INSTRUCTOR_FIRST_NAME: "Ma. Richelle",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bulotano",
      INSTRUCTOR_FIRST_NAME: "Clark Adrian",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aclon",
      INSTRUCTOR_FIRST_NAME: "Lyka Dion",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Conahap",
      INSTRUCTOR_FIRST_NAME: "Neyl-Kyle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Constantino",
      INSTRUCTOR_FIRST_NAME: "Ethan Reeve",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maruyama",
      INSTRUCTOR_FIRST_NAME: "Kagie Angelo",
      COURSE_NAME: "Good Governance and Social Responsibility",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dejadena",
      INSTRUCTOR_FIRST_NAME: "Max Kenji",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bagnol",
      INSTRUCTOR_FIRST_NAME: "Dorothy Lorraine",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barrientos",
      INSTRUCTOR_FIRST_NAME: "Jean Radclyffe",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cawayan",
      INSTRUCTOR_FIRST_NAME: "Djesle Dann A",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trasmil",
      INSTRUCTOR_FIRST_NAME: "Cj",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Datugan",
      INSTRUCTOR_FIRST_NAME: "Kemuel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Urquiza",
      INSTRUCTOR_FIRST_NAME: "Vonn Andrei",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saavedra",
      INSTRUCTOR_FIRST_NAME: "Ralph Jovan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Denaque",
      INSTRUCTOR_FIRST_NAME: "Jefferson Neil",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Julaine",
      INSTRUCTOR_FIRST_NAME: "Zhyra Kiez'l Kaye",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Majaducon",
      INSTRUCTOR_FIRST_NAME: "Christine Sol",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daro",
      INSTRUCTOR_FIRST_NAME: "Faith Ira",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quindoza",
      INSTRUCTOR_FIRST_NAME: "Charlene",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardo",
      INSTRUCTOR_FIRST_NAME: "Adrian",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabuno",
      INSTRUCTOR_FIRST_NAME: "Jeshcee Jay",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palban",
      INSTRUCTOR_FIRST_NAME: "Joshua D",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blardony",
      INSTRUCTOR_FIRST_NAME: "Mikaela Beatrice",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cayaban",
      INSTRUCTOR_FIRST_NAME: "Nicole",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borre",
      INSTRUCTOR_FIRST_NAME: "Caesar Chuck",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maturan",
      INSTRUCTOR_FIRST_NAME: "Ernest Saul",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Butad",
      INSTRUCTOR_FIRST_NAME: "Chesca Vyonce R",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juson",
      INSTRUCTOR_FIRST_NAME: "Joshua Dale",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navidad",
      INSTRUCTOR_FIRST_NAME: "Jose Abelardo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pond",
      INSTRUCTOR_FIRST_NAME: "Trisha Lynn",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escoses",
      INSTRUCTOR_FIRST_NAME: "Rafaiel Marco",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hagoriles",
      INSTRUCTOR_FIRST_NAME: "Prince Lleyton",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gavasan",
      INSTRUCTOR_FIRST_NAME: "Paul Angelo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Felicitas",
      INSTRUCTOR_FIRST_NAME: "Elan Gabriel",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcesa",
      INSTRUCTOR_FIRST_NAME: "Altair John",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Yannick Mathieu",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Julia Maureen",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uganap",
      INSTRUCTOR_FIRST_NAME: "Fredrick Vincent",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alagad",
      INSTRUCTOR_FIRST_NAME: "Charie Franzine",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrer Iv",
      INSTRUCTOR_FIRST_NAME: "Emmanuel Lorenzo",
      COURSE_NAME: "IE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eleazar",
      INSTRUCTOR_FIRST_NAME: "Ryuz",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puebla",
      INSTRUCTOR_FIRST_NAME: "John Francis",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morta",
      INSTRUCTOR_FIRST_NAME: "Elijah",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morta",
      INSTRUCTOR_FIRST_NAME: "Jacob",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salinas",
      INSTRUCTOR_FIRST_NAME: "Mark Dominic",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Maria Ricaela Dhy",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caalim",
      INSTRUCTOR_FIRST_NAME: "Loryll Jay",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juen",
      INSTRUCTOR_FIRST_NAME: "Christian Robert",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sagaray",
      INSTRUCTOR_FIRST_NAME: "Jhor Cyrth",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Besinga",
      INSTRUCTOR_FIRST_NAME: "Matt Jayson",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dipus",
      INSTRUCTOR_FIRST_NAME: "Carlo",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiñones",
      INSTRUCTOR_FIRST_NAME: "Kurt Roland",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yunsay",
      INSTRUCTOR_FIRST_NAME: "Samuel Jan",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madulara",
      INSTRUCTOR_FIRST_NAME: "Judy Marie",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayap",
      INSTRUCTOR_FIRST_NAME: "Aldrofe Jann",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pineda",
      INSTRUCTOR_FIRST_NAME: "Salve Milagros Nicole",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aniban",
      INSTRUCTOR_FIRST_NAME: "Karlo Emmanuel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lancian",
      INSTRUCTOR_FIRST_NAME: "Ian Miguel",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Ellinor Tiffany",
      COURSE_NAME: "Philippine Indigenous Communities - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pamugas",
      INSTRUCTOR_FIRST_NAME: "Elijah Robe",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alvarez",
      INSTRUCTOR_FIRST_NAME: "Jane Kaye",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Van Daniel",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baquiano",
      INSTRUCTOR_FIRST_NAME: "Joshua Miguel",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luna",
      INSTRUCTOR_FIRST_NAME: "Anjoe Fritz",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quistadio",
      INSTRUCTOR_FIRST_NAME: "Reu Jacob",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adlawan",
      INSTRUCTOR_FIRST_NAME: "Jose Eulo",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matanog",
      INSTRUCTOR_FIRST_NAME: "Margelfe Ussein",
      COURSE_NAME: "Modulation and Coding Techniques Laboratory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villa-Abrille",
      INSTRUCTOR_FIRST_NAME: "Bryant Angelo",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gillo",
      INSTRUCTOR_FIRST_NAME: "Arvin Giles",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vento",
      INSTRUCTOR_FIRST_NAME: "Ezra James M.",
      COURSE_NAME: "Chemistry for Engineers - A191",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sadaya",
      INSTRUCTOR_FIRST_NAME: "Zyl",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcos",
      INSTRUCTOR_FIRST_NAME: "Joshua Martin",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aranjuez",
      INSTRUCTOR_FIRST_NAME: "Julliene Kate",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "John Gabriel",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gica",
      INSTRUCTOR_FIRST_NAME: "John Philip",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Babao",
      INSTRUCTOR_FIRST_NAME: "Brian Allen",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Binobo",
      INSTRUCTOR_FIRST_NAME: "Giovan",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sango",
      INSTRUCTOR_FIRST_NAME: "Jay Zandro",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rufila",
      INSTRUCTOR_FIRST_NAME: "Miguel Antonio T",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fujita",
      INSTRUCTOR_FIRST_NAME: "Voughnie Shinji",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orfrecio",
      INSTRUCTOR_FIRST_NAME: "Allysandra Martina E",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salise",
      INSTRUCTOR_FIRST_NAME: "Justin Phillippe",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tiu",
      INSTRUCTOR_FIRST_NAME: "Riki Karl R",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gerolaga",
      INSTRUCTOR_FIRST_NAME: "Deuler",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacalan",
      INSTRUCTOR_FIRST_NAME: "Joed Blair",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balais",
      INSTRUCTOR_FIRST_NAME: "Khane Torence",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lapitan",
      INSTRUCTOR_FIRST_NAME: "Enrico S",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magallano",
      INSTRUCTOR_FIRST_NAME: "Allyza Zyrene",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pangato",
      INSTRUCTOR_FIRST_NAME: "Shane Gerard",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mante",
      INSTRUCTOR_FIRST_NAME: "Liesa Jeian",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangacop",
      INSTRUCTOR_FIRST_NAME: "Aziad D",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Vince Clemen",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rebadavia",
      INSTRUCTOR_FIRST_NAME: "Chelsea Lynn",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estomata",
      INSTRUCTOR_FIRST_NAME: "Vincent Roy",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Vinz Apollo",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bayer",
      INSTRUCTOR_FIRST_NAME: "Iola Rina",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diez",
      INSTRUCTOR_FIRST_NAME: "Lauren Alexis",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kian",
      INSTRUCTOR_FIRST_NAME: "Johanna Mei",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cagape",
      INSTRUCTOR_FIRST_NAME: "Dave Lester",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "O'Dell",
      INSTRUCTOR_FIRST_NAME: "Glengary Gabriel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fundar",
      INSTRUCTOR_FIRST_NAME: "Rod Gilrey",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Formon",
      INSTRUCTOR_FIRST_NAME: "Joe Sannie",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solidanio",
      INSTRUCTOR_FIRST_NAME: "Chertsey",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tampus",
      INSTRUCTOR_FIRST_NAME: "Jayson",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cero",
      INSTRUCTOR_FIRST_NAME: "Tomas Emil Alessio",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guriding",
      INSTRUCTOR_FIRST_NAME: "David Klien",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mohammad",
      INSTRUCTOR_FIRST_NAME: "Datu Abuzar Mussadeqh",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zamora",
      INSTRUCTOR_FIRST_NAME: "Christian Carl E",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juan II",
      INSTRUCTOR_FIRST_NAME: "Tj",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laurente",
      INSTRUCTOR_FIRST_NAME: "Kirstienne Law",
      COURSE_NAME: "PSYCHOLOGICAL STATISTICS LABORATORY - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salison",
      INSTRUCTOR_FIRST_NAME: "Rolando B",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ditanongun",
      INSTRUCTOR_FIRST_NAME: "Carmina Nicole Jan",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagoling",
      INSTRUCTOR_FIRST_NAME: "Elaide Mei B",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Joss Miguel L",
      COURSE_NAME: "EE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amaga",
      INSTRUCTOR_FIRST_NAME: "Althea Therese",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carongay",
      INSTRUCTOR_FIRST_NAME: "Lainniel Jessica",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Liu",
      INSTRUCTOR_FIRST_NAME: "John Anthony",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalangin",
      INSTRUCTOR_FIRST_NAME: "Raphael Loren",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inocente",
      INSTRUCTOR_FIRST_NAME: "Jan Miguel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Aeron Kein",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wahing",
      INSTRUCTOR_FIRST_NAME: "Jessie Jave",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Teves",
      INSTRUCTOR_FIRST_NAME: "Paolo",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enerio",
      INSTRUCTOR_FIRST_NAME: "John Kenneth",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moscoso",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bajao",
      INSTRUCTOR_FIRST_NAME: "Eduard Brian",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sangadi",
      INSTRUCTOR_FIRST_NAME: "Christian Joseph",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Centino",
      INSTRUCTOR_FIRST_NAME: "Ralph Jason",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alquiroz",
      INSTRUCTOR_FIRST_NAME: "Rio Roy",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Verzosa",
      INSTRUCTOR_FIRST_NAME: "Martina Ysabel",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dataya",
      INSTRUCTOR_FIRST_NAME: "Sittie Sariffa",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enero",
      INSTRUCTOR_FIRST_NAME: "Juan Paolo",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mariquit",
      INSTRUCTOR_FIRST_NAME: "Royce",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "Jim",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clarete",
      INSTRUCTOR_FIRST_NAME: "Michelle Joy",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alave",
      INSTRUCTOR_FIRST_NAME: "Bea Sybille",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Co",
      INSTRUCTOR_FIRST_NAME: "Lord Stephen",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lima",
      INSTRUCTOR_FIRST_NAME: "Alfred Anton",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nengasca",
      INSTRUCTOR_FIRST_NAME: "John Eriberto Benito",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galamgam",
      INSTRUCTOR_FIRST_NAME: "Vince Ryan",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coyoca",
      INSTRUCTOR_FIRST_NAME: "Tyrese Cleo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Artajo",
      INSTRUCTOR_FIRST_NAME: "Justine Carl",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Lourell Mark",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "Lance Jerard",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Curayag",
      INSTRUCTOR_FIRST_NAME: "Christopher Hans",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agbisit",
      INSTRUCTOR_FIRST_NAME: "Michael Kendrick",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malubay",
      INSTRUCTOR_FIRST_NAME: "John Lester",
      COURSE_NAME: "Audio Design and Sound Engineering (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cababat",
      INSTRUCTOR_FIRST_NAME: "Rezel Kyle",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lorenzo",
      INSTRUCTOR_FIRST_NAME: "Rudanne Grace",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lua",
      INSTRUCTOR_FIRST_NAME: "Ivan",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alvarado",
      INSTRUCTOR_FIRST_NAME: "Dennis Joseph",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nicolas",
      INSTRUCTOR_FIRST_NAME: "Paolo Miguel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maquilan",
      INSTRUCTOR_FIRST_NAME: "Zoe Fae",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castigador II",
      INSTRUCTOR_FIRST_NAME: "Rene Marlon",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañez",
      INSTRUCTOR_FIRST_NAME: "John Dave",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrazzini",
      INSTRUCTOR_FIRST_NAME: "Ricardo Angelo",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muñoz",
      INSTRUCTOR_FIRST_NAME: "Janriel Bruce",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ulat",
      INSTRUCTOR_FIRST_NAME: "Anna Mikaela C",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Josol",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Rex",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kilby",
      INSTRUCTOR_FIRST_NAME: "Paul Keanu",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacatan",
      INSTRUCTOR_FIRST_NAME: "Drean Marie Louise",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruales",
      INSTRUCTOR_FIRST_NAME: "Clint Jhan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruales",
      INSTRUCTOR_FIRST_NAME: "Ivan Angel",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Natividad",
      INSTRUCTOR_FIRST_NAME: "Evan Nathaniel",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Burgos",
      INSTRUCTOR_FIRST_NAME: "Rafael Andres",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dubouzet",
      INSTRUCTOR_FIRST_NAME: "Abigail Adrianne",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Bituing Marikit",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barbaso",
      INSTRUCTOR_FIRST_NAME: "Clark David",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atanosa",
      INSTRUCTOR_FIRST_NAME: "Trisha Xandra",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampatuan",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villaflor",
      INSTRUCTOR_FIRST_NAME: "Nathanael",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villaflor",
      INSTRUCTOR_FIRST_NAME: "Eunice",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cimafranca",
      INSTRUCTOR_FIRST_NAME: "Dustin Kevin",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabillo",
      INSTRUCTOR_FIRST_NAME: "Jeaune Alissa Nephtaly D",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oñas",
      INSTRUCTOR_FIRST_NAME: "Rianne Clair T.",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sasaki",
      INSTRUCTOR_FIRST_NAME: "Shinya A",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tirol",
      INSTRUCTOR_FIRST_NAME: "Nicole Tricia",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Secillano",
      INSTRUCTOR_FIRST_NAME: "Samuel Mari",
      COURSE_NAME: "IE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabanlit III",
      INSTRUCTOR_FIRST_NAME: "George",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Belen",
      INSTRUCTOR_FIRST_NAME: "Marco Lorenzo",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obach-Limbaring",
      INSTRUCTOR_FIRST_NAME: "Leynard Franco",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rimo",
      INSTRUCTOR_FIRST_NAME: "John Serg S",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saballa",
      INSTRUCTOR_FIRST_NAME: "Khyle Angelo G",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamac",
      INSTRUCTOR_FIRST_NAME: "Aloha Frietz",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oamil",
      INSTRUCTOR_FIRST_NAME: "Monica Kristel",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pulvera",
      INSTRUCTOR_FIRST_NAME: "Lee Lou Queen R",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magat",
      INSTRUCTOR_FIRST_NAME: "Fedrian Kyle",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagasohan",
      INSTRUCTOR_FIRST_NAME: "John Alfred",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mercado",
      INSTRUCTOR_FIRST_NAME: "Joshua Lance",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bastida",
      INSTRUCTOR_FIRST_NAME: "Reda Jachel",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquiatan",
      INSTRUCTOR_FIRST_NAME: "Froduard Andalle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamalo",
      INSTRUCTOR_FIRST_NAME: "Matthew Jericho",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gattoc",
      INSTRUCTOR_FIRST_NAME: "Mc Trex Rico",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nadong",
      INSTRUCTOR_FIRST_NAME: "Kaiel Erych",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Canales",
      INSTRUCTOR_FIRST_NAME: "Cj Raphaella",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumao-as",
      INSTRUCTOR_FIRST_NAME: "Jade Zina",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yator",
      INSTRUCTOR_FIRST_NAME: "Harold Hazekiah L",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rojas",
      INSTRUCTOR_FIRST_NAME: "Datu Jamalul Imran Vito Luis",
      COURSE_NAME: "Facilities Planning and Design Principles",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gatus",
      INSTRUCTOR_FIRST_NAME: "Khurtz Herbert",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Dea Monique",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alesna",
      INSTRUCTOR_FIRST_NAME: "Don Luigi",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luy",
      INSTRUCTOR_FIRST_NAME: "Jericho",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Jonah Belle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubio",
      INSTRUCTOR_FIRST_NAME: "Lanz Leinard",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jaurigue",
      INSTRUCTOR_FIRST_NAME: "Rechie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guigue",
      INSTRUCTOR_FIRST_NAME: "Shane",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bibaoco",
      INSTRUCTOR_FIRST_NAME: "Alvin",
      COURSE_NAME: "Project Feasibility (Field)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ditucalan",
      INSTRUCTOR_FIRST_NAME: "Fahmi",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quezon",
      INSTRUCTOR_FIRST_NAME: "Kristel Antonette B",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernal",
      INSTRUCTOR_FIRST_NAME: "Leonard Bryan",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vallecera",
      INSTRUCTOR_FIRST_NAME: "Izza",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Franada",
      INSTRUCTOR_FIRST_NAME: "Krystyna Marie",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leynes",
      INSTRUCTOR_FIRST_NAME: "Aulson John N",
      COURSE_NAME: "Good Governance and Social Responsibility",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abueva",
      INSTRUCTOR_FIRST_NAME: "Andre Nathaniel",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bigcas",
      INSTRUCTOR_FIRST_NAME: "Seth Laurence",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duy",
      INSTRUCTOR_FIRST_NAME: "Christian Jay",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bringuer",
      INSTRUCTOR_FIRST_NAME: "Neyanne Gail",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pinat",
      INSTRUCTOR_FIRST_NAME: "Rodprimson Christian C",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "John Kristian",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blanco",
      INSTRUCTOR_FIRST_NAME: "Augusto",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juan",
      INSTRUCTOR_FIRST_NAME: "Khian Orland",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barez",
      INSTRUCTOR_FIRST_NAME: "Patrick Lloyd",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Larisma",
      INSTRUCTOR_FIRST_NAME: "Jan Amiel",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jada-ong",
      INSTRUCTOR_FIRST_NAME: "Celso Luiz Sydrey",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Earl Justin G",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peñanueva",
      INSTRUCTOR_FIRST_NAME: "Kyla Shane B",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Eli Dominique",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andoy",
      INSTRUCTOR_FIRST_NAME: "Giselle",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Francia",
      INSTRUCTOR_FIRST_NAME: "Odj Oscar Dominard Jeco",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andalajao",
      INSTRUCTOR_FIRST_NAME: "Ralph Jade",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramo",
      INSTRUCTOR_FIRST_NAME: "Edmond John",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ugpay",
      INSTRUCTOR_FIRST_NAME: "Rex Michael",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Campaña",
      INSTRUCTOR_FIRST_NAME: "Nolyruzz Crystelle",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alonsagay",
      INSTRUCTOR_FIRST_NAME: "Andrei Christian",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madulid",
      INSTRUCTOR_FIRST_NAME: "Heather Trisha",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sultan",
      INSTRUCTOR_FIRST_NAME: "Sitty Nur Jazzffeer D",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olazo",
      INSTRUCTOR_FIRST_NAME: "Melanie Zandra",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacsamana",
      INSTRUCTOR_FIRST_NAME: "Lorenz Carl",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Alyssa Dominik",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cardiño",
      INSTRUCTOR_FIRST_NAME: "Rannie Clarisse",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dadia",
      INSTRUCTOR_FIRST_NAME: "Normiah",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maravilla",
      INSTRUCTOR_FIRST_NAME: "Samantha Jean",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hauac",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pepito",
      INSTRUCTOR_FIRST_NAME: "Anjun A",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang Espina",
      INSTRUCTOR_FIRST_NAME: "Marc Kristian",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dauz",
      INSTRUCTOR_FIRST_NAME: "Mark Anthony",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacion",
      INSTRUCTOR_FIRST_NAME: "Mark Dave",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Daniel Lee S",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bellezas",
      INSTRUCTOR_FIRST_NAME: "Damselle Mae",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Robin Andrei",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Justin Oryan",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paunillan",
      INSTRUCTOR_FIRST_NAME: "Jezrael Mivan",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pareñas",
      INSTRUCTOR_FIRST_NAME: "Alexie James C",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suralta",
      INSTRUCTOR_FIRST_NAME: "Aaron Kern",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Denia",
      INSTRUCTOR_FIRST_NAME: "Jianlu Candice",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillo",
      INSTRUCTOR_FIRST_NAME: "Charles Albert",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamad",
      INSTRUCTOR_FIRST_NAME: "Francis Adrian",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Kate",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mantalaba",
      INSTRUCTOR_FIRST_NAME: "Mariel",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navarro",
      INSTRUCTOR_FIRST_NAME: "Princess Haidi",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tuan",
      INSTRUCTOR_FIRST_NAME: "Daryl Mae M",
      COURSE_NAME: "Electronics Circuits Analysis and Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Lendy Lou G",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pugoy",
      INSTRUCTOR_FIRST_NAME: "Adrian David",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pates",
      INSTRUCTOR_FIRST_NAME: "Angel Pia",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortez",
      INSTRUCTOR_FIRST_NAME: "Aaron Dave",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Jan Stephon Andre",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangmang",
      INSTRUCTOR_FIRST_NAME: "Jim Paolo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Roed Charlie M",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tanaid",
      INSTRUCTOR_FIRST_NAME: "Hannah Faye",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oñasa",
      INSTRUCTOR_FIRST_NAME: "Jay-Ann",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enriquez",
      INSTRUCTOR_FIRST_NAME: "Eliza Louise",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Gianpaolo",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcos",
      INSTRUCTOR_FIRST_NAME: "Jerico Dawson",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maslog",
      INSTRUCTOR_FIRST_NAME: "Joshua Mari",
      COURSE_NAME: "CCNA Routing and Switching 1(Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dequito",
      INSTRUCTOR_FIRST_NAME: "Baby Janlo",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Savillo",
      INSTRUCTOR_FIRST_NAME: "Christine Joyce",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ma",
      INSTRUCTOR_FIRST_NAME: "Thea Marie",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castañeda",
      INSTRUCTOR_FIRST_NAME: "Trishia",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Española",
      INSTRUCTOR_FIRST_NAME: "Justin Roi",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Am-is",
      INSTRUCTOR_FIRST_NAME: "John Irvin",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galas",
      INSTRUCTOR_FIRST_NAME: "Jarrod",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ara",
      INSTRUCTOR_FIRST_NAME: "Johara Mina",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villar",
      INSTRUCTOR_FIRST_NAME: "Avery James",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bantayan",
      INSTRUCTOR_FIRST_NAME: "Greg Johnbelle",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelayo",
      INSTRUCTOR_FIRST_NAME: "Bea Nicole",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Austre",
      INSTRUCTOR_FIRST_NAME: "Rodolf Gerard",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Francis Jacob",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabig",
      INSTRUCTOR_FIRST_NAME: "Joshel Dominic",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sango",
      INSTRUCTOR_FIRST_NAME: "Gracell B",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carmelotes",
      INSTRUCTOR_FIRST_NAME: "Jacob Richard B.",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ide",
      INSTRUCTOR_FIRST_NAME: "Shinichi",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Majaducon",
      INSTRUCTOR_FIRST_NAME: "Christine Mary",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabaosares",
      INSTRUCTOR_FIRST_NAME: "Symon Benedic",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rojas",
      INSTRUCTOR_FIRST_NAME: "Jessa Mae B",
      COURSE_NAME: "Momentum Transfer (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hernandez",
      INSTRUCTOR_FIRST_NAME: "Jeremy Shaun N",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moralde",
      INSTRUCTOR_FIRST_NAME: "Jasper Le",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joves",
      INSTRUCTOR_FIRST_NAME: "Carlo",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bibat",
      INSTRUCTOR_FIRST_NAME: "Kyra D",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Niccolo Andrei",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madjos",
      INSTRUCTOR_FIRST_NAME: "Wendlee",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Israel",
      INSTRUCTOR_FIRST_NAME: "Patrick Stewart  Lei",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escomes",
      INSTRUCTOR_FIRST_NAME: "Christine Faith",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mar",
      INSTRUCTOR_FIRST_NAME: "Keirch Ivan",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malinao",
      INSTRUCTOR_FIRST_NAME: "Quir Olymph",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Turquia",
      INSTRUCTOR_FIRST_NAME: "Rhey James A",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Violan",
      INSTRUCTOR_FIRST_NAME: "Alyzza Ann Marie",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abordo",
      INSTRUCTOR_FIRST_NAME: "Jeremiah Paul P.",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Comendador",
      INSTRUCTOR_FIRST_NAME: "Jae Ann",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pare",
      INSTRUCTOR_FIRST_NAME: "Ivan",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abdon",
      INSTRUCTOR_FIRST_NAME: "John Paul",
      COURSE_NAME: "Thesis 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Velayo",
      INSTRUCTOR_FIRST_NAME: "Therese Dianne",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caldoza",
      INSTRUCTOR_FIRST_NAME: "Forem Wesley Dave D",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barcelo",
      INSTRUCTOR_FIRST_NAME: "Kurt Dave",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espiritu",
      INSTRUCTOR_FIRST_NAME: "Nicole",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Justyne Abrham Neille",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alim II",
      INSTRUCTOR_FIRST_NAME: "Jasden Datulna",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anghag",
      INSTRUCTOR_FIRST_NAME: "Erika Chiarrienne",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obsioma",
      INSTRUCTOR_FIRST_NAME: "Jericho",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuaton",
      INSTRUCTOR_FIRST_NAME: "Julliane Marie",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luego",
      INSTRUCTOR_FIRST_NAME: "Dan Jefferson H",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villaver",
      INSTRUCTOR_FIRST_NAME: "Micah E",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cresencio",
      INSTRUCTOR_FIRST_NAME: "Cyril Jan",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gorrero",
      INSTRUCTOR_FIRST_NAME: "Harlley Bryle",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimapanat",
      INSTRUCTOR_FIRST_NAME: "Aziza Ashia",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vallente",
      INSTRUCTOR_FIRST_NAME: "Matt Christian",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anggot",
      INSTRUCTOR_FIRST_NAME: "Joriz U",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balila",
      INSTRUCTOR_FIRST_NAME: "Marco Miguel",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Naraval",
      INSTRUCTOR_FIRST_NAME: "Jasper",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paguntalan",
      INSTRUCTOR_FIRST_NAME: "Xavier Robert B",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pulmones",
      INSTRUCTOR_FIRST_NAME: "Rabbi Dustin",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lantaya",
      INSTRUCTOR_FIRST_NAME: "Oliver F",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Senon",
      INSTRUCTOR_FIRST_NAME: "Matthew Ira",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nolasco",
      INSTRUCTOR_FIRST_NAME: "Castor Troy",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ty",
      INSTRUCTOR_FIRST_NAME: "George",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alcazar",
      INSTRUCTOR_FIRST_NAME: "Roldan",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrau",
      INSTRUCTOR_FIRST_NAME: "Gobhy Andrew",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carugda",
      INSTRUCTOR_FIRST_NAME: "Aeron Joshua",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gersava",
      INSTRUCTOR_FIRST_NAME: "Donald Cesar T",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Milagrosa",
      INSTRUCTOR_FIRST_NAME: "Maeve O",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tion",
      INSTRUCTOR_FIRST_NAME: "Joshua R",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Gracia",
      INSTRUCTOR_FIRST_NAME: "Kim Adrielle",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Alejandro Luzito",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manguray",
      INSTRUCTOR_FIRST_NAME: "Hero Marco",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacheco",
      INSTRUCTOR_FIRST_NAME: "Jared Angelo C",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madulara",
      INSTRUCTOR_FIRST_NAME: "Emeterio Rev",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alagasi",
      INSTRUCTOR_FIRST_NAME: "Joefer D",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rallos",
      INSTRUCTOR_FIRST_NAME: "Lyle Krishner E",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Jeremy John A",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galor",
      INSTRUCTOR_FIRST_NAME: "John Fred",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Mathieu Audric",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Engay",
      INSTRUCTOR_FIRST_NAME: "Stephanie",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Viola",
      INSTRUCTOR_FIRST_NAME: "Angela Candice V",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abalunan",
      INSTRUCTOR_FIRST_NAME: "Samantha Louise",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañas",
      INSTRUCTOR_FIRST_NAME: "Vince Cesar",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dipatuan",
      INSTRUCTOR_FIRST_NAME: "Nawaf T",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salutillo",
      INSTRUCTOR_FIRST_NAME: "Xean Uri D",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daquilos",
      INSTRUCTOR_FIRST_NAME: "Diether",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sasuman",
      INSTRUCTOR_FIRST_NAME: "Clynkaj U",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medija",
      INSTRUCTOR_FIRST_NAME: "Jeffrey John",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castro",
      INSTRUCTOR_FIRST_NAME: "Patricia Cara",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malanguis",
      INSTRUCTOR_FIRST_NAME: "Christian Rey",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manisan",
      INSTRUCTOR_FIRST_NAME: "Ria Luz",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apale",
      INSTRUCTOR_FIRST_NAME: "John Ray",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pagalan",
      INSTRUCTOR_FIRST_NAME: "Kirt Patrick D",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gealon",
      INSTRUCTOR_FIRST_NAME: "Shaira",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simbajon",
      INSTRUCTOR_FIRST_NAME: "Alexandrea Kate D",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Luis Anthony S",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bate",
      INSTRUCTOR_FIRST_NAME: "Edin Mar",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baring",
      INSTRUCTOR_FIRST_NAME: "Lawrence Junel",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "Vanessa",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalinding",
      INSTRUCTOR_FIRST_NAME: "Abdulkarim C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gay",
      INSTRUCTOR_FIRST_NAME: "Brigette",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tongco",
      INSTRUCTOR_FIRST_NAME: "John Mico P",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atensor",
      INSTRUCTOR_FIRST_NAME: "Joseph Blaise",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Karl Angelo A",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Collado",
      INSTRUCTOR_FIRST_NAME: "Neil Christian",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Black",
      INSTRUCTOR_FIRST_NAME: "Peter",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arcenas",
      INSTRUCTOR_FIRST_NAME: "Isaiah Noel S",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangudadatu",
      INSTRUCTOR_FIRST_NAME: "Yusbhar S",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangisel",
      INSTRUCTOR_FIRST_NAME: "Floriane Daly F",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aton",
      INSTRUCTOR_FIRST_NAME: "Lance Laurence",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Okino",
      INSTRUCTOR_FIRST_NAME: "Takumi",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paunillan",
      INSTRUCTOR_FIRST_NAME: "Maresha Chryzl C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estrada",
      INSTRUCTOR_FIRST_NAME: "Ej Thea",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ajoc",
      INSTRUCTOR_FIRST_NAME: "Joanne May",
      COURSE_NAME: "Chemistry for Engineers (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sembrano",
      INSTRUCTOR_FIRST_NAME: "Miguel Angelo A",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juezan",
      INSTRUCTOR_FIRST_NAME: "Kim Marvic",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benigian",
      INSTRUCTOR_FIRST_NAME: "Karl Rheanne",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jorge",
      INSTRUCTOR_FIRST_NAME: "Christian Jay A",
      COURSE_NAME: "Operating Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montero",
      INSTRUCTOR_FIRST_NAME: "Janynn",
      COURSE_NAME: "CCNA Routing and Switching 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labis",
      INSTRUCTOR_FIRST_NAME: "Kyle Chrysler S",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valentin",
      INSTRUCTOR_FIRST_NAME: "Hannah Nicole R",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lucero",
      INSTRUCTOR_FIRST_NAME: "Dixie Caithe E",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gorgonia",
      INSTRUCTOR_FIRST_NAME: "John Vincent C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampatuan",
      INSTRUCTOR_FIRST_NAME: "Urabie Jonathan Ivarr B",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siao",
      INSTRUCTOR_FIRST_NAME: "Genthor Nathaniel F",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balabag",
      INSTRUCTOR_FIRST_NAME: "Don Daniel",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Basicong",
      INSTRUCTOR_FIRST_NAME: "Sarah Marie M",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pajermo",
      INSTRUCTOR_FIRST_NAME: "Ervin Rey D",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumamil",
      INSTRUCTOR_FIRST_NAME: "Arnold Peter",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estigoy",
      INSTRUCTOR_FIRST_NAME: "Angellen",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabio",
      INSTRUCTOR_FIRST_NAME: "Estelle R",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Harris",
      INSTRUCTOR_FIRST_NAME: "Joshua O",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Venancio",
      INSTRUCTOR_FIRST_NAME: "Paolo Luis",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferniz",
      INSTRUCTOR_FIRST_NAME: "Ma. Mikaela Eliza L",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villar",
      INSTRUCTOR_FIRST_NAME: "Janeen Mae C",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medellin",
      INSTRUCTOR_FIRST_NAME: "Clarence A",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salik",
      INSTRUCTOR_FIRST_NAME: "Mohammad",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llano",
      INSTRUCTOR_FIRST_NAME: "Cleinth Mark J",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Queenie Kate C",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villasfer",
      INSTRUCTOR_FIRST_NAME: "Ryle Joshua P",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Divino",
      INSTRUCTOR_FIRST_NAME: "Daniel Fil B",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olvido",
      INSTRUCTOR_FIRST_NAME: "Winzyl",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balasila",
      INSTRUCTOR_FIRST_NAME: "Jake Arthur B",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lomuljo",
      INSTRUCTOR_FIRST_NAME: "Jo Keziah",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Haw",
      INSTRUCTOR_FIRST_NAME: "Jeremy",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacang",
      INSTRUCTOR_FIRST_NAME: "Sophia Bella A",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayrit",
      INSTRUCTOR_FIRST_NAME: "Dunhill John A",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Jl Paul",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamayot",
      INSTRUCTOR_FIRST_NAME: "Xaviery Keith F",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacles",
      INSTRUCTOR_FIRST_NAME: "Michelynn Mae",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paguio",
      INSTRUCTOR_FIRST_NAME: "Jhay Marc B",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hermoso",
      INSTRUCTOR_FIRST_NAME: "Dickson E",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magno",
      INSTRUCTOR_FIRST_NAME: "Carlo Christian B",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rojo",
      INSTRUCTOR_FIRST_NAME: "Elyza P",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ong",
      INSTRUCTOR_FIRST_NAME: "Christopher Jacob S",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macatual",
      INSTRUCTOR_FIRST_NAME: "John Mark",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balanay",
      INSTRUCTOR_FIRST_NAME: "Sergs Justine",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mari",
      INSTRUCTOR_FIRST_NAME: "Russel Anthony B",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llido",
      INSTRUCTOR_FIRST_NAME: "Jackie Adrianne",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coral",
      INSTRUCTOR_FIRST_NAME: "Earl Vincent",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vale",
      INSTRUCTOR_FIRST_NAME: "Mary Claire L",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biruar",
      INSTRUCTOR_FIRST_NAME: "Bai Rana Alyanessa A",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manching",
      INSTRUCTOR_FIRST_NAME: "Mon Geroi",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacol",
      INSTRUCTOR_FIRST_NAME: "Raul Christian",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponte",
      INSTRUCTOR_FIRST_NAME: "John Nicklaus M",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batenga",
      INSTRUCTOR_FIRST_NAME: "Earl Robin",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Notarte",
      INSTRUCTOR_FIRST_NAME: "Stephen A",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gapuzan",
      INSTRUCTOR_FIRST_NAME: "Jan Francis",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escabusa",
      INSTRUCTOR_FIRST_NAME: "Melrick E",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castañeda",
      INSTRUCTOR_FIRST_NAME: "Johnna May",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valera",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabino",
      INSTRUCTOR_FIRST_NAME: "John Jericho S",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Timtim",
      INSTRUCTOR_FIRST_NAME: "Sophia Marie A",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abasolo",
      INSTRUCTOR_FIRST_NAME: "Arl Jasper M",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labis",
      INSTRUCTOR_FIRST_NAME: "John Rex",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pulan",
      INSTRUCTOR_FIRST_NAME: "Jesson P",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Singco",
      INSTRUCTOR_FIRST_NAME: "Angel Kate",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Denia",
      INSTRUCTOR_FIRST_NAME: "Julia Erin P",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ladera",
      INSTRUCTOR_FIRST_NAME: "Leslie Jean G",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dellatan",
      INSTRUCTOR_FIRST_NAME: "John Kyle L",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ladera",
      INSTRUCTOR_FIRST_NAME: "Crisceldo Otto E",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vallespin",
      INSTRUCTOR_FIRST_NAME: "Arvin Ray S",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Roselle C",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tunguia",
      INSTRUCTOR_FIRST_NAME: "Regina Ysabel C",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuentes",
      INSTRUCTOR_FIRST_NAME: "Nathan Cyvel Jann",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandi",
      INSTRUCTOR_FIRST_NAME: "Queen",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villa",
      INSTRUCTOR_FIRST_NAME: "Junille R",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Denia",
      INSTRUCTOR_FIRST_NAME: "Jon Kharllo",
      COURSE_NAME:
        "Architectural Design 2: Creative Design Fundamentals (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Verances",
      INSTRUCTOR_FIRST_NAME: "Georgia Roshen B",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangudadatu",
      INSTRUCTOR_FIRST_NAME: "Fiedder Owen",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Taton",
      INSTRUCTOR_FIRST_NAME: "Anna Melliza A",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alvero Jr.",
      INSTRUCTOR_FIRST_NAME: "Franklin",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dongon",
      INSTRUCTOR_FIRST_NAME: "Helios",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fajardo",
      INSTRUCTOR_FIRST_NAME: "Jasper Jhon",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jeyamurugan",
      INSTRUCTOR_FIRST_NAME: "Kogulan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solaiman",
      INSTRUCTOR_FIRST_NAME: "Normedah S.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plaza",
      INSTRUCTOR_FIRST_NAME: "Joseph Andrei L.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fong",
      INSTRUCTOR_FIRST_NAME: "Karen",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabudlong",
      INSTRUCTOR_FIRST_NAME: "Joseph Jay P",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manigo",
      INSTRUCTOR_FIRST_NAME: "Hannah Mae",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juliano",
      INSTRUCTOR_FIRST_NAME: "Florialle Jhon K",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caduyac",
      INSTRUCTOR_FIRST_NAME: "Louella Joyce",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumbatan",
      INSTRUCTOR_FIRST_NAME: "Norol-Amier",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Matthew Gabriel C",
      COURSE_NAME: "Game Programming 3 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peli",
      INSTRUCTOR_FIRST_NAME: "Samantha Rench P",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alicer",
      INSTRUCTOR_FIRST_NAME: "Jadz Felix",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Etrone",
      INSTRUCTOR_FIRST_NAME: "Almira Gianne",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macaranas",
      INSTRUCTOR_FIRST_NAME: "Rysan Dolor V",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valguna",
      INSTRUCTOR_FIRST_NAME: "Junuel T",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Elrick Royce B",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apostol",
      INSTRUCTOR_FIRST_NAME: "Diane Angelyn C",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bagundang",
      INSTRUCTOR_FIRST_NAME: "Princess Ashlia E",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kasid",
      INSTRUCTOR_FIRST_NAME: "Julhalel C.",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esmalla",
      INSTRUCTOR_FIRST_NAME: "Neil B",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joaquin",
      INSTRUCTOR_FIRST_NAME: "Justin Jay",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borromeo",
      INSTRUCTOR_FIRST_NAME: "Earvin",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deniega",
      INSTRUCTOR_FIRST_NAME: "Joefer John",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagrada",
      INSTRUCTOR_FIRST_NAME: "Mike Joshua L",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hombre",
      INSTRUCTOR_FIRST_NAME: "Joshua Ron",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dionisio",
      INSTRUCTOR_FIRST_NAME: "Charles Emmanuel",
      COURSE_NAME: "EE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guiamadil",
      INSTRUCTOR_FIRST_NAME: "Norhanie C",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perpetua",
      INSTRUCTOR_FIRST_NAME: "Joshua Matthew B",
      COURSE_NAME: "DC MACHINERY (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kabwe",
      INSTRUCTOR_FIRST_NAME: "Simon K",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Canuday",
      INSTRUCTOR_FIRST_NAME: "Jan Luke S",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Mila M",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martinez",
      INSTRUCTOR_FIRST_NAME: "Andrei Macklin",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antolin Jr.",
      INSTRUCTOR_FIRST_NAME: "Edgardo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Alkes L",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mukarram",
      INSTRUCTOR_FIRST_NAME: "Abdulkhaliq",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suelto",
      INSTRUCTOR_FIRST_NAME: "Lance Raphael A.",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "David",
      INSTRUCTOR_FIRST_NAME: "Gregy Boy B",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lua",
      INSTRUCTOR_FIRST_NAME: "Ivy C",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zalsos",
      INSTRUCTOR_FIRST_NAME: "Maria Isabel A",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vicencio",
      INSTRUCTOR_FIRST_NAME: "Kurt Ethan",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lancian",
      INSTRUCTOR_FIRST_NAME: "Andrei Jude L",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estorba",
      INSTRUCTOR_FIRST_NAME: "Rica Isabel",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Binoya",
      INSTRUCTOR_FIRST_NAME: "Benz Derick",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soliva",
      INSTRUCTOR_FIRST_NAME: "Bryan Lanbert C.",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Farolan",
      INSTRUCTOR_FIRST_NAME: "Andre Paul",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacalan",
      INSTRUCTOR_FIRST_NAME: "Ej Gabriel O",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llorando",
      INSTRUCTOR_FIRST_NAME: "Francis Albert",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montinola",
      INSTRUCTOR_FIRST_NAME: "Adrian",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "ABREO",
      INSTRUCTOR_FIRST_NAME: "NEIL ANGELO S.",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "ALDABA",
      INSTRUCTOR_FIRST_NAME: "LINDY PAUL S.",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "ALFECHE",
      INSTRUCTOR_FIRST_NAME: "LALAINE JOAN V.",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "ALIGATO",
      INSTRUCTOR_FIRST_NAME: "ALVIN JOHN M.",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "AQUINO",
      INSTRUCTOR_FIRST_NAME: "JOSHUA D.",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "ARCILLAS",
      INSTRUCTOR_FIRST_NAME: "MARLON",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "AVILA",
      INSTRUCTOR_FIRST_NAME: "CLARIBEL P.",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "BAARDE",
      INSTRUCTOR_FIRST_NAME: "LARISSA MARIE",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "BADILLES",
      INSTRUCTOR_FIRST_NAME: "IVY CHOCENT",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "BALO",
      INSTRUCTOR_FIRST_NAME: "ABELIOSRE L.",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "BORROMEO",
      INSTRUCTOR_FIRST_NAME: "EARVIN L.",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "BRINGAS",
      INSTRUCTOR_FIRST_NAME: "KARLO JAMES M.",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "CASCARO",
      INSTRUCTOR_FIRST_NAME: "RHODESSA J.",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "CUESTAS",
      INSTRUCTOR_FIRST_NAME: "DAVID ANDREW A.",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "DEL CORRO",
      INSTRUCTOR_FIRST_NAME: "JOSEF MIKA-EL",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "DELOS REYES",
      INSTRUCTOR_FIRST_NAME: "MARYCON C.",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "DINGAL",
      INSTRUCTOR_FIRST_NAME: "CHARLYMER C",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "DIZON",
      INSTRUCTOR_FIRST_NAME: "ENA MARIE O.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "DOMINGO",
      INSTRUCTOR_FIRST_NAME: "JUSALYN",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "FORTON",
      INSTRUCTOR_FIRST_NAME: "DENIE P.",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "GALLEGOS",
      INSTRUCTOR_FIRST_NAME: "IVAN N.",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "GRAVADOR",
      INSTRUCTOR_FIRST_NAME: "CUPIDLYN B.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "GRAVADOR",
      INSTRUCTOR_FIRST_NAME: "DARRYL SHANE U.",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "HASSAN",
      INSTRUCTOR_FIRST_NAME: "ALLANUDDIN S.",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "HIDALGO",
      INSTRUCTOR_FIRST_NAME: "FRANCIS GERARD S.J.",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "IHALAS",
      INSTRUCTOR_FIRST_NAME: "JONDEL S.",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "JOSIO",
      INSTRUCTOR_FIRST_NAME: "CESAR GLENN A.",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "KO",
      INSTRUCTOR_FIRST_NAME: "LYRA B.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "LAGANZON",
      INSTRUCTOR_FIRST_NAME: "ELENITA C.",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "LIGUTOM",
      INSTRUCTOR_FIRST_NAME: "CELESTE JOY B.",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "LOGROSA",
      INSTRUCTOR_FIRST_NAME: "GERNELYN T.",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "MACK",
      INSTRUCTOR_FIRST_NAME: "JOSE PAOLO Y.",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "MALLARI",
      INSTRUCTOR_FIRST_NAME: "APRIL ARVY M.",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "OTERO",
      INSTRUCTOR_FIRST_NAME: "GERLYN D.",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "PAHAYAC",
      INSTRUCTOR_FIRST_NAME: "KERYL JOYCE",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "PERFUMA",
      INSTRUCTOR_FIRST_NAME: "ROY D.",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "PLASABAS",
      INSTRUCTOR_FIRST_NAME: "ROGER JAMES P.",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "QUINAGON",
      INSTRUCTOR_FIRST_NAME: "RAMON B. III",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "RODRIGUEZ",
      INSTRUCTOR_FIRST_NAME: "MERYL MAE C.",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "UNABIA",
      INSTRUCTOR_FIRST_NAME: "MICHELLE C.",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "YPARRAGUIRRE",
      INSTRUCTOR_FIRST_NAME: "FLORA MAE C.",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wong",
      INSTRUCTOR_FIRST_NAME: "Stephen Paul M",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pedrosa",
      INSTRUCTOR_FIRST_NAME: "Nicole Anne Alexandria S",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bermudez",
      INSTRUCTOR_FIRST_NAME: "Christian Joseph M",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santiago",
      INSTRUCTOR_FIRST_NAME: "Roni Marielle A",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acedo",
      INSTRUCTOR_FIRST_NAME: "Macloyd",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "MORALES",
      INSTRUCTOR_FIRST_NAME: "ALVIN",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "GRAVADOR",
      INSTRUCTOR_FIRST_NAME: "CATHERINE",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pangilinan",
      INSTRUCTOR_FIRST_NAME: "Anne Victoria",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Amiel Henrich A",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dorado",
      INSTRUCTOR_FIRST_NAME: "James Yasser V",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gante",
      INSTRUCTOR_FIRST_NAME: "April Dianne",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabriel",
      INSTRUCTOR_FIRST_NAME: "Denise Zhane",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reponte",
      INSTRUCTOR_FIRST_NAME: "Vanjo S",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tarusan",
      INSTRUCTOR_FIRST_NAME: "Aissa Allyana Marielle E",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sampaga",
      INSTRUCTOR_FIRST_NAME: "Andrea Richelle M",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabactulan",
      INSTRUCTOR_FIRST_NAME: "Benzar Angelo B",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacalla",
      INSTRUCTOR_FIRST_NAME: "Nathalie C",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Guzman",
      INSTRUCTOR_FIRST_NAME: "Sheena Kyle B",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardino",
      INSTRUCTOR_FIRST_NAME: "Rhonamae Jeshca T",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hernandez",
      INSTRUCTOR_FIRST_NAME: "Gio Emmanuel J.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "BRIONES",
      INSTRUCTOR_FIRST_NAME: "ISAGANI",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Serna",
      INSTRUCTOR_FIRST_NAME: "Princess Airielle M",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagondon",
      INSTRUCTOR_FIRST_NAME: "Lyssane",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ediong",
      INSTRUCTOR_FIRST_NAME: "John Jefferson",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muñasque",
      INSTRUCTOR_FIRST_NAME: "Lucy Althea",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinsuat",
      INSTRUCTOR_FIRST_NAME: "Bai Amyrah S",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bascon",
      INSTRUCTOR_FIRST_NAME: "Jestoni",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Candelario",
      INSTRUCTOR_FIRST_NAME: "Maynard Lance",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mustapha",
      INSTRUCTOR_FIRST_NAME: "Sahar Mae A",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapusok",
      INSTRUCTOR_FIRST_NAME: "Jeric Rommel D",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anghag",
      INSTRUCTOR_FIRST_NAME: "Sidney Christianne",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Burgos",
      INSTRUCTOR_FIRST_NAME: "Miguel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malanog",
      INSTRUCTOR_FIRST_NAME: "Aubrey Dominique T",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalipe",
      INSTRUCTOR_FIRST_NAME: "Arysses Jane N",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuentes",
      INSTRUCTOR_FIRST_NAME: "Ion Micah L",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ada",
      INSTRUCTOR_FIRST_NAME: "Lily Ann Marie S",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ayon",
      INSTRUCTOR_FIRST_NAME: "Hernane P",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palero",
      INSTRUCTOR_FIRST_NAME: "Jasper Adrian A",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villegas",
      INSTRUCTOR_FIRST_NAME: "Justin Peter Michael B",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Jamaica Jel",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Engbino",
      INSTRUCTOR_FIRST_NAME: "Romielyn C.",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Godoy",
      INSTRUCTOR_FIRST_NAME: "Janella Miejh R",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillo",
      INSTRUCTOR_FIRST_NAME: "Christopher",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Canoy",
      INSTRUCTOR_FIRST_NAME: "Mavreen Dale",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mercado",
      INSTRUCTOR_FIRST_NAME: "Juliana Shaan",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bartolome",
      INSTRUCTOR_FIRST_NAME: "Jan Noe L",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Rain Angel G",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manlangit",
      INSTRUCTOR_FIRST_NAME: "Rikka Marie G",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laingo",
      INSTRUCTOR_FIRST_NAME: "Jun Carl Ceasar",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabada",
      INSTRUCTOR_FIRST_NAME: "Nestor Jann S",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pasco",
      INSTRUCTOR_FIRST_NAME: "Arth Marshden P",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Legaspi",
      INSTRUCTOR_FIRST_NAME: "Koren Mae",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chanco",
      INSTRUCTOR_FIRST_NAME: "Christoff Kim",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Comora",
      INSTRUCTOR_FIRST_NAME: "Queenie",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gitacay",
      INSTRUCTOR_FIRST_NAME: "Jezeel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calvez",
      INSTRUCTOR_FIRST_NAME: "William Bill",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mañago",
      INSTRUCTOR_FIRST_NAME: "Arthor R",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarcon",
      INSTRUCTOR_FIRST_NAME: "Cire John Yazzer G",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pagulong",
      INSTRUCTOR_FIRST_NAME: "Jonel Jim",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rasheed",
      INSTRUCTOR_FIRST_NAME: "Raiza",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boniao",
      INSTRUCTOR_FIRST_NAME: "Elvis C",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sace",
      INSTRUCTOR_FIRST_NAME: "Daniel-Tristan C",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ticzon",
      INSTRUCTOR_FIRST_NAME: "Elisha Andie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palomero",
      INSTRUCTOR_FIRST_NAME: "Kim C",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ungab",
      INSTRUCTOR_FIRST_NAME: "Raphael A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumianjang",
      INSTRUCTOR_FIRST_NAME: "Nour Zhiada",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lima",
      INSTRUCTOR_FIRST_NAME: "Crisha Jann G",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabat",
      INSTRUCTOR_FIRST_NAME: "Marco Antonio B",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abella",
      INSTRUCTOR_FIRST_NAME: "Dwight Brixter",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimatingkal II",
      INSTRUCTOR_FIRST_NAME: "Dimarin",
      COURSE_NAME: "CCNA Routing and Switching 1(Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villa-Abrille",
      INSTRUCTOR_FIRST_NAME: "Stephen Angelo Z",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chan",
      INSTRUCTOR_FIRST_NAME: "Fook Hoe",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabrera",
      INSTRUCTOR_FIRST_NAME: "Daniel",
      COURSE_NAME: "Electromagnetics for ECE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernal",
      INSTRUCTOR_FIRST_NAME: "Arjun",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernales",
      INSTRUCTOR_FIRST_NAME: "Micah Bless A",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Busalla",
      INSTRUCTOR_FIRST_NAME: "Eshly Nicole",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vistal",
      INSTRUCTOR_FIRST_NAME: "Marcelino Iii M",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "SORDILLA",
      INSTRUCTOR_FIRST_NAME: "SHANE PATRICK",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bustamante",
      INSTRUCTOR_FIRST_NAME: "Don Jerick M",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Jamaica Jasmine Paula",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espina",
      INSTRUCTOR_FIRST_NAME: "John Vincent",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malabanan",
      INSTRUCTOR_FIRST_NAME: "Justin Jade",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vergara",
      INSTRUCTOR_FIRST_NAME: "Von Jasper B",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "AQUINO",
      INSTRUCTOR_FIRST_NAME: "JESUNINO",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toledo",
      INSTRUCTOR_FIRST_NAME: "Deanne Elise D",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabaobao",
      INSTRUCTOR_FIRST_NAME: "Deanne Audrey",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abear",
      INSTRUCTOR_FIRST_NAME: "Althea Marie C",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dataya",
      INSTRUCTOR_FIRST_NAME: "Yaseen C",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fulla",
      INSTRUCTOR_FIRST_NAME: "Nicole",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chenikandiyil",
      INSTRUCTOR_FIRST_NAME: "Jordan O",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hadjail",
      INSTRUCTOR_FIRST_NAME: "Glayza Dawn",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aragon",
      INSTRUCTOR_FIRST_NAME: "Althea Jessere B",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deligero",
      INSTRUCTOR_FIRST_NAME: "Cristine Jane",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saripada",
      INSTRUCTOR_FIRST_NAME: "Romnick",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagaas",
      INSTRUCTOR_FIRST_NAME: "Josua",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sepulveda",
      INSTRUCTOR_FIRST_NAME: "Miguel Lorenzo J",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abarico",
      INSTRUCTOR_FIRST_NAME: "Ralph Jade",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magallanes",
      INSTRUCTOR_FIRST_NAME: "Sean Ivan Michael Jabbar",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oñas",
      INSTRUCTOR_FIRST_NAME: "Steven Dave A",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortes",
      INSTRUCTOR_FIRST_NAME: "Alexandrea Clare D",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Okada",
      INSTRUCTOR_FIRST_NAME: "Vincent Ichi L",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Silanga",
      INSTRUCTOR_FIRST_NAME: "Ivan Ray M",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bersamin",
      INSTRUCTOR_FIRST_NAME: "Kayla G",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Joseph B",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Lloyd Anthony D",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baylon",
      INSTRUCTOR_FIRST_NAME: "Lordan B",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabrine",
      INSTRUCTOR_FIRST_NAME: "Rheil D",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Co",
      INSTRUCTOR_FIRST_NAME: "Veronica Jane",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cajoles",
      INSTRUCTOR_FIRST_NAME: "Kenneth Luis M",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lambino",
      INSTRUCTOR_FIRST_NAME: "Alexandria",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzaga",
      INSTRUCTOR_FIRST_NAME: "Jake",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabazares",
      INSTRUCTOR_FIRST_NAME: "Ray",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apale III",
      INSTRUCTOR_FIRST_NAME: "Raymundo",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peralta",
      INSTRUCTOR_FIRST_NAME: "Angelo Benzer E",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arcipe",
      INSTRUCTOR_FIRST_NAME: "Caetanya C",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leuenberger",
      INSTRUCTOR_FIRST_NAME: "Elise Martha C",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "ARADO",
      INSTRUCTOR_FIRST_NAME: "JENNIE",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Frondoza",
      INSTRUCTOR_FIRST_NAME: "Jay Paul",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacobe",
      INSTRUCTOR_FIRST_NAME: "Ryan Nealson",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rebosura",
      INSTRUCTOR_FIRST_NAME: "Emmanuel Maher M",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alcomendras",
      INSTRUCTOR_FIRST_NAME: "Ethan Joules",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pleños",
      INSTRUCTOR_FIRST_NAME: "Abby Jules",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alagao",
      INSTRUCTOR_FIRST_NAME: "Gretchen",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagoc",
      INSTRUCTOR_FIRST_NAME: "Andre Maven C",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soyos",
      INSTRUCTOR_FIRST_NAME: "Mary Grace L",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baiño",
      INSTRUCTOR_FIRST_NAME: "Francis Jude U",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Babao",
      INSTRUCTOR_FIRST_NAME: "Nikki Zarah G",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amihan",
      INSTRUCTOR_FIRST_NAME: "Gail Annthoniette A",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abatayo",
      INSTRUCTOR_FIRST_NAME: "Jerome E",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Casawitan",
      INSTRUCTOR_FIRST_NAME: "Velley Jay",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Varron",
      INSTRUCTOR_FIRST_NAME: "Cherry Lou C",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ong",
      INSTRUCTOR_FIRST_NAME: "Maanne Julia S",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espinoza",
      INSTRUCTOR_FIRST_NAME: "John Bryan",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lambo",
      INSTRUCTOR_FIRST_NAME: "Aillcea R",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "CATALBAS",
      INSTRUCTOR_FIRST_NAME: "MARY ROSE",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "PANGLILINGAN",
      INSTRUCTOR_FIRST_NAME: "JERRALD",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "LONGAKIT",
      INSTRUCTOR_FIRST_NAME: "JERA",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "PANGAN",
      INSTRUCTOR_FIRST_NAME: "CHARLITA",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dano",
      INSTRUCTOR_FIRST_NAME: "Shenah Fhe B",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lasib",
      INSTRUCTOR_FIRST_NAME: "Ryedhel Fame Gwyneth",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Leon",
      INSTRUCTOR_FIRST_NAME: "Eldrick Clyde",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "DANCEL",
      INSTRUCTOR_FIRST_NAME: "MONICA",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Torre",
      INSTRUCTOR_FIRST_NAME: "Vinroge Caslier B",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "GUELOS",
      INSTRUCTOR_FIRST_NAME: "FRENCH IAN",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Babao",
      INSTRUCTOR_FIRST_NAME: "Andrey Mchale L",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "MANGUBAT",
      INSTRUCTOR_FIRST_NAME: "JOVAIRA",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Setup",
      INSTRUCTOR_FIRST_NAME: "Course",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "RODRIGUEZ_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "MERYL MAE C.",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "ANG_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ANITA",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Celik",
      INSTRUCTOR_FIRST_NAME: "Yakup",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soliva",
      INSTRUCTOR_FIRST_NAME: "Rey Joseph",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Francis Ronald",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "MCM",
      INSTRUCTOR_FIRST_NAME: "Student",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "MCM",
      INSTRUCTOR_FIRST_NAME: "Student",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dilangalen",
      INSTRUCTOR_FIRST_NAME: "Nur Hisham L",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bonhoc",
      INSTRUCTOR_FIRST_NAME: "Joevanie L",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chavez",
      INSTRUCTOR_FIRST_NAME: "Hydie",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Santos",
      INSTRUCTOR_FIRST_NAME: "John Dave",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Togonon",
      INSTRUCTOR_FIRST_NAME: "Angelyne A",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Popatco",
      INSTRUCTOR_FIRST_NAME: "Sofia Loreen B",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Upadhaya",
      INSTRUCTOR_FIRST_NAME: "Pooja Alexa V",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Verano",
      INSTRUCTOR_FIRST_NAME: "Loecil Deanne B",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balasa",
      INSTRUCTOR_FIRST_NAME: "Quiza C",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacua",
      INSTRUCTOR_FIRST_NAME: "Juliet",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dotillos",
      INSTRUCTOR_FIRST_NAME: "Vannesa Reign",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Marvin",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernales",
      INSTRUCTOR_FIRST_NAME: "Samson",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lingaya",
      INSTRUCTOR_FIRST_NAME: "Arjan",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monterola",
      INSTRUCTOR_FIRST_NAME: "Conrado",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "user",
      INSTRUCTOR_FIRST_NAME: "user",
      COURSE_NAME: "Advanced Engineering Mathematics (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "eesysoft",
      INSTRUCTOR_FIRST_NAME: "Eesysoft",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "JOSIO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "CESAR GLENN A.",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "EMPAS_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "PAUL EMMANUEL",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arcuba",
      INSTRUCTOR_FIRST_NAME: "Crisber",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almarez",
      INSTRUCTOR_FIRST_NAME: "jm",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "user1",
      INSTRUCTOR_FIRST_NAME: "user1",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "TABINGO",
      INSTRUCTOR_FIRST_NAME: "RONYTH",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batulan",
      INSTRUCTOR_FIRST_NAME: "Loen Mark J",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zamora",
      INSTRUCTOR_FIRST_NAME: "Joey Jay",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Versoza",
      INSTRUCTOR_FIRST_NAME: "Ma. Monica Bianca R",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Ronalyn Annette",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gepigon",
      INSTRUCTOR_FIRST_NAME: "Kristina Corina",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrolino",
      INSTRUCTOR_FIRST_NAME: "Sean Francis S",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gacasan",
      INSTRUCTOR_FIRST_NAME: "Kurt",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anghag",
      INSTRUCTOR_FIRST_NAME: "Ronald Jay",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Teposo",
      INSTRUCTOR_FIRST_NAME: "Resnie Bella I",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Keenan Paco",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sayman",
      INSTRUCTOR_FIRST_NAME: "Dwight Lance C",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinarimbo",
      INSTRUCTOR_FIRST_NAME: "Muhammad Baqir G",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dahili",
      INSTRUCTOR_FIRST_NAME: "Allen S",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dasalla",
      INSTRUCTOR_FIRST_NAME: "Mary Maristel",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Jake Juval",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suero",
      INSTRUCTOR_FIRST_NAME: "Jacob Arn",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Mari Zalvi",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blanco",
      INSTRUCTOR_FIRST_NAME: "Rosendo",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Babate",
      INSTRUCTOR_FIRST_NAME: "Kevin Marc",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mosqueda",
      INSTRUCTOR_FIRST_NAME: "Karlo Isagani",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Ann Gloghienette",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cantoja",
      INSTRUCTOR_FIRST_NAME: "Richdon Kurt Romeo",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Floresta",
      INSTRUCTOR_FIRST_NAME: "Caryl",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galgo",
      INSTRUCTOR_FIRST_NAME: "Erika Valerie",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hilario",
      INSTRUCTOR_FIRST_NAME: "Derrick David",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gayanoche",
      INSTRUCTOR_FIRST_NAME: "Princess Abegail",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jake Juval",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escovilla",
      INSTRUCTOR_FIRST_NAME: "Emiko Antonette",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bayaban",
      INSTRUCTOR_FIRST_NAME: "Kent John",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "HIDALGO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "FRANCIS GERARD S.J.",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Babate_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kevin Marc",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Limpot",
      INSTRUCTOR_FIRST_NAME: "Kareen",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Firmacion",
      INSTRUCTOR_FIRST_NAME: "Dayl Ross",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valencia",
      INSTRUCTOR_FIRST_NAME: "Norma Ellen",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diente",
      INSTRUCTOR_FIRST_NAME: "Aldrine Luisse",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponce",
      INSTRUCTOR_FIRST_NAME: "John Paul",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cua",
      INSTRUCTOR_FIRST_NAME: "Abby Gayle",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Huang",
      INSTRUCTOR_FIRST_NAME: "Rich  Adrian",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Noblefranca",
      INSTRUCTOR_FIRST_NAME: "Latrell Andre",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Teodoro Yzmael",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paculanan",
      INSTRUCTOR_FIRST_NAME: "Uno Miguel",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Vince Angelo",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balunos",
      INSTRUCTOR_FIRST_NAME: "Shienna Martine",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coquilla",
      INSTRUCTOR_FIRST_NAME: "Carlos",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ty",
      INSTRUCTOR_FIRST_NAME: "Lloyd Vincent",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albastro",
      INSTRUCTOR_FIRST_NAME: "Renzi",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maing",
      INSTRUCTOR_FIRST_NAME: "Julianah Sofhia Nyx",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suizo",
      INSTRUCTOR_FIRST_NAME: "Yanni Felgie",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pimentel",
      INSTRUCTOR_FIRST_NAME: "Peter",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rijndorp",
      INSTRUCTOR_FIRST_NAME: "Nathaniel",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Frasco",
      INSTRUCTOR_FIRST_NAME: "Kim Christiansen",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dorado",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Lance",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siglos",
      INSTRUCTOR_FIRST_NAME: "Marcus Antonio",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sulaik",
      INSTRUCTOR_FIRST_NAME: "Sheya Molevic",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uraguchi",
      INSTRUCTOR_FIRST_NAME: "Akiriet-J",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Naval",
      INSTRUCTOR_FIRST_NAME: "Charyze Arriane",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Maria Andrea",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Icalina",
      INSTRUCTOR_FIRST_NAME: "Marianne",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendiola",
      INSTRUCTOR_FIRST_NAME: "Ashleigh Nikohl",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manulid",
      INSTRUCTOR_FIRST_NAME: "Joanna Aida",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Erika Hannah",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sagario",
      INSTRUCTOR_FIRST_NAME: "Gershon Rei",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reonal",
      INSTRUCTOR_FIRST_NAME: "Katherine",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Recla",
      INSTRUCTOR_FIRST_NAME: "Ven Mark",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pescador",
      INSTRUCTOR_FIRST_NAME: "Miguel Paolo",
      COURSE_NAME: "Electromagnetics for ECE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcos",
      INSTRUCTOR_FIRST_NAME: "Jullianna Marie",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kalaw",
      INSTRUCTOR_FIRST_NAME: "Renee Ysabela",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Patnugot",
      INSTRUCTOR_FIRST_NAME: "Bea Elise",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabul",
      INSTRUCTOR_FIRST_NAME: "Jhon Glenn",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gregorio",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Melocoton",
      INSTRUCTOR_FIRST_NAME: "Jose Federico",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiñonez",
      INSTRUCTOR_FIRST_NAME: "Frances Andrea",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Sean Gabriel",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olmedo",
      INSTRUCTOR_FIRST_NAME: "Cj Jimwell",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Jhon Christopher",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Iroy",
      INSTRUCTOR_FIRST_NAME: "Jeresquin Izza",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Jose Julian Christopher",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Donalvo",
      INSTRUCTOR_FIRST_NAME: "Dominik",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Vera",
      INSTRUCTOR_FIRST_NAME: "Andrea Elise",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muliloda",
      INSTRUCTOR_FIRST_NAME: "Dannia Janine",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Figueroa",
      INSTRUCTOR_FIRST_NAME: "Jneil Roi",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paclibar",
      INSTRUCTOR_FIRST_NAME: "Julius Phillip",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pitiquen",
      INSTRUCTOR_FIRST_NAME: "Edmark Drey Relan",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Curambao",
      INSTRUCTOR_FIRST_NAME: "Alliah Cheska",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Arabella",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palatino",
      INSTRUCTOR_FIRST_NAME: "Daniel Louis",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asentista",
      INSTRUCTOR_FIRST_NAME: "Dane Kirbie",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sy",
      INSTRUCTOR_FIRST_NAME: "Matt Vianney",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Miguel Andrei",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malilong",
      INSTRUCTOR_FIRST_NAME: "Alexius Timothy",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabay",
      INSTRUCTOR_FIRST_NAME: "Karl Emmanuel",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moraleda",
      INSTRUCTOR_FIRST_NAME: "Klaudia Ysabel",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kenny",
      INSTRUCTOR_FIRST_NAME: "Dan Joseph",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cagatin",
      INSTRUCTOR_FIRST_NAME: "Francis Florence",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Los Reyes",
      INSTRUCTOR_FIRST_NAME: "Jonyl",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Robles",
      INSTRUCTOR_FIRST_NAME: "Ray Eujin",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sison",
      INSTRUCTOR_FIRST_NAME: "Danielle Maurice",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cedeño",
      INSTRUCTOR_FIRST_NAME: "Ryan Karl",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hermoso",
      INSTRUCTOR_FIRST_NAME: "Anna Maria Theresa",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Camiña",
      INSTRUCTOR_FIRST_NAME: "Jewel Chrislene",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wee",
      INSTRUCTOR_FIRST_NAME: "Merzelle",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sievert",
      INSTRUCTOR_FIRST_NAME: "Leif Nicholas",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Rean Marey",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plasabas",
      INSTRUCTOR_FIRST_NAME: "Karla Sophia",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabuntocan",
      INSTRUCTOR_FIRST_NAME: "Jeb Vincent",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Mathea Niña",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Michael Ryan",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nadela",
      INSTRUCTOR_FIRST_NAME: "James Andrei",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serra",
      INSTRUCTOR_FIRST_NAME: "Shannon Kate",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sifuentes",
      INSTRUCTOR_FIRST_NAME: "Ferdinand Maximuuz",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernadaz",
      INSTRUCTOR_FIRST_NAME: "Daniel Louis",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lozarita",
      INSTRUCTOR_FIRST_NAME: "Gimril",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acebu",
      INSTRUCTOR_FIRST_NAME: "Sofia Paz",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacus",
      INSTRUCTOR_FIRST_NAME: "Dyellan",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pabilona",
      INSTRUCTOR_FIRST_NAME: "Err Zenn",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macaso",
      INSTRUCTOR_FIRST_NAME: "Joyce",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puso",
      INSTRUCTOR_FIRST_NAME: "Neil Andrew",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Israel",
      INSTRUCTOR_FIRST_NAME: "Marionne Lois",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "So",
      INSTRUCTOR_FIRST_NAME: "Nathan Domingo",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabudlong",
      INSTRUCTOR_FIRST_NAME: "Shinji",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adao",
      INSTRUCTOR_FIRST_NAME: "Jacquelene",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antioquia",
      INSTRUCTOR_FIRST_NAME: "Angelica Claire",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dulog",
      INSTRUCTOR_FIRST_NAME: "Christian Arthur",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Riña",
      INSTRUCTOR_FIRST_NAME: "Mark Louis",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pantua",
      INSTRUCTOR_FIRST_NAME: "Kristina Faye Anjanette",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deocampo",
      INSTRUCTOR_FIRST_NAME: "Kathrinna Claire",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Susi",
      INSTRUCTOR_FIRST_NAME: "Daine Mikaela",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacheco",
      INSTRUCTOR_FIRST_NAME: "Aaliyah Isabel",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Botenes",
      INSTRUCTOR_FIRST_NAME: "John Rhovic",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bio",
      INSTRUCTOR_FIRST_NAME: "Krisha Danielle",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salvosa",
      INSTRUCTOR_FIRST_NAME: "Christian Timothy",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andres",
      INSTRUCTOR_FIRST_NAME: "Lance Ranielle",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alocelja",
      INSTRUCTOR_FIRST_NAME: "Princess Samantha",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juan",
      INSTRUCTOR_FIRST_NAME: "Tj Iii",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zacarias",
      INSTRUCTOR_FIRST_NAME: "Hosea James",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bandigan",
      INSTRUCTOR_FIRST_NAME: "Ria Angeline",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguiling",
      INSTRUCTOR_FIRST_NAME: "Marianne Grace",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tirasol",
      INSTRUCTOR_FIRST_NAME: "Aleeyah Arieann",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cordero",
      INSTRUCTOR_FIRST_NAME: "Ed Chryssha",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Piamonte",
      INSTRUCTOR_FIRST_NAME: "Lord Keanu",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amantillo",
      INSTRUCTOR_FIRST_NAME: "Christian John",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valerio",
      INSTRUCTOR_FIRST_NAME: "Angelica Gwyne",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pascual",
      INSTRUCTOR_FIRST_NAME: "France Joshua",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carin",
      INSTRUCTOR_FIRST_NAME: "Paul Enrico",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Noval",
      INSTRUCTOR_FIRST_NAME: "Silvestre",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orbuda",
      INSTRUCTOR_FIRST_NAME: "Sej",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corong",
      INSTRUCTOR_FIRST_NAME: "Nathalie Grale",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pulmon",
      INSTRUCTOR_FIRST_NAME: "Paul Andrian",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tingson",
      INSTRUCTOR_FIRST_NAME: "Karel Kae",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañada",
      INSTRUCTOR_FIRST_NAME: "Giorgina Veronica",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tesoro",
      INSTRUCTOR_FIRST_NAME: "Gabriel Thomas",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rivera",
      INSTRUCTOR_FIRST_NAME: "Carlo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagpin",
      INSTRUCTOR_FIRST_NAME: "Chynna Jane",
      COURSE_NAME: "EE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Jeremie Angela",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estorquia",
      INSTRUCTOR_FIRST_NAME: "Dominic Raniel",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apostol",
      INSTRUCTOR_FIRST_NAME: "Lois",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dawa",
      INSTRUCTOR_FIRST_NAME: "Zaki James Maynard",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quibod",
      INSTRUCTOR_FIRST_NAME: "Louise Marie",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gigayon",
      INSTRUCTOR_FIRST_NAME: "Jose Paolo",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Idsla",
      INSTRUCTOR_FIRST_NAME: "Dinem Omeir",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sipalay",
      INSTRUCTOR_FIRST_NAME: "Daniella Ysabel",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tablizo",
      INSTRUCTOR_FIRST_NAME: "Charlothe John",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Segundera",
      INSTRUCTOR_FIRST_NAME: "Denise Ashley",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Añabieza",
      INSTRUCTOR_FIRST_NAME: "Reij March",
      COURSE_NAME: "Electronics Circuits Analysis and Design (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nielsen",
      INSTRUCTOR_FIRST_NAME: "Jammie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padua",
      INSTRUCTOR_FIRST_NAME: "John Arthur",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mesicula",
      INSTRUCTOR_FIRST_NAME: "Jarrie Karl",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Angas",
      INSTRUCTOR_FIRST_NAME: "Rania",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suarnaba",
      INSTRUCTOR_FIRST_NAME: "Kerby Dale",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balderas",
      INSTRUCTOR_FIRST_NAME: "Kylle Bryan",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leguip",
      INSTRUCTOR_FIRST_NAME: "Angealyn",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamasabulod",
      INSTRUCTOR_FIRST_NAME: "Mohamsor",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matunding",
      INSTRUCTOR_FIRST_NAME: "John Rhey",
      COURSE_NAME: "DC MACHINERY (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miranda",
      INSTRUCTOR_FIRST_NAME: "Leila",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinahon",
      INSTRUCTOR_FIRST_NAME: "Ruela Jenn",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palma Gil",
      INSTRUCTOR_FIRST_NAME: "Ian Rosh",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mercado",
      INSTRUCTOR_FIRST_NAME: "Leinah Gayle",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peralta",
      INSTRUCTOR_FIRST_NAME: "Ashlyn Breanna",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Calzada",
      INSTRUCTOR_FIRST_NAME: "Shane",
      COURSE_NAME: "Operating Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Piang",
      INSTRUCTOR_FIRST_NAME: "Datu Anuarudin",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Ralph",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Calvin Josh",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Namion",
      INSTRUCTOR_FIRST_NAME: "Marienel",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nagliba",
      INSTRUCTOR_FIRST_NAME: "Gerald Andre",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panuncio",
      INSTRUCTOR_FIRST_NAME: "Princess Kainiel",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Nathan Christopher",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sagulili",
      INSTRUCTOR_FIRST_NAME: "Syl Gabrielle",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pinto",
      INSTRUCTOR_FIRST_NAME: "Aleiah Bianca",
      COURSE_NAME: "Global Culture & Tourism Geography",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayon",
      INSTRUCTOR_FIRST_NAME: "Vince Michael",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiza",
      INSTRUCTOR_FIRST_NAME: "Jenie",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabas",
      INSTRUCTOR_FIRST_NAME: "Shamma Van",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Alessandro Josef",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mapanao",
      INSTRUCTOR_FIRST_NAME: "Christopher Lloyd",
      COURSE_NAME: "Modulation and Coding Techniques Laboratory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bhilt",
      INSTRUCTOR_FIRST_NAME: "Sunveer",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Alexis Derek",
      COURSE_NAME: "Principles of 2D Animation (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deduyo",
      INSTRUCTOR_FIRST_NAME: "Zach Geromme",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagting",
      INSTRUCTOR_FIRST_NAME: "Missy Marielle",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toribio",
      INSTRUCTOR_FIRST_NAME: "John Gabriel",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bandojo",
      INSTRUCTOR_FIRST_NAME: "Naden Stifany Jane",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maminta",
      INSTRUCTOR_FIRST_NAME: "Princess Nadja",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puracan",
      INSTRUCTOR_FIRST_NAME: "Chantee",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luntayan",
      INSTRUCTOR_FIRST_NAME: "Jeo",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Santos",
      INSTRUCTOR_FIRST_NAME: "Mj Nicole",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Huilar",
      INSTRUCTOR_FIRST_NAME: "Laureanne Angelica",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquiatan",
      INSTRUCTOR_FIRST_NAME: "Tyrael Melchizedek",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laureano",
      INSTRUCTOR_FIRST_NAME: "Rebekah Thereze",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lorin",
      INSTRUCTOR_FIRST_NAME: "Patricia Rey",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mimbala",
      INSTRUCTOR_FIRST_NAME: "Muneef Al- Harishi",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramboanga",
      INSTRUCTOR_FIRST_NAME: "Angelo Rey",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mimbala",
      INSTRUCTOR_FIRST_NAME: "Muneer Muhaymeen",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yumang",
      INSTRUCTOR_FIRST_NAME: "Sheena Lei Bianca",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diansay",
      INSTRUCTOR_FIRST_NAME: "Chariseana",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabacungan",
      INSTRUCTOR_FIRST_NAME: "Shayene Nicole",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rizada",
      INSTRUCTOR_FIRST_NAME: "Ryann Jay",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abarca",
      INSTRUCTOR_FIRST_NAME: "Kim Charles Adrian",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vander Sluis",
      INSTRUCTOR_FIRST_NAME: "Julie",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montiel",
      INSTRUCTOR_FIRST_NAME: "Eliza Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocenar",
      INSTRUCTOR_FIRST_NAME: "Lee Ivan Rey",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tortor",
      INSTRUCTOR_FIRST_NAME: "Nicolo Franco",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Goyongco",
      INSTRUCTOR_FIRST_NAME: "Kissie",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arce",
      INSTRUCTOR_FIRST_NAME: "Soc Nathaniel",
      COURSE_NAME: "Logic Circuits and Switching Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kim",
      INSTRUCTOR_FIRST_NAME: "Chaehyun",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chu",
      INSTRUCTOR_FIRST_NAME: "Rachel Mei",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alejo",
      INSTRUCTOR_FIRST_NAME: "Zylwyn",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimalanta",
      INSTRUCTOR_FIRST_NAME: "Kyrelle Paul",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Revilla",
      INSTRUCTOR_FIRST_NAME: "Aireen Hossana",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bula",
      INSTRUCTOR_FIRST_NAME: "Julius Francko",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagoc",
      INSTRUCTOR_FIRST_NAME: "Arvin John",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acebedo",
      INSTRUCTOR_FIRST_NAME: "Angela Coleen",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardino",
      INSTRUCTOR_FIRST_NAME: "Maijuney",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mata",
      INSTRUCTOR_FIRST_NAME: "Lara",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Calvin",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Jerald Andrei",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dioso",
      INSTRUCTOR_FIRST_NAME: "Trisha Lorraine",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bastasa",
      INSTRUCTOR_FIRST_NAME: "Duff",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kang",
      INSTRUCTOR_FIRST_NAME: "Minchae",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Imaysay",
      INSTRUCTOR_FIRST_NAME: "Christian Dave",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benito",
      INSTRUCTOR_FIRST_NAME: "Prince Harris",
      COURSE_NAME: "Electromagnetics for ECE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Covarrubias",
      INSTRUCTOR_FIRST_NAME: "Romuel Ryan",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mayordomo",
      INSTRUCTOR_FIRST_NAME: "Fritz",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madulara",
      INSTRUCTOR_FIRST_NAME: "Maria Emerjoyce",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olasiman",
      INSTRUCTOR_FIRST_NAME: "Kimi",
      COURSE_NAME: "Operating Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bangug",
      INSTRUCTOR_FIRST_NAME: "Emmanuel",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Regencia",
      INSTRUCTOR_FIRST_NAME: "Harriet Jaymee",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madayag",
      INSTRUCTOR_FIRST_NAME: "Gracie",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suriba",
      INSTRUCTOR_FIRST_NAME: "Martina Regine",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bagtasos",
      INSTRUCTOR_FIRST_NAME: "Alexandre Francois",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duran",
      INSTRUCTOR_FIRST_NAME: "Luis Benedict",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monfort Jr.",
      INSTRUCTOR_FIRST_NAME: "Gerald",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masungcad",
      INSTRUCTOR_FIRST_NAME: "Ma. Isabela",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Enrico Benjamin",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Miguel Francis",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallardo",
      INSTRUCTOR_FIRST_NAME: "Jose Alexandro",
      COURSE_NAME: "Advanced Engineering Mathematics (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Zaitsev",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salud",
      INSTRUCTOR_FIRST_NAME: "Roy",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masamayor",
      INSTRUCTOR_FIRST_NAME: "Frances Alyana",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pila",
      INSTRUCTOR_FIRST_NAME: "Miguel Angelo",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Templado",
      INSTRUCTOR_FIRST_NAME: "Beberly Joice",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enfestan",
      INSTRUCTOR_FIRST_NAME: "Deo Dominic",
      COURSE_NAME: "Electronics Circuits Analysis and Design (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amparo",
      INSTRUCTOR_FIRST_NAME: "Jannie Jasmine",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villamor",
      INSTRUCTOR_FIRST_NAME: "Rogen",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panes",
      INSTRUCTOR_FIRST_NAME: "Alliya Kim",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Altamera",
      INSTRUCTOR_FIRST_NAME: "Raine John",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Iñigo",
      INSTRUCTOR_FIRST_NAME: "Althea Shannara",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lanterna",
      INSTRUCTOR_FIRST_NAME: "Kyle Elizer",
      COURSE_NAME: "DC MACHINERY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Deedex",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Christian John",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Munar",
      INSTRUCTOR_FIRST_NAME: "Regil Kent",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallego",
      INSTRUCTOR_FIRST_NAME: "Jacob Nathaniel",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Aisha Priscille",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baldevia",
      INSTRUCTOR_FIRST_NAME: "Fate Raquiana",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pabiona",
      INSTRUCTOR_FIRST_NAME: "Cozy Haven",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siason",
      INSTRUCTOR_FIRST_NAME: "Eirene Eve",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Ysabella",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Nathan James",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doroin",
      INSTRUCTOR_FIRST_NAME: "Kienth Bryan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santiago",
      INSTRUCTOR_FIRST_NAME: "John Marco",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obcena",
      INSTRUCTOR_FIRST_NAME: "Tristan Rhyss",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Abdul Aziz",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilare",
      INSTRUCTOR_FIRST_NAME: "Aubrey Louise",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponte",
      INSTRUCTOR_FIRST_NAME: "Krystel Lou",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salar",
      INSTRUCTOR_FIRST_NAME: "John Cecilio",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelonio",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Ahron John",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ycasiano",
      INSTRUCTOR_FIRST_NAME: "Nishka Chelsea Marie",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ng",
      INSTRUCTOR_FIRST_NAME: "Keiji Jantzen",
      COURSE_NAME: "ECE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "James Nathaniel",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Renegado",
      INSTRUCTOR_FIRST_NAME: "Jan Andrew",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrau",
      INSTRUCTOR_FIRST_NAME: "Bletanya Soleil",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Derecho",
      INSTRUCTOR_FIRST_NAME: "Julia Marie",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Picardo",
      INSTRUCTOR_FIRST_NAME: "Aliyya Marie",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montaño",
      INSTRUCTOR_FIRST_NAME: "Janelle Marie",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Angelica Joyce",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacorda",
      INSTRUCTOR_FIRST_NAME: "Dave Ryan",
      COURSE_NAME: "Logic Circuits and Switching Theory (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Silva",
      INSTRUCTOR_FIRST_NAME: "Rona Vienne",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Geollegue",
      INSTRUCTOR_FIRST_NAME: "Ashley Nicole",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caramat",
      INSTRUCTOR_FIRST_NAME: "Jessa Mae",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamutan",
      INSTRUCTOR_FIRST_NAME: "Vincent Benedict",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maghinay",
      INSTRUCTOR_FIRST_NAME: "Alaine",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bucag",
      INSTRUCTOR_FIRST_NAME: "Johneah Xyza",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Grado",
      INSTRUCTOR_FIRST_NAME: "Erica Gabrielle",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Libong",
      INSTRUCTOR_FIRST_NAME: "Jungil Lai",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamacos",
      INSTRUCTOR_FIRST_NAME: "Eumelle Jeo",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nielsen-Kolding",
      INSTRUCTOR_FIRST_NAME: "Kim Jorgen",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Sofia Gabrielle",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cariño",
      INSTRUCTOR_FIRST_NAME: "Rheuby Grant",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cubillas",
      INSTRUCTOR_FIRST_NAME: "Giam Icah",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orcullo",
      INSTRUCTOR_FIRST_NAME: "Sean Louis",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cordero",
      INSTRUCTOR_FIRST_NAME: "Magdiel Faith",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yahya",
      INSTRUCTOR_FIRST_NAME: "Amir Adrian",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sansano",
      INSTRUCTOR_FIRST_NAME: "Ian Jay",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yamada",
      INSTRUCTOR_FIRST_NAME: "Prince Erick",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabe",
      INSTRUCTOR_FIRST_NAME: "Theresa Ellaine",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tacardon",
      INSTRUCTOR_FIRST_NAME: "Acchezza Clairhanne",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "San Miguel",
      INSTRUCTOR_FIRST_NAME: "Kim Justine",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangubat",
      INSTRUCTOR_FIRST_NAME: "Nicole Michaela",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fortinez",
      INSTRUCTOR_FIRST_NAME: "Joneth Jane",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabatingan",
      INSTRUCTOR_FIRST_NAME: "Shane",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Angel Kathleen",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gualberto",
      INSTRUCTOR_FIRST_NAME: "Jazper",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salcedo",
      INSTRUCTOR_FIRST_NAME: "Danna Alyssa",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Virrey",
      INSTRUCTOR_FIRST_NAME: "Gabriel Joshua",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pontillo",
      INSTRUCTOR_FIRST_NAME: "Zeff",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabahug",
      INSTRUCTOR_FIRST_NAME: "Emman Jearold",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simbajon",
      INSTRUCTOR_FIRST_NAME: "Joanna Camille",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rivero",
      INSTRUCTOR_FIRST_NAME: "Brent Steaven",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lomantas",
      INSTRUCTOR_FIRST_NAME: "Kirk Justin",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aglubo",
      INSTRUCTOR_FIRST_NAME: "Angel Joy",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Song",
      INSTRUCTOR_FIRST_NAME: "Jeongbin",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Mickaella Angela",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abasolo",
      INSTRUCTOR_FIRST_NAME: "Jhevia Shane",
      COURSE_NAME: "DATA STRUCTURES AND ALGORITHMS (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lauren",
      INSTRUCTOR_FIRST_NAME: "Rhys Lemuel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lavente",
      INSTRUCTOR_FIRST_NAME: "Francis Roland",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inoc",
      INSTRUCTOR_FIRST_NAME: "Karlo Romeo",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magno",
      INSTRUCTOR_FIRST_NAME: "Angelika Beatrice",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacinto",
      INSTRUCTOR_FIRST_NAME: "Jonah Fletz",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montenegro",
      INSTRUCTOR_FIRST_NAME: "Ken Aaron",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ano-Os",
      INSTRUCTOR_FIRST_NAME: "Angel Leanne",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Singh",
      INSTRUCTOR_FIRST_NAME: "Bipandeep",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alvarez",
      INSTRUCTOR_FIRST_NAME: "Adrian Shawn",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguirre",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duran",
      INSTRUCTOR_FIRST_NAME: "Arceli",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Namuag",
      INSTRUCTOR_FIRST_NAME: "Michael Louie",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dequito",
      INSTRUCTOR_FIRST_NAME: "Charles Kevin",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villarosa",
      INSTRUCTOR_FIRST_NAME: "Kharl Vincent",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amatorio",
      INSTRUCTOR_FIRST_NAME: "Ea Marie",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suarez",
      INSTRUCTOR_FIRST_NAME: "Allison Marie",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zosa",
      INSTRUCTOR_FIRST_NAME: "Jacob Kent Lorenze",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ledesma",
      INSTRUCTOR_FIRST_NAME: "Lance Louie Yazzer",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponteres",
      INSTRUCTOR_FIRST_NAME: "Reymon",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avanceña",
      INSTRUCTOR_FIRST_NAME: "James Matthew",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Edris",
      INSTRUCTOR_FIRST_NAME: "Ayman Tato",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferolin",
      INSTRUCTOR_FIRST_NAME: "Alekhine Fiona",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andaya",
      INSTRUCTOR_FIRST_NAME: "Robbie Al",
      COURSE_NAME: "Modulation and Coding Techniques Laboratory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lepardo",
      INSTRUCTOR_FIRST_NAME: "Gian Paolo",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sepe",
      INSTRUCTOR_FIRST_NAME: "Khara Angelie",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montiel",
      INSTRUCTOR_FIRST_NAME: "Estelle Maria",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Francisquete",
      INSTRUCTOR_FIRST_NAME: "Cyril Jay",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caños",
      INSTRUCTOR_FIRST_NAME: "Kenneth Jake",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alejandro",
      INSTRUCTOR_FIRST_NAME: "Andrei Louis",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Endaya",
      INSTRUCTOR_FIRST_NAME: "Maia Francine",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tolang",
      INSTRUCTOR_FIRST_NAME: "Audrey Gel Pristine",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Maxine Faith",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabio",
      INSTRUCTOR_FIRST_NAME: "Japs Miguel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lascuña",
      INSTRUCTOR_FIRST_NAME: "Princess Dorothy",
      COURSE_NAME: "CCNA Routing and Switching 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampongol",
      INSTRUCTOR_FIRST_NAME: "John Elpie Jerome",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Sean Gabriel",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Park",
      INSTRUCTOR_FIRST_NAME: "Hyomin",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Kian Brian",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Undang",
      INSTRUCTOR_FIRST_NAME: "Sheny Jane Kate",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chio",
      INSTRUCTOR_FIRST_NAME: "Alexandra",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Grado",
      INSTRUCTOR_FIRST_NAME: "Gillianne Corinne",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tolentino",
      INSTRUCTOR_FIRST_NAME: "John Joseph",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jagonase",
      INSTRUCTOR_FIRST_NAME: "Aaron Darci",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Daveson",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sambilan",
      INSTRUCTOR_FIRST_NAME: "Mike",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tenajeros",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Neneria",
      INSTRUCTOR_FIRST_NAME: "Guiannah Rose",
      COURSE_NAME: "Game Programming 3 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dinalo",
      INSTRUCTOR_FIRST_NAME: "Lander Jay",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Crescencio",
      INSTRUCTOR_FIRST_NAME: "Robby Franz",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Emperado",
      INSTRUCTOR_FIRST_NAME: "Ralf Vinz",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Neis",
      INSTRUCTOR_FIRST_NAME: "Jamaica Sofia",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obeja",
      INSTRUCTOR_FIRST_NAME: "Pamela Shane Cassandra",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimaano",
      INSTRUCTOR_FIRST_NAME: "Margarette Ysabel",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bayonla",
      INSTRUCTOR_FIRST_NAME: "Wensie Shaira",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padasas",
      INSTRUCTOR_FIRST_NAME: "Karl Deneb",
      COURSE_NAME: "Logic Circuits and Switching Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dasmariñas",
      INSTRUCTOR_FIRST_NAME: "Carlvy Love",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maglalang",
      INSTRUCTOR_FIRST_NAME: "Alyssa Joyce",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Angas",
      INSTRUCTOR_FIRST_NAME: "Mahaleah",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cole",
      INSTRUCTOR_FIRST_NAME: "Lianne",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mending",
      INSTRUCTOR_FIRST_NAME: "Einar Akil",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Porticos",
      INSTRUCTOR_FIRST_NAME: "Eiann Carlos",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apolonio",
      INSTRUCTOR_FIRST_NAME: "Janella",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Beltran",
      INSTRUCTOR_FIRST_NAME: "Miles",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jebulan",
      INSTRUCTOR_FIRST_NAME: "Charles John",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maganda",
      INSTRUCTOR_FIRST_NAME: "Louise Madison",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamalong",
      INSTRUCTOR_FIRST_NAME: "Ivy Faye Dianne",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Comisio",
      INSTRUCTOR_FIRST_NAME: "Ronald Christian",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuanan",
      INSTRUCTOR_FIRST_NAME: "Danica",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tampus",
      INSTRUCTOR_FIRST_NAME: "Jacob Israel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kipple",
      INSTRUCTOR_FIRST_NAME: "Shania Grace Angelika",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mabalot",
      INSTRUCTOR_FIRST_NAME: "Mark Angelo",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albento",
      INSTRUCTOR_FIRST_NAME: "Abraham Moises Monico",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jariol",
      INSTRUCTOR_FIRST_NAME: "Nhoel Gerard",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nagai",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zamora",
      INSTRUCTOR_FIRST_NAME: "Anna Margarite",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Santos",
      INSTRUCTOR_FIRST_NAME: "Jann Lynnard",
      COURSE_NAME: "Audio Design and Sound Engineering (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aledon",
      INSTRUCTOR_FIRST_NAME: "Warren Cris",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labatorio",
      INSTRUCTOR_FIRST_NAME: "Raneil",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cerlos",
      INSTRUCTOR_FIRST_NAME: "Shawn Michael",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Lee Juancho",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Demonteverde",
      INSTRUCTOR_FIRST_NAME: "Dan Jason",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Legara",
      INSTRUCTOR_FIRST_NAME: "John Lorenz",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Junsay",
      INSTRUCTOR_FIRST_NAME: "Kimberly",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deluvio",
      INSTRUCTOR_FIRST_NAME: "Erlnest Eugene",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samuya",
      INSTRUCTOR_FIRST_NAME: "John Russell",
      COURSE_NAME: "Global Culture & Tourism Geography",
    },
    {
      INSTRUCTOR_LAST_NAME: "Velasquez",
      INSTRUCTOR_FIRST_NAME: "Rovic",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dillera",
      INSTRUCTOR_FIRST_NAME: "Robert James",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samama",
      INSTRUCTOR_FIRST_NAME: "Jannah Ayesha",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guiral",
      INSTRUCTOR_FIRST_NAME: "Denniel Jake",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palo",
      INSTRUCTOR_FIRST_NAME: "Mary Kirsten Florelle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tumanda",
      INSTRUCTOR_FIRST_NAME: "Sophia Mikaela",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pataray",
      INSTRUCTOR_FIRST_NAME: "Alexandra Nicole",
      COURSE_NAME: "Electronics Circuits Analysis and Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lavalle",
      INSTRUCTOR_FIRST_NAME: "Carl Shem",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lungay",
      INSTRUCTOR_FIRST_NAME: "Ma. Patricia",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mosqueda_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Karlo Isagani",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bitor",
      INSTRUCTOR_FIRST_NAME: "Rolando",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alovera",
      INSTRUCTOR_FIRST_NAME: "Kurvee Chum",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lawagon",
      INSTRUCTOR_FIRST_NAME: "Hugh Louis",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Damondamon",
      INSTRUCTOR_FIRST_NAME: "Roland Dave",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Javellana",
      INSTRUCTOR_FIRST_NAME: "Ray Christian Alfred",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cata-Al",
      INSTRUCTOR_FIRST_NAME: "Jc-Rey",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabrillo",
      INSTRUCTOR_FIRST_NAME: "Bono",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jandoc",
      INSTRUCTOR_FIRST_NAME: "Arkirly",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escalicas",
      INSTRUCTOR_FIRST_NAME: "Marcus Christian",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deduyo",
      INSTRUCTOR_FIRST_NAME: "Azriel Peter",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escabarte",
      INSTRUCTOR_FIRST_NAME: "Holyanna Mikaela",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villasana",
      INSTRUCTOR_FIRST_NAME: "Dyck Shane",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabo",
      INSTRUCTOR_FIRST_NAME: "Izabela Anne",
      COURSE_NAME: "CCNA Routing and Switching 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maypa",
      INSTRUCTOR_FIRST_NAME: "Lorenzo",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malnegro",
      INSTRUCTOR_FIRST_NAME: "Josh Andrei",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rocha",
      INSTRUCTOR_FIRST_NAME: "Jj Gabriel",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumawid",
      INSTRUCTOR_FIRST_NAME: "Shekinah Alexia",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rebucas",
      INSTRUCTOR_FIRST_NAME: "Leyanah Glenn",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dequito",
      INSTRUCTOR_FIRST_NAME: "Stephany Nicole",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ye",
      INSTRUCTOR_FIRST_NAME: "Su Jin",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zubieta",
      INSTRUCTOR_FIRST_NAME: "David Sebastian",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asegurado",
      INSTRUCTOR_FIRST_NAME: "Jassen Grace",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bausa",
      INSTRUCTOR_FIRST_NAME: "Francis Anthony",
      COURSE_NAME: "EE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balansag",
      INSTRUCTOR_FIRST_NAME: "Alysza Mae",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kagawa",
      INSTRUCTOR_FIRST_NAME: "Isamu Elmer",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orbita",
      INSTRUCTOR_FIRST_NAME: "Handly",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gotardo",
      INSTRUCTOR_FIRST_NAME: "Tracy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monroid",
      INSTRUCTOR_FIRST_NAME: "Marcus Owen",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diente",
      INSTRUCTOR_FIRST_NAME: "Jann Arvy",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Calvin",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Domaoan",
      INSTRUCTOR_FIRST_NAME: "Ryl Janrey",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benitez",
      INSTRUCTOR_FIRST_NAME: "Jhastine Joshel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lizada",
      INSTRUCTOR_FIRST_NAME: "Cher Riemkje-Marie",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magdamo",
      INSTRUCTOR_FIRST_NAME: "Lewis Carl",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calo",
      INSTRUCTOR_FIRST_NAME: "Jenzel Hanz",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dulay",
      INSTRUCTOR_FIRST_NAME: "Adrei Aron",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacete",
      INSTRUCTOR_FIRST_NAME: "Andreas",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumaday",
      INSTRUCTOR_FIRST_NAME: "Khryss Dale Ryve",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gomez",
      INSTRUCTOR_FIRST_NAME: "Emmanuel Joaquin",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obelidhon",
      INSTRUCTOR_FIRST_NAME: "Ritzel Gwen",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lasalita",
      INSTRUCTOR_FIRST_NAME: "Patrick Josh",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lanozo",
      INSTRUCTOR_FIRST_NAME: "Jasper Kyle",
      COURSE_NAME: "Artificial Intelligence in Games (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antipuesto",
      INSTRUCTOR_FIRST_NAME: "Alliya Casandra",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oncada",
      INSTRUCTOR_FIRST_NAME: "Rohan Delfin",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gultiano",
      INSTRUCTOR_FIRST_NAME: "Karl Brianne",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Carlo Lance",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Loyola",
      INSTRUCTOR_FIRST_NAME: "Christian Joed",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardo",
      INSTRUCTOR_FIRST_NAME: "Gabriel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coquilla",
      INSTRUCTOR_FIRST_NAME: "Henrik Rafael",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acuevas",
      INSTRUCTOR_FIRST_NAME: "Yvonne Monique",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garte",
      INSTRUCTOR_FIRST_NAME: "Eligio Angelo",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Po",
      INSTRUCTOR_FIRST_NAME: "Ric Julian",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cobalida",
      INSTRUCTOR_FIRST_NAME: "Juliane Rae",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rojas",
      INSTRUCTOR_FIRST_NAME: "Vynish",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Jade",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Rhynjam",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Candol",
      INSTRUCTOR_FIRST_NAME: "Mark Dimple",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solanoy",
      INSTRUCTOR_FIRST_NAME: "Franco Miguel",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enonaria",
      INSTRUCTOR_FIRST_NAME: "Benedict Dale",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sy",
      INSTRUCTOR_FIRST_NAME: "Kate Andrea",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agustin",
      INSTRUCTOR_FIRST_NAME: "Ayra Elisha",
      COURSE_NAME: "ECE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guillano",
      INSTRUCTOR_FIRST_NAME: "Thea Faith",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inding",
      INSTRUCTOR_FIRST_NAME: "Anne Margaret",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Evangelista",
      INSTRUCTOR_FIRST_NAME: "Mark Daniel",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atillo",
      INSTRUCTOR_FIRST_NAME: "Gian Norman",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abas",
      INSTRUCTOR_FIRST_NAME: "Windy",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mante",
      INSTRUCTOR_FIRST_NAME: "Edder Loreña",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Artos",
      INSTRUCTOR_FIRST_NAME: "William",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Española",
      INSTRUCTOR_FIRST_NAME: "Altaire Faith",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alian",
      INSTRUCTOR_FIRST_NAME: "Ahmed Al-Rashid",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biruar",
      INSTRUCTOR_FIRST_NAME: "Almuhaymin",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Candelario",
      INSTRUCTOR_FIRST_NAME: "Philip Greg",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Braganza",
      INSTRUCTOR_FIRST_NAME: "Hannah Princess",
      COURSE_NAME: "DATA STRUCTURES AND ALGORITHMS (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernolo",
      INSTRUCTOR_FIRST_NAME: "Hillary Jane",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yosores",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Bong",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agrazamendez",
      INSTRUCTOR_FIRST_NAME: "Ethan Mariacci",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villar",
      INSTRUCTOR_FIRST_NAME: "Mark Laurence",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estampa",
      INSTRUCTOR_FIRST_NAME: "Kervy Erl",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moncay",
      INSTRUCTOR_FIRST_NAME: "Kim Caesar",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sustiguer",
      INSTRUCTOR_FIRST_NAME: "Karl Cherner",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Arvin Jay",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cordero",
      INSTRUCTOR_FIRST_NAME: "Yuki",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diosanta",
      INSTRUCTOR_FIRST_NAME: "Allynah",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coquilla",
      INSTRUCTOR_FIRST_NAME: "Rica Mae Shanika",
      COURSE_NAME: "Project Feasibility (Field)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Ronald Joshua",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villalobos",
      INSTRUCTOR_FIRST_NAME: "Lorenzo Jon",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yee",
      INSTRUCTOR_FIRST_NAME: "Vanessa Marie",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dampac",
      INSTRUCTOR_FIRST_NAME: "Mohaimen",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacono",
      INSTRUCTOR_FIRST_NAME: "Almarc",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abubakar",
      INSTRUCTOR_FIRST_NAME: "Abdulrahman",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balibay",
      INSTRUCTOR_FIRST_NAME: "Tamara Brianne",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Servillon",
      INSTRUCTOR_FIRST_NAME: "Rafael Richard",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almazan",
      INSTRUCTOR_FIRST_NAME: "Alice Kate",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "AMPER",
      INSTRUCTOR_FIRST_NAME: "DINELLE AUBREY L.",
      COURSE_NAME: "Mathematics for Engineers (Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orillos",
      INSTRUCTOR_FIRST_NAME: "Denie Bev'Z",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catigara",
      INSTRUCTOR_FIRST_NAME: "Jullian",
      COURSE_NAME: "ECE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "King Ray B",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mallorca",
      INSTRUCTOR_FIRST_NAME: "John Wilbert N",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dasas",
      INSTRUCTOR_FIRST_NAME: "Princess Alyssa",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamao",
      INSTRUCTOR_FIRST_NAME: "Jonreff",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pagcaliwagan",
      INSTRUCTOR_FIRST_NAME: "Aeron Lloyd A",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ebate",
      INSTRUCTOR_FIRST_NAME: "Maria Alliyah",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tozaki",
      INSTRUCTOR_FIRST_NAME: "Hiroshi",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vicente",
      INSTRUCTOR_FIRST_NAME: "Alvin John",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masinading",
      INSTRUCTOR_FIRST_NAME: "Arianne",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blane",
      INSTRUCTOR_FIRST_NAME: "Zyrille",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocampo",
      INSTRUCTOR_FIRST_NAME: "Don Michael Simon",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wu",
      INSTRUCTOR_FIRST_NAME: "Vinz Christian",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hermosura",
      INSTRUCTOR_FIRST_NAME: "Earl Josh",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Noble",
      INSTRUCTOR_FIRST_NAME: "Cristopher Josef",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zuniega",
      INSTRUCTOR_FIRST_NAME: "Dholfter",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muller",
      INSTRUCTOR_FIRST_NAME: "Narima",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dismas",
      INSTRUCTOR_FIRST_NAME: "Jan Kyle",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Casiding",
      INSTRUCTOR_FIRST_NAME: "Alberto",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serrano",
      INSTRUCTOR_FIRST_NAME: "Alainna Love D",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toma",
      INSTRUCTOR_FIRST_NAME: "Christian Tsugumi",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antoniano",
      INSTRUCTOR_FIRST_NAME: "Giesel Mae",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sulapas",
      INSTRUCTOR_FIRST_NAME: "Lech Jean Monnet",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Reyes",
      INSTRUCTOR_FIRST_NAME: "Kane Marion",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Airyn Nicole",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Patricia Anne Marie",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kikuchi",
      INSTRUCTOR_FIRST_NAME: "Mikio",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gedorio",
      INSTRUCTOR_FIRST_NAME: "Justine Kyla",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Devera",
      INSTRUCTOR_FIRST_NAME: "Kyle Vince",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Regalado",
      INSTRUCTOR_FIRST_NAME: "Adrian Jade",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ammak",
      INSTRUCTOR_FIRST_NAME: "Azfar",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pangan",
      INSTRUCTOR_FIRST_NAME: "Ted Truman",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flauta",
      INSTRUCTOR_FIRST_NAME: "Alve Adriane",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biagcong",
      INSTRUCTOR_FIRST_NAME: "Wed",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Melgazo",
      INSTRUCTOR_FIRST_NAME: "Lei Feb Damien",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Punzalan",
      INSTRUCTOR_FIRST_NAME: "Elaine",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yanson",
      INSTRUCTOR_FIRST_NAME: "Alyanna Nicole",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lineses",
      INSTRUCTOR_FIRST_NAME: "Genesis Xianne",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Columbres",
      INSTRUCTOR_FIRST_NAME: "Lendale Paul",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Umbrosa",
      INSTRUCTOR_FIRST_NAME: "Mariene",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alabastro",
      INSTRUCTOR_FIRST_NAME: "Claire Jasmine Gabrielle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Sharlynne",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabato",
      INSTRUCTOR_FIRST_NAME: "Lendon John",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Aki",
      COURSE_NAME: "Thesis 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alimes",
      INSTRUCTOR_FIRST_NAME: "Janbern",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barcenilla",
      INSTRUCTOR_FIRST_NAME: "Khamir Carlo",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tulawie",
      INSTRUCTOR_FIRST_NAME: "Jihad",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Kyrie Allyson",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ausa",
      INSTRUCTOR_FIRST_NAME: "Wellabel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lanoza",
      INSTRUCTOR_FIRST_NAME: "Hariette Louis",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hobayan",
      INSTRUCTOR_FIRST_NAME: "Harp Errol",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labuga",
      INSTRUCTOR_FIRST_NAME: "Angela Mae",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chan",
      INSTRUCTOR_FIRST_NAME: "Matthew Albert",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tesoro",
      INSTRUCTOR_FIRST_NAME: "David",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Usman",
      INSTRUCTOR_FIRST_NAME: "Muzzammil",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saliot",
      INSTRUCTOR_FIRST_NAME: "Ruben",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alboroto",
      INSTRUCTOR_FIRST_NAME: "Rojer Angelo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Popatco",
      INSTRUCTOR_FIRST_NAME: "Ryan Joseph",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguirre",
      INSTRUCTOR_FIRST_NAME: "Alfonso Nicolas",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Beltran",
      INSTRUCTOR_FIRST_NAME: "Alexes Glenn",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabel",
      INSTRUCTOR_FIRST_NAME: "Caesar",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palces",
      INSTRUCTOR_FIRST_NAME: "Keith Bryle",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Liston",
      INSTRUCTOR_FIRST_NAME: "Janssen Edu",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calubag",
      INSTRUCTOR_FIRST_NAME: "John Lloyd",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiobe",
      INSTRUCTOR_FIRST_NAME: "Uelre John",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blanco",
      INSTRUCTOR_FIRST_NAME: "Jerry Vincent",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hilario",
      INSTRUCTOR_FIRST_NAME: "Dulce Marie",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Jessa Marie",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aliperio",
      INSTRUCTOR_FIRST_NAME: "Mark Gino",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Julian Clement",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serencio",
      INSTRUCTOR_FIRST_NAME: "Jarell",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siloterio",
      INSTRUCTOR_FIRST_NAME: "Philip Centene",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocdenaria",
      INSTRUCTOR_FIRST_NAME: "Jose Marie",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Autentico",
      INSTRUCTOR_FIRST_NAME: "Michelle",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cerna",
      INSTRUCTOR_FIRST_NAME: "Patrick",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alano",
      INSTRUCTOR_FIRST_NAME: "Jaimie Lynn",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Frayna",
      INSTRUCTOR_FIRST_NAME: "Rexter Aino",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "John Paul",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padayao",
      INSTRUCTOR_FIRST_NAME: "Jowett",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lolo",
      INSTRUCTOR_FIRST_NAME: "Jayson",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandap",
      INSTRUCTOR_FIRST_NAME: "Cedric Joseph",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Famoso",
      INSTRUCTOR_FIRST_NAME: "Josephine May Grace",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bailon",
      INSTRUCTOR_FIRST_NAME: "Kristine",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Lee Hong",
      COURSE_NAME: "Global Culture & Tourism Geography",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ho",
      INSTRUCTOR_FIRST_NAME: "Charles",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Braceros",
      INSTRUCTOR_FIRST_NAME: "Juliet",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arapoc",
      INSTRUCTOR_FIRST_NAME: "Beatrice Jan",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Real",
      INSTRUCTOR_FIRST_NAME: "Shiena Mae",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asna",
      INSTRUCTOR_FIRST_NAME: "Cheny",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Ramon",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maquilan",
      INSTRUCTOR_FIRST_NAME: "Reece Quiper",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Daryl Niel",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solomon",
      INSTRUCTOR_FIRST_NAME: "Kurt Eman Cristofher",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcos",
      INSTRUCTOR_FIRST_NAME: "Joenofrey Charles",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galendez",
      INSTRUCTOR_FIRST_NAME: "Lance Angelo",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toribio",
      INSTRUCTOR_FIRST_NAME: "Luis Antonio",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manual",
      INSTRUCTOR_FIRST_NAME: "Althea Joyce",
      COURSE_NAME: "ECE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuñado",
      INSTRUCTOR_FIRST_NAME: "Prince Joseph",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aretaño",
      INSTRUCTOR_FIRST_NAME: "Juliano",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pabilona",
      INSTRUCTOR_FIRST_NAME: "Aira Mae",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Imam",
      INSTRUCTOR_FIRST_NAME: "Bai Shaiden Fhatmailah",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabanlit",
      INSTRUCTOR_FIRST_NAME: "Jasmine Sophia",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te Eng Fo",
      INSTRUCTOR_FIRST_NAME: "Sophia Andrea",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uba",
      INSTRUCTOR_FIRST_NAME: "Pauline Joi",
      COURSE_NAME: "Thesis 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barquin",
      INSTRUCTOR_FIRST_NAME: "Angel Kishleb",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barredo",
      INSTRUCTOR_FIRST_NAME: "Eula Glyne",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Powell",
      INSTRUCTOR_FIRST_NAME: "Alexander John",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gaitano",
      INSTRUCTOR_FIRST_NAME: "Ariel Angelo",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañas",
      INSTRUCTOR_FIRST_NAME: "Charles Kristoffer",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ledesma",
      INSTRUCTOR_FIRST_NAME: "Carl Luis",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zaragoza",
      INSTRUCTOR_FIRST_NAME: "Renz Anthony",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Dios",
      INSTRUCTOR_FIRST_NAME: "Von Daniel",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Zane Andrei",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ratonel",
      INSTRUCTOR_FIRST_NAME: "Marc Joseph",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Taher",
      INSTRUCTOR_FIRST_NAME: "Aniah",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montes",
      INSTRUCTOR_FIRST_NAME: "Marl Vincent",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Julius Gabriel",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Leo Paul",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navarro",
      INSTRUCTOR_FIRST_NAME: "Loyola Joy Penelope",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arcamo",
      INSTRUCTOR_FIRST_NAME: "Janna Crissile",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saluna",
      INSTRUCTOR_FIRST_NAME: "Kenneth Charles",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hofileña",
      INSTRUCTOR_FIRST_NAME: "Flerida Marie",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Angas",
      INSTRUCTOR_FIRST_NAME: "Datu Al-Mannar",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diwa",
      INSTRUCTOR_FIRST_NAME: "Nicole",
      COURSE_NAME: "CCNA Routing and Switching 1(Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Popatco",
      INSTRUCTOR_FIRST_NAME: "Meryl Joy",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Jerenol",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macahilo",
      INSTRUCTOR_FIRST_NAME: "Kurt Keinshen",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sapi",
      INSTRUCTOR_FIRST_NAME: "Stephanie Jane",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Alfred Nico",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marfori",
      INSTRUCTOR_FIRST_NAME: "Carlos Miguel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagang",
      INSTRUCTOR_FIRST_NAME: "Jericho",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balacuit",
      INSTRUCTOR_FIRST_NAME: "Wenzel Leinhard",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Julia Carys",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macaso",
      INSTRUCTOR_FIRST_NAME: "Jan Michael",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Menguita",
      INSTRUCTOR_FIRST_NAME: "Adrian Carlo",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muyco",
      INSTRUCTOR_FIRST_NAME: "Miguel Angelo",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Ethan Lance",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dollosa",
      INSTRUCTOR_FIRST_NAME: "Josef Antoni",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Samuel",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Loronio",
      INSTRUCTOR_FIRST_NAME: "Kristine Joy",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parojinog",
      INSTRUCTOR_FIRST_NAME: "Preanne Nicole",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabali",
      INSTRUCTOR_FIRST_NAME: "Johann Louise",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tañedo",
      INSTRUCTOR_FIRST_NAME: "Hanz Leigh",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chan",
      INSTRUCTOR_FIRST_NAME: "Daniel",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balingcos",
      INSTRUCTOR_FIRST_NAME: "Jeryl Heart",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ceniza",
      INSTRUCTOR_FIRST_NAME: "Ruper Art",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aranzamendez",
      INSTRUCTOR_FIRST_NAME: "Gabriel",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacomille",
      INSTRUCTOR_FIRST_NAME: "Bryan",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelicano",
      INSTRUCTOR_FIRST_NAME: "Carl Miguel",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ayucan",
      INSTRUCTOR_FIRST_NAME: "Ayanna Keisha",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacorda",
      INSTRUCTOR_FIRST_NAME: "Edrean",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maghuyop",
      INSTRUCTOR_FIRST_NAME: "Harvin Lee",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bisera",
      INSTRUCTOR_FIRST_NAME: "Florence Yvon",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacaña",
      INSTRUCTOR_FIRST_NAME: "Jeane Anton Van",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boiser",
      INSTRUCTOR_FIRST_NAME: "Virgianne Prissca",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Patron",
      INSTRUCTOR_FIRST_NAME: "Johannes Lorenzo",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Henry",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peralta",
      INSTRUCTOR_FIRST_NAME: "Jessica",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabasaan",
      INSTRUCTOR_FIRST_NAME: "Cyrus Just",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macabenlar",
      INSTRUCTOR_FIRST_NAME: "Richard",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mayor",
      INSTRUCTOR_FIRST_NAME: "Ma. Irish Michelle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Marie Christiene",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panalondong",
      INSTRUCTOR_FIRST_NAME: "Mohammad Adnan",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacatang",
      INSTRUCTOR_FIRST_NAME: "Lorenzo",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lindo",
      INSTRUCTOR_FIRST_NAME: "Elcid Jones",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "ABEJO",
      INSTRUCTOR_FIRST_NAME: "ROSE ANTONETTE",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valenciano",
      INSTRUCTOR_FIRST_NAME: "Joji",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cubero",
      INSTRUCTOR_FIRST_NAME: "Luningning",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Logarta",
      INSTRUCTOR_FIRST_NAME: "Earl James",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pastor",
      INSTRUCTOR_FIRST_NAME: "Edwin Edward",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pontongan",
      INSTRUCTOR_FIRST_NAME: "Jireh Joy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mijares",
      INSTRUCTOR_FIRST_NAME: "Camilo Paulo",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sahagun Jr.",
      INSTRUCTOR_FIRST_NAME: "Reynaldo",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Teams",
      INSTRUCTOR_FIRST_NAME: "Microsoft",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Historia",
      INSTRUCTOR_FIRST_NAME: "Angelo Bon",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jover",
      INSTRUCTOR_FIRST_NAME: "Jv",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magno",
      INSTRUCTOR_FIRST_NAME: "Carlo",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pantonial",
      INSTRUCTOR_FIRST_NAME: "Janine",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galban",
      INSTRUCTOR_FIRST_NAME: "Liam Jason",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macapas",
      INSTRUCTOR_FIRST_NAME: "Danielle Angeline",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Al-Rashidi",
      INSTRUCTOR_FIRST_NAME: "Fahad Jassem",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacalos_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mary Jane",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abao",
      INSTRUCTOR_FIRST_NAME: "Hegen",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pena",
      INSTRUCTOR_FIRST_NAME: "Ronnel",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galos",
      INSTRUCTOR_FIRST_NAME: "Wynvell",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sahagun",
      INSTRUCTOR_FIRST_NAME: "Reynaldo",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Beverly Jane",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Torres",
      INSTRUCTOR_FIRST_NAME: "John Anthony",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Kyle Vincent",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valiente",
      INSTRUCTOR_FIRST_NAME: "Mandy Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Namuag",
      INSTRUCTOR_FIRST_NAME: "Michelle Anne",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yamas",
      INSTRUCTOR_FIRST_NAME: "Issha Marie",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Crisologo",
      INSTRUCTOR_FIRST_NAME: "Henriford",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rea",
      INSTRUCTOR_FIRST_NAME: "Prinzes Cleo Jean",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anciano",
      INSTRUCTOR_FIRST_NAME: "Donatella",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rutjens",
      INSTRUCTOR_FIRST_NAME: "Pearl",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Allida",
      INSTRUCTOR_FIRST_NAME: "Leanndro Ian",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serrano",
      INSTRUCTOR_FIRST_NAME: "Alainna Love",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diego",
      INSTRUCTOR_FIRST_NAME: "Beckham",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ompoy",
      INSTRUCTOR_FIRST_NAME: "Jhen Kenette",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Napala",
      INSTRUCTOR_FIRST_NAME: "Abegael Ann",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tongco",
      INSTRUCTOR_FIRST_NAME: "Dawn Florenz",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pepito",
      INSTRUCTOR_FIRST_NAME: "Kate Pauline",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yunsay",
      INSTRUCTOR_FIRST_NAME: "Shandee Mae",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paculio",
      INSTRUCTOR_FIRST_NAME: "Lady Armae",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gayta",
      INSTRUCTOR_FIRST_NAME: "Tyra Monique",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ofilan",
      INSTRUCTOR_FIRST_NAME: "Princess Ivy",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luayon",
      INSTRUCTOR_FIRST_NAME: "Arnold",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banaag",
      INSTRUCTOR_FIRST_NAME: "Mikaela Kate",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Paolo Jose Mari",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nismal",
      INSTRUCTOR_FIRST_NAME: "Klyo",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuya",
      INSTRUCTOR_FIRST_NAME: "Jester Roland",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villaganes",
      INSTRUCTOR_FIRST_NAME: "Irene Cae",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Gwen Stefani",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "LINGASA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JARELYN G.",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tacsanan_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Alma Rose",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Angelo Lieann",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balaque",
      INSTRUCTOR_FIRST_NAME: "Brent",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tolosa",
      INSTRUCTOR_FIRST_NAME: "Jeanine Abigail",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rojas",
      INSTRUCTOR_FIRST_NAME: "Jazelle",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ranara",
      INSTRUCTOR_FIRST_NAME: "John Raves",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Betil",
      INSTRUCTOR_FIRST_NAME: "Keinah",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Junsay",
      INSTRUCTOR_FIRST_NAME: "Lorenzo James",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ma",
      INSTRUCTOR_FIRST_NAME: "Lechen",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mabale",
      INSTRUCTOR_FIRST_NAME: "Lyjie",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Forro",
      INSTRUCTOR_FIRST_NAME: "Lou Raj Albert",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alarcon",
      INSTRUCTOR_FIRST_NAME: "Rhythm James",
      COURSE_NAME: "Electronics Circuits Analysis and Design (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gentallan",
      INSTRUCTOR_FIRST_NAME: "Cherrian James",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Kim Gabrielle",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Lance Amir",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mori",
      INSTRUCTOR_FIRST_NAME: "Sofia",
      COURSE_NAME: "IE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Autentico_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Michelle",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jomen",
      INSTRUCTOR_FIRST_NAME: "Carl Joel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ulama",
      INSTRUCTOR_FIRST_NAME: "Hallena Shyren",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barlaan",
      INSTRUCTOR_FIRST_NAME: "James Jireh",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "version",
      INSTRUCTOR_FIRST_NAME: "trial",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Gelli Arabelle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomawis",
      INSTRUCTOR_FIRST_NAME: "Alexander",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marchan",
      INSTRUCTOR_FIRST_NAME: "Josh Van Kyle",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arranguez",
      INSTRUCTOR_FIRST_NAME: "Kenneth",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomawis",
      INSTRUCTOR_FIRST_NAME: "Mohammed Fayez",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nielsen",
      INSTRUCTOR_FIRST_NAME: "Mathias",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amper",
      INSTRUCTOR_FIRST_NAME: "Rose Eve Danele",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "ULO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "LOUISA ANGELICA",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estabillo",
      INSTRUCTOR_FIRST_NAME: "Allen George",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bandalan",
      INSTRUCTOR_FIRST_NAME: "Christian Dave",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jungoy",
      INSTRUCTOR_FIRST_NAME: "Chenia Angeillu",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Angoy",
      INSTRUCTOR_FIRST_NAME: "Cherryanne",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamauag",
      INSTRUCTOR_FIRST_NAME: "Lucky Ceasar",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cordero",
      INSTRUCTOR_FIRST_NAME: "Mico",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrolino",
      INSTRUCTOR_FIRST_NAME: "Seanette",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bedua",
      INSTRUCTOR_FIRST_NAME: "Evan Jane",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atienza",
      INSTRUCTOR_FIRST_NAME: "Jose Carlos Gabriel",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apostol",
      INSTRUCTOR_FIRST_NAME: "Jonathan Franz Daniel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vinson",
      INSTRUCTOR_FIRST_NAME: "Jazztin Jaymz Karlo",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peñafiel",
      INSTRUCTOR_FIRST_NAME: "Jessa Mae",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abarintos",
      INSTRUCTOR_FIRST_NAME: "Kenette",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabal",
      INSTRUCTOR_FIRST_NAME: "Mansor",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daza",
      INSTRUCTOR_FIRST_NAME: "Rick Mary Angeli",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Notorio",
      INSTRUCTOR_FIRST_NAME: "Xyrelle",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barcenilla",
      INSTRUCTOR_FIRST_NAME: "Aldwin Josh",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacalan",
      INSTRUCTOR_FIRST_NAME: "Joyce Therese",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alforque",
      INSTRUCTOR_FIRST_NAME: "Kristine",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cerebo",
      INSTRUCTOR_FIRST_NAME: "Karl Justin",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Musong",
      INSTRUCTOR_FIRST_NAME: "Kenneth James",
      COURSE_NAME: "CCNA Routing and Switching 1(Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oro",
      INSTRUCTOR_FIRST_NAME: "Lee Ellison",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medico",
      INSTRUCTOR_FIRST_NAME: "Mary Joy",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Edurece",
      INSTRUCTOR_FIRST_NAME: "Queenie Thea",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "CULANAG_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ZANGIE LOU",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "BALO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ABELIOSRE L.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagunde",
      INSTRUCTOR_FIRST_NAME: "Angelo Bencent",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Andre Von",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Logronio",
      INSTRUCTOR_FIRST_NAME: "Dezri Brielle",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nailes",
      INSTRUCTOR_FIRST_NAME: "Gwyneth Dorothy",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salem",
      INSTRUCTOR_FIRST_NAME: "Glory",
      COURSE_NAME: "Game Programming 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Danao",
      INSTRUCTOR_FIRST_NAME: "Julianne Kaye",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "John Laurence",
      COURSE_NAME: "Game Programming 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Openia",
      INSTRUCTOR_FIRST_NAME: "Joshua Philip",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guerra",
      INSTRUCTOR_FIRST_NAME: "Maris Angellaine",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atienza",
      INSTRUCTOR_FIRST_NAME: "Alexander Hamilton",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Godilano",
      INSTRUCTOR_FIRST_NAME: "Ezrha",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibrahim",
      INSTRUCTOR_FIRST_NAME: "Datu Nasrodin",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baliling",
      INSTRUCTOR_FIRST_NAME: "Cheena",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gador",
      INSTRUCTOR_FIRST_NAME: "Edfrancis Kristoffer",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Consolacion",
      INSTRUCTOR_FIRST_NAME: "Francis Frederick",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baring",
      INSTRUCTOR_FIRST_NAME: "Franz Wendell",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Hans Joshua",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sayo",
      INSTRUCTOR_FIRST_NAME: "Kim Brian",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andres",
      INSTRUCTOR_FIRST_NAME: "Mica Angela",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumianjang",
      INSTRUCTOR_FIRST_NAME: "Nourul Ainy",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Supiter",
      INSTRUCTOR_FIRST_NAME: "Raul Joshua",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chang",
      INSTRUCTOR_FIRST_NAME: "Stephen John",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bantug",
      INSTRUCTOR_FIRST_NAME: "Jan Andre",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pascual",
      INSTRUCTOR_FIRST_NAME: "Joshua Isagani",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soria",
      INSTRUCTOR_FIRST_NAME: "Kissy",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Mat Makisig",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "PACIOL_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "REY",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Libres",
      INSTRUCTOR_FIRST_NAME: "Anne Francisca",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Guzman",
      INSTRUCTOR_FIRST_NAME: "Allen Joseph",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corona",
      INSTRUCTOR_FIRST_NAME: "Hezekiah",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Udagawa",
      INSTRUCTOR_FIRST_NAME: "Miki",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espina",
      INSTRUCTOR_FIRST_NAME: "Shainna",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arellano",
      INSTRUCTOR_FIRST_NAME: "Carl Jaeson",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Day",
      INSTRUCTOR_FIRST_NAME: "Adrian Dominic",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ordaneza",
      INSTRUCTOR_FIRST_NAME: "Maria Eliesza Joy",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lolo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jayson",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buenacosa",
      INSTRUCTOR_FIRST_NAME: "Alexander Miguel",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Bernice Janeane",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jao",
      INSTRUCTOR_FIRST_NAME: "Hubert Jety",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Limocon",
      INSTRUCTOR_FIRST_NAME: "Jhon Trever",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Latras",
      INSTRUCTOR_FIRST_NAME: "Nizah Venson",
      COURSE_NAME: "Mathematics for Engineers (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barbosa",
      INSTRUCTOR_FIRST_NAME: "Princess  Samantha",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biruar",
      INSTRUCTOR_FIRST_NAME: "Iezann",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sohal",
      INSTRUCTOR_FIRST_NAME: "Haritek",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lugo",
      INSTRUCTOR_FIRST_NAME: "Vennjy",
      COURSE_NAME: "Principles of 2D Animation (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ladeza",
      INSTRUCTOR_FIRST_NAME: "Jhea Louise",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chou",
      INSTRUCTOR_FIRST_NAME: "Ivana Mae",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabatian",
      INSTRUCTOR_FIRST_NAME: "Jireh",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balahay",
      INSTRUCTOR_FIRST_NAME: "Ellana Beatrice Cassini",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puerto",
      INSTRUCTOR_FIRST_NAME: "Earl Dane",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galvez",
      INSTRUCTOR_FIRST_NAME: "Hannah Lynn",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navat",
      INSTRUCTOR_FIRST_NAME: "Hanna Mae",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bujawe",
      INSTRUCTOR_FIRST_NAME: "Mark Zairo",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pasok",
      INSTRUCTOR_FIRST_NAME: "Vince Jerex",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Desabilla",
      INSTRUCTOR_FIRST_NAME: "Cherry Ann",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caballero",
      INSTRUCTOR_FIRST_NAME: "Angelli Diane",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sese",
      INSTRUCTOR_FIRST_NAME: "Julius",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borres",
      INSTRUCTOR_FIRST_NAME: "Rianina",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student",
      INSTRUCTOR_FIRST_NAME: "Chrstine",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malaga",
      INSTRUCTOR_FIRST_NAME: "Dibby Thea",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zamora",
      INSTRUCTOR_FIRST_NAME: "Frankie Angelo",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aleria",
      INSTRUCTOR_FIRST_NAME: "Joshua Benz",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bayhon",
      INSTRUCTOR_FIRST_NAME: "Jason",
      COURSE_NAME: "Principles of 2D Animation (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mata",
      INSTRUCTOR_FIRST_NAME: "Jose Carlos",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tero",
      INSTRUCTOR_FIRST_NAME: "Karylle Pauline",
      COURSE_NAME: "Audio Design and Sound Engineering (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fandiño",
      INSTRUCTOR_FIRST_NAME: "Raymund",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubia",
      INSTRUCTOR_FIRST_NAME: "Samantha",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zoltberger",
      INSTRUCTOR_FIRST_NAME: "Simon",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orlanes",
      INSTRUCTOR_FIRST_NAME: "Zosimo",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Joanna Eve Alexandra",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim Jr.",
      INSTRUCTOR_FIRST_NAME: "Ernesto",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reduta",
      INSTRUCTOR_FIRST_NAME: "Aldrin Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "Lorraine",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amaikurut",
      INSTRUCTOR_FIRST_NAME: "Amir Andre",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dapitan",
      INSTRUCTOR_FIRST_NAME: "James Kole",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Talaba",
      INSTRUCTOR_FIRST_NAME: "Maria Theresa",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gasang",
      INSTRUCTOR_FIRST_NAME: "Ulysses",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juele",
      INSTRUCTOR_FIRST_NAME: "Nadine",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Naraga",
      INSTRUCTOR_FIRST_NAME: "Rezel Lovelee Mae",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palado",
      INSTRUCTOR_FIRST_NAME: "Myk Lorence",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ma",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Badoy",
      INSTRUCTOR_FIRST_NAME: "Francesca Isabelle",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabio",
      INSTRUCTOR_FIRST_NAME: "Haven Danes",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sogueco",
      INSTRUCTOR_FIRST_NAME: "Angela Veronne",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Usman",
      INSTRUCTOR_FIRST_NAME: "Datu Jam Fayed",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gerke",
      INSTRUCTOR_FIRST_NAME: "Jean Pierre Odin",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paña",
      INSTRUCTOR_FIRST_NAME: "Janyssa Mariae",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabio",
      INSTRUCTOR_FIRST_NAME: "Haven Danes",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Jesus",
      INSTRUCTOR_FIRST_NAME: "Marc Loen",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sakurai",
      INSTRUCTOR_FIRST_NAME: "Shinnah Summer",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Logrosa (Dummy)",
      INSTRUCTOR_FIRST_NAME: "Gernalyn",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacuna",
      INSTRUCTOR_FIRST_NAME: "Christian Deo",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magdangal",
      INSTRUCTOR_FIRST_NAME: "Madeline Joisse",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saldivar",
      INSTRUCTOR_FIRST_NAME: "Hanna",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bagaslao",
      INSTRUCTOR_FIRST_NAME: "Ma. Carmella",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponte",
      INSTRUCTOR_FIRST_NAME: "Brevinberge",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Eddext",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tato",
      INSTRUCTOR_FIRST_NAME: "Francis Bien",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borja",
      INSTRUCTOR_FIRST_NAME: "Jacob Domenico",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buganas",
      INSTRUCTOR_FIRST_NAME: "Mark Paolo",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Observer",
      INSTRUCTOR_FIRST_NAME: "Parent",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hauac",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jayson",
      INSTRUCTOR_FIRST_NAME: "Erika Dawn",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puerto",
      INSTRUCTOR_FIRST_NAME: "Joel Lawrence",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Janagem Neil Swetchell",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mirador",
      INSTRUCTOR_FIRST_NAME: "Kiana Andrea",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sampang",
      INSTRUCTOR_FIRST_NAME: "Dave Adrian",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valeroso",
      INSTRUCTOR_FIRST_NAME: "Hannah Gwyneth",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maghari",
      INSTRUCTOR_FIRST_NAME: "John Royce",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabiling",
      INSTRUCTOR_FIRST_NAME: "Raphael Marco",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sumugat",
      INSTRUCTOR_FIRST_NAME: "Theadelle",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capito",
      INSTRUCTOR_FIRST_NAME: "Mark Poul",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Comonal",
      INSTRUCTOR_FIRST_NAME: "Lynn Margaret",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mas",
      INSTRUCTOR_FIRST_NAME: "Krisha",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jardin",
      INSTRUCTOR_FIRST_NAME: "Luan Sebastian",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallego",
      INSTRUCTOR_FIRST_NAME: "Sean Matthew",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luy",
      INSTRUCTOR_FIRST_NAME: "Dustin Jake Rafael",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Araniego",
      INSTRUCTOR_FIRST_NAME: "Rupert Stalin",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardino",
      INSTRUCTOR_FIRST_NAME: "Deanne Marie",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mojica",
      INSTRUCTOR_FIRST_NAME: "John Vyncenth",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Butong",
      INSTRUCTOR_FIRST_NAME: "Piolo Jay",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quijada",
      INSTRUCTOR_FIRST_NAME: "Rugen Kelley",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zosa",
      INSTRUCTOR_FIRST_NAME: "Rex Ryan Joseph",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Indino",
      INSTRUCTOR_FIRST_NAME: "Johannes Elmer",
      COURSE_NAME: "Game Programming 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masisay",
      INSTRUCTOR_FIRST_NAME: "Leizel",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galindez",
      INSTRUCTOR_FIRST_NAME: "Shane Alden",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quinal",
      INSTRUCTOR_FIRST_NAME: "Raupert Martin",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arriola",
      INSTRUCTOR_FIRST_NAME: "Darius John",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarita",
      INSTRUCTOR_FIRST_NAME: "Mary Bernadette",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lisondra",
      INSTRUCTOR_FIRST_NAME: "Von Mika",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "hill",
      INSTRUCTOR_FIRST_NAME: "mcgraw",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "INTONG_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "DYAN",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tagra",
      INSTRUCTOR_FIRST_NAME: "Abegaile",
      COURSE_NAME: "EE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruedas",
      INSTRUCTOR_FIRST_NAME: "Christine Jean",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diego",
      INSTRUCTOR_FIRST_NAME: "Jecile",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nilong",
      INSTRUCTOR_FIRST_NAME: "Trisha Gaile",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maniquez",
      INSTRUCTOR_FIRST_NAME: "Alpha Isabel",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joyce",
      INSTRUCTOR_FIRST_NAME: "James Jardin",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carillo",
      INSTRUCTOR_FIRST_NAME: "Niño Jan",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tacder",
      INSTRUCTOR_FIRST_NAME: "Lovella Fe",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME:
        "Do No Delete - Used for Consulting Extension Rest Integrations",
      INSTRUCTOR_FIRST_NAME: "ccrestadmin_bb_internal",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arellano_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mark Anthony",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yu",
      INSTRUCTOR_FIRST_NAME: "Margarita",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "admin",
      INSTRUCTOR_FIRST_NAME: "bb",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabalse",
      INSTRUCTOR_FIRST_NAME: "Rhizhail",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guieb",
      INSTRUCTOR_FIRST_NAME: "Lisa",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palanca Jr.",
      INSTRUCTOR_FIRST_NAME: "Virgil",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Picar",
      INSTRUCTOR_FIRST_NAME: "Timothy Paul",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quibod",
      INSTRUCTOR_FIRST_NAME: "Dominik Vincent",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagos",
      INSTRUCTOR_FIRST_NAME: "Gabriel",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "John Dave",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panceras",
      INSTRUCTOR_FIRST_NAME: "Prince Matthew",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Picar_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Timothy Paul",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marites",
      INSTRUCTOR_FIRST_NAME: "Tabanao",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "OTERO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "GERLYN D.",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ng",
      INSTRUCTOR_FIRST_NAME: "Valen",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muaen",
      INSTRUCTOR_FIRST_NAME: "Irwan",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guillang",
      INSTRUCTOR_FIRST_NAME: "Michelle",
      COURSE_NAME: "System Analysis and Design (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrer",
      INSTRUCTOR_FIRST_NAME: "Hailey",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lampitoc",
      INSTRUCTOR_FIRST_NAME: "Dennis",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saavedra",
      INSTRUCTOR_FIRST_NAME: "Gerald",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almonte",
      INSTRUCTOR_FIRST_NAME: "Velimor",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mariquit",
      INSTRUCTOR_FIRST_NAME: "Jhone Mychale",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navalta",
      INSTRUCTOR_FIRST_NAME: "Carl John Louie",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Jamaica",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "BORROMEO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "EARVIN L.",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estember",
      INSTRUCTOR_FIRST_NAME: "Rene",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriquez Jr.",
      INSTRUCTOR_FIRST_NAME: "Rodrigo",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Jhon Louise",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ba-Aco",
      INSTRUCTOR_FIRST_NAME: "Mary Dymphna",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Azura",
      INSTRUCTOR_FIRST_NAME: "Maria Therese Antoinette",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortel",
      INSTRUCTOR_FIRST_NAME: "Caile Jewel",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Ria",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Regacho",
      INSTRUCTOR_FIRST_NAME: "Franchesca Jean",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Beloy",
      INSTRUCTOR_FIRST_NAME: "Daryll John Carlo",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paglinawan",
      INSTRUCTOR_FIRST_NAME: "Charmaine",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ong Abrantes",
      INSTRUCTOR_FIRST_NAME: "Raymund Christian",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mastura",
      INSTRUCTOR_FIRST_NAME: "Bai Queeny",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tecala",
      INSTRUCTOR_FIRST_NAME: "Cheska Andrea",
      COURSE_NAME: "System Analysis and Design (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacalos",
      INSTRUCTOR_FIRST_NAME: "Godwin Howard",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumpor",
      INSTRUCTOR_FIRST_NAME: "Louise Hannah",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morandarte",
      INSTRUCTOR_FIRST_NAME: "Melchor",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabila",
      INSTRUCTOR_FIRST_NAME: "Gilbert",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "delos Reyes",
      INSTRUCTOR_FIRST_NAME: "Ronald Allan",
      COURSE_NAME: "Art and Design Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sejera",
      INSTRUCTOR_FIRST_NAME: "Marianne",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcillanosa",
      INSTRUCTOR_FIRST_NAME: "Mae",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suat",
      INSTRUCTOR_FIRST_NAME: "Sean Robert",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "(Dummy Instructor)",
      INSTRUCTOR_FIRST_NAME: "del Corro",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "student",
      INSTRUCTOR_FIRST_NAME: "dummy",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillo",
      INSTRUCTOR_FIRST_NAME: "John Christopher",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corona",
      INSTRUCTOR_FIRST_NAME: "Ryan",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "CENTENO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "RAFFY",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chan",
      INSTRUCTOR_FIRST_NAME: "Carmela",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capiña",
      INSTRUCTOR_FIRST_NAME: "Ken Gabriel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paquera",
      INSTRUCTOR_FIRST_NAME: "Kharra",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomaroy",
      INSTRUCTOR_FIRST_NAME: "Simon Justin",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saco",
      INSTRUCTOR_FIRST_NAME: "Gwyneth",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cuadra",
      INSTRUCTOR_FIRST_NAME: "Lindy Rose",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Mitzi",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luyao",
      INSTRUCTOR_FIRST_NAME: "Reymarie Mikaela",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andamon",
      INSTRUCTOR_FIRST_NAME: "Sandy",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bonocan",
      INSTRUCTOR_FIRST_NAME: "Valerie Mhor",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lupiba",
      INSTRUCTOR_FIRST_NAME: "Alessandra Marie",
      COURSE_NAME: "CCNA Routing and Switching 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cueva",
      INSTRUCTOR_FIRST_NAME: "Rafael Luis",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ventosa",
      INSTRUCTOR_FIRST_NAME: "Jayden Michael",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Zoey Liana",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Victorio",
      INSTRUCTOR_FIRST_NAME: "Ninya",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adegue",
      INSTRUCTOR_FIRST_NAME: "Cesar",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orbeta",
      INSTRUCTOR_FIRST_NAME: "Archie",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Vera",
      INSTRUCTOR_FIRST_NAME: "Donatelo",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Wrey Zach",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buenagua",
      INSTRUCTOR_FIRST_NAME: "Erika Maxy",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sandro",
      INSTRUCTOR_FIRST_NAME: "Karylle Beatrice",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Co",
      INSTRUCTOR_FIRST_NAME: "Giancarlo",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hao",
      INSTRUCTOR_FIRST_NAME: "Izaak Miguel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abendanio",
      INSTRUCTOR_FIRST_NAME: "Josel",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañas",
      INSTRUCTOR_FIRST_NAME: "Jaira Marie",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Relles",
      INSTRUCTOR_FIRST_NAME: "Zeus Kale",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Adrian",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aventura",
      INSTRUCTOR_FIRST_NAME: "Arielle Eliza Denise",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maldonado Zavala",
      INSTRUCTOR_FIRST_NAME: "Alvaro",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabrua",
      INSTRUCTOR_FIRST_NAME: "Amerie Niña",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orbeta",
      INSTRUCTOR_FIRST_NAME: "Arvin",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valencia",
      INSTRUCTOR_FIRST_NAME: "Anna Paullina",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ygay",
      INSTRUCTOR_FIRST_NAME: "Alyana",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Vera",
      INSTRUCTOR_FIRST_NAME: "Ben Ainslee",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magno",
      INSTRUCTOR_FIRST_NAME: "Blessy Ann",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trasmil",
      INSTRUCTOR_FIRST_NAME: "Creeza Jean",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barriga",
      INSTRUCTOR_FIRST_NAME: "Daphne Alyssa",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Canonigo",
      INSTRUCTOR_FIRST_NAME: "Emil Jared",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madarimot",
      INSTRUCTOR_FIRST_NAME: "Francis Jude",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aliviano",
      INSTRUCTOR_FIRST_NAME: "Gian Carvin",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Gavin Dominic",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumanas",
      INSTRUCTOR_FIRST_NAME: "Henry Leunam",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llanos",
      INSTRUCTOR_FIRST_NAME: "Ian Azriel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "James",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Falcon",
      INSTRUCTOR_FIRST_NAME: "Joelei Cassandra Marie",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumata",
      INSTRUCTOR_FIRST_NAME: "Jermaine Earl",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "John Jozshua",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salar",
      INSTRUCTOR_FIRST_NAME: "John Joseph",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mayo",
      INSTRUCTOR_FIRST_NAME: "Jonathan Lance",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Los Reyes",
      INSTRUCTOR_FIRST_NAME: "Julianne",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rellama Jr.",
      INSTRUCTOR_FIRST_NAME: "Joseph",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Jophiel Theo",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obero",
      INSTRUCTOR_FIRST_NAME: "Kaira Aliana Mari",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Felix",
      INSTRUCTOR_FIRST_NAME: "Krystin",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Spanskie",
      INSTRUCTOR_FIRST_NAME: "Ken",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abellano",
      INSTRUCTOR_FIRST_NAME: "Lemuel",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delima",
      INSTRUCTOR_FIRST_NAME: "Lennard Antoinette",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubinos",
      INSTRUCTOR_FIRST_NAME: "Lawrence David",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruzo",
      INSTRUCTOR_FIRST_NAME: "Leah Rouse",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perono",
      INSTRUCTOR_FIRST_NAME: "Mary Christine",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Marco Gabrielle",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cocuaco",
      INSTRUCTOR_FIRST_NAME: "Maxine Kate",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Velos",
      INSTRUCTOR_FIRST_NAME: "Mitzi",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matus",
      INSTRUCTOR_FIRST_NAME: "Robin Christopher",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abe",
      INSTRUCTOR_FIRST_NAME: "Ron Stephen",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tuazon",
      INSTRUCTOR_FIRST_NAME: "Shayne Kaye",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cubillan",
      INSTRUCTOR_FIRST_NAME: "Thea Marie",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duterte",
      INSTRUCTOR_FIRST_NAME: "Veronica",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duran",
      INSTRUCTOR_FIRST_NAME: "Denzel Edward",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Raquel",
      INSTRUCTOR_FIRST_NAME: "Jefferson",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villa",
      INSTRUCTOR_FIRST_NAME: "Primes Bryan",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jabines",
      INSTRUCTOR_FIRST_NAME: "Altarah",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galicia",
      INSTRUCTOR_FIRST_NAME: "Anci Ninotchka",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Resma",
      INSTRUCTOR_FIRST_NAME: "Keanu Lou",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arriate",
      INSTRUCTOR_FIRST_NAME: "Sean Carlo",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "CABALLERO",
      INSTRUCTOR_FIRST_NAME: "ALDREI",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Velandria",
      INSTRUCTOR_FIRST_NAME: "Francis Reece W",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clemeña",
      INSTRUCTOR_FIRST_NAME: "Alyanna Mel",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "John Paul",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joaquin",
      INSTRUCTOR_FIRST_NAME: "Carl John",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amoguis",
      INSTRUCTOR_FIRST_NAME: "Edcyl",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Curato",
      INSTRUCTOR_FIRST_NAME: "Alyssa Louisse",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baruiz",
      INSTRUCTOR_FIRST_NAME: "Patrick James",
      COURSE_NAME: "Physical Chemistry for Engineers 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dionglay",
      INSTRUCTOR_FIRST_NAME: "Krisha Kyla E",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Binghay",
      INSTRUCTOR_FIRST_NAME: "Nimrod Angelo",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peralta",
      INSTRUCTOR_FIRST_NAME: "Ishir Klint D",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cacanog",
      INSTRUCTOR_FIRST_NAME: "Raphael Joseph",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Romero",
      INSTRUCTOR_FIRST_NAME: "Euge Joshua",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wagner",
      INSTRUCTOR_FIRST_NAME: "Timothy C",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calzadora",
      INSTRUCTOR_FIRST_NAME: "John Euclid",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Podador",
      INSTRUCTOR_FIRST_NAME: "Jover Marc",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Narisma",
      INSTRUCTOR_FIRST_NAME: "Keinth Justin",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carin",
      INSTRUCTOR_FIRST_NAME: "Marc Enrico",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Gil Paul Miguel",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abalayan",
      INSTRUCTOR_FIRST_NAME: "Marius Benedict",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bioco",
      INSTRUCTOR_FIRST_NAME: "Ruby Kaye",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capesos",
      INSTRUCTOR_FIRST_NAME: "Arabella Gwynette",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montalban",
      INSTRUCTOR_FIRST_NAME: "Rj",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dasalla",
      INSTRUCTOR_FIRST_NAME: "Don Maxinne",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "T",
      INSTRUCTOR_FIRST_NAME: "D",
      COURSE_NAME: "CPE Practice and Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doromal",
      INSTRUCTOR_FIRST_NAME: "Ervin Jay",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuentes",
      INSTRUCTOR_FIRST_NAME: "Karlo Angelo",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Operario",
      INSTRUCTOR_FIRST_NAME: "Michaelangelo L",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nobleta",
      INSTRUCTOR_FIRST_NAME: "Ma. Christine",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bisnar",
      INSTRUCTOR_FIRST_NAME: "Miguel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monterde",
      INSTRUCTOR_FIRST_NAME: "Kent Gerard",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pastor",
      INSTRUCTOR_FIRST_NAME: "Stanley G",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pepito",
      INSTRUCTOR_FIRST_NAME: "Clyde Cedrick",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lisondra",
      INSTRUCTOR_FIRST_NAME: "Althea Ysabelle",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abuga",
      INSTRUCTOR_FIRST_NAME: "Dhyster Emmanuel",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tuble",
      INSTRUCTOR_FIRST_NAME: "Albert",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villaflores",
      INSTRUCTOR_FIRST_NAME: "Eisha",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sodusta",
      INSTRUCTOR_FIRST_NAME: "Bryan Anthony",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montesclaros",
      INSTRUCTOR_FIRST_NAME: "James Nichole",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kotah",
      INSTRUCTOR_FIRST_NAME: "Benson",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacson",
      INSTRUCTOR_FIRST_NAME: "Mark Joshua",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacifico",
      INSTRUCTOR_FIRST_NAME: "Jose Sebaistian",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oñez",
      INSTRUCTOR_FIRST_NAME: "Kenjie",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacia",
      INSTRUCTOR_FIRST_NAME: "Samantha Marey",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manalo Jr.",
      INSTRUCTOR_FIRST_NAME: "Cesar",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pearson",
      INSTRUCTOR_FIRST_NAME: "Mickie Chilsh",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Osmundo (ALEKS TECH)",
      INSTRUCTOR_FIRST_NAME: "Aric",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bansuan II",
      INSTRUCTOR_FIRST_NAME: "Allih",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dedel",
      INSTRUCTOR_FIRST_NAME: "Andre Luis",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tseng",
      INSTRUCTOR_FIRST_NAME: "Chiao Chun",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ladion",
      INSTRUCTOR_FIRST_NAME: "Jhullian Japhet",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Christine Faith",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ciudad",
      INSTRUCTOR_FIRST_NAME: "Hannah Thea",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cablinda",
      INSTRUCTOR_FIRST_NAME: "Ivy Kate",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Nikki Gray",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Callueng",
      INSTRUCTOR_FIRST_NAME: "Raphael Anthony",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coloma",
      INSTRUCTOR_FIRST_NAME: "Sophia Georgia",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Damos",
      INSTRUCTOR_FIRST_NAME: "Cyrile Jane",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padilla",
      INSTRUCTOR_FIRST_NAME: "Joshua Carlo",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabico",
      INSTRUCTOR_FIRST_NAME: "Karsten Gabriel",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Shimizutani",
      INSTRUCTOR_FIRST_NAME: "Miko",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bonleon",
      INSTRUCTOR_FIRST_NAME: "Julian Vittorio",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "LISONDRA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "CHERRY",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ballado Jr.",
      INSTRUCTOR_FIRST_NAME: "Alejandro",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "DACAL_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "EARL CLIVE",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "IHALAS_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JONDEL S.",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Camonias",
      INSTRUCTOR_FIRST_NAME: "Alrich  Brix",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Jovaci Andrew",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jose",
      INSTRUCTOR_FIRST_NAME: "Jiullano Nicolo",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castin",
      INSTRUCTOR_FIRST_NAME: "Razelle Elieyah",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perucho",
      INSTRUCTOR_FIRST_NAME: "Janmark Laurence",
      COURSE_NAME: "Thesis 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galanida",
      INSTRUCTOR_FIRST_NAME: "Kurt Ira",
      COURSE_NAME: "CE Project 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mañez",
      INSTRUCTOR_FIRST_NAME: "Aiesen Faye",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Reyes",
      INSTRUCTOR_FIRST_NAME: "Haley Jabez",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lapiz",
      INSTRUCTOR_FIRST_NAME: "Vince Gio",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pegg",
      INSTRUCTOR_FIRST_NAME: "Barbara",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perin",
      INSTRUCTOR_FIRST_NAME: "Joelliane Mari",
      COURSE_NAME: "The Life and Works of Jose Rizal (Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Janducayan",
      INSTRUCTOR_FIRST_NAME: "Veriana Issa",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chavez",
      INSTRUCTOR_FIRST_NAME: "Axil Dave",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panlilio",
      INSTRUCTOR_FIRST_NAME: "Patrice Nicole",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabatingan",
      INSTRUCTOR_FIRST_NAME: "Aleida",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chucas",
      INSTRUCTOR_FIRST_NAME: "Francis Adrian",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Imbin",
      INSTRUCTOR_FIRST_NAME: "Najmain Kenneth",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "CASCARO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "RHODESSA J.",
      COURSE_NAME: "HyFlex Learning Workshop",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Beatrix Frederique",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fudot",
      INSTRUCTOR_FIRST_NAME: "Allyssa Mae",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wu",
      INSTRUCTOR_FIRST_NAME: "Lin",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardino",
      INSTRUCTOR_FIRST_NAME: "Angela Jane",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "CALAMBA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "MICHAEL",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montero",
      INSTRUCTOR_FIRST_NAME: "Mikee Angela",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Glimada",
      INSTRUCTOR_FIRST_NAME: "Paolo",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "MCM",
      INSTRUCTOR_FIRST_NAME: "Student",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deles",
      INSTRUCTOR_FIRST_NAME: "Sai Vanessa",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delosa",
      INSTRUCTOR_FIRST_NAME: "Tim Bernard",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Badilles",
      INSTRUCTOR_FIRST_NAME: "Geiane Katrine A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ajos",
      INSTRUCTOR_FIRST_NAME: "Hannah Prullyne",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anding",
      INSTRUCTOR_FIRST_NAME: "Rod James",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castañeda",
      INSTRUCTOR_FIRST_NAME: "Kyler",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macahine",
      INSTRUCTOR_FIRST_NAME: "Loven Rafael",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laminero",
      INSTRUCTOR_FIRST_NAME: "Charven Eins",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tejada",
      INSTRUCTOR_FIRST_NAME: "Dean William",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salem",
      INSTRUCTOR_FIRST_NAME: "Mohammed Gamal Saleh",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buligan",
      INSTRUCTOR_FIRST_NAME: "Isabel Laura",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Concha",
      INSTRUCTOR_FIRST_NAME: "River",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "LAUD",
      INSTRUCTOR_FIRST_NAME: "NOEL",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balmes",
      INSTRUCTOR_FIRST_NAME: "Julius Christian",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarande",
      INSTRUCTOR_FIRST_NAME: "Kristine Cates",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jaballas",
      INSTRUCTOR_FIRST_NAME: "Jonas Gabriel",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrau",
      INSTRUCTOR_FIRST_NAME: "Neyko Bennett",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Mikael Rey C",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benipayo",
      INSTRUCTOR_FIRST_NAME: "Elaine",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sangalang",
      INSTRUCTOR_FIRST_NAME: "Caryl Cheska",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mino",
      INSTRUCTOR_FIRST_NAME: "Crisha Kylle",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Alessandro Sebastian D",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gijan",
      INSTRUCTOR_FIRST_NAME: "Nestlyn",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Veladad",
      INSTRUCTOR_FIRST_NAME: "Noelle Carol Kim",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baldonaza",
      INSTRUCTOR_FIRST_NAME: "Alwyn John",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avila",
      INSTRUCTOR_FIRST_NAME: "Jade",
      COURSE_NAME: "Electronics Circuits Analysis and Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hofileña",
      INSTRUCTOR_FIRST_NAME: "Joy",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estandian",
      INSTRUCTOR_FIRST_NAME: "Cristopher John D",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bornales",
      INSTRUCTOR_FIRST_NAME: "John Paolo",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortez",
      INSTRUCTOR_FIRST_NAME: "Hearty Shayne",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laquindanum",
      INSTRUCTOR_FIRST_NAME: "Kurt Justin",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banting",
      INSTRUCTOR_FIRST_NAME: "Jonnah Angelica",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barrientos",
      INSTRUCTOR_FIRST_NAME: "Joshua John",
      COURSE_NAME: "HyFlex Learning Workshop",
    },
    {
      INSTRUCTOR_LAST_NAME: "Florendo",
      INSTRUCTOR_FIRST_NAME: "Dana",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Leopoldo",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Halasan",
      INSTRUCTOR_FIRST_NAME: "Ydhen Lou",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallones",
      INSTRUCTOR_FIRST_NAME: "Zean",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vilela",
      INSTRUCTOR_FIRST_NAME: "Angelica",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabaya",
      INSTRUCTOR_FIRST_NAME: "Claire Elaine",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diab",
      INSTRUCTOR_FIRST_NAME: "Fauzi",
      COURSE_NAME: "DC MACHINERY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Merquita",
      INSTRUCTOR_FIRST_NAME: "Calixta Nicole",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pal",
      INSTRUCTOR_FIRST_NAME: "Christine Joy C",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacot",
      INSTRUCTOR_FIRST_NAME: "Jann Carlo",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sapal",
      INSTRUCTOR_FIRST_NAME: "Edd Ryan",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Conde",
      INSTRUCTOR_FIRST_NAME: "Ariel Christian",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dones",
      INSTRUCTOR_FIRST_NAME: "Aisha Nicole",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuaton",
      INSTRUCTOR_FIRST_NAME: "Yani Christopher",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mana-ay",
      INSTRUCTOR_FIRST_NAME: "Cherry Mae",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Narca",
      INSTRUCTOR_FIRST_NAME: "Sean Timoty",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "PITLO",
      INSTRUCTOR_FIRST_NAME: "JOHN MARCO M.",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valenzuela",
      INSTRUCTOR_FIRST_NAME: "Clarence James",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cardaña",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dal",
      INSTRUCTOR_FIRST_NAME: "Rovic Nathaniel",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abaya",
      INSTRUCTOR_FIRST_NAME: "Mark Raphael",
      COURSE_NAME: "Receptive Communication Skills (Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "JP",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Goo",
      INSTRUCTOR_FIRST_NAME: "Bo Min",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Domag",
      INSTRUCTOR_FIRST_NAME: "Denisse Dorothy",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tatad",
      INSTRUCTOR_FIRST_NAME: "Emmanuel John",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Hermione Alexis",
      COURSE_NAME: "System Analysis and Design (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cababayao",
      INSTRUCTOR_FIRST_NAME: "Ralph Daniel",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acojido",
      INSTRUCTOR_FIRST_NAME: "Fritz Andrei",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adaptar",
      INSTRUCTOR_FIRST_NAME: "Lj Jean",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacquing",
      INSTRUCTOR_FIRST_NAME: "Louis Jacob",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Tristan",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Godilano_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ezrha",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Teves",
      INSTRUCTOR_FIRST_NAME: "James Reginald",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aliniabon",
      INSTRUCTOR_FIRST_NAME: "Charmagne Miles",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cadorna",
      INSTRUCTOR_FIRST_NAME: "Enrico Clyd",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillo",
      INSTRUCTOR_FIRST_NAME: "Hillary Rain",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Glemao",
      INSTRUCTOR_FIRST_NAME: "Jonas",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tuble",
      INSTRUCTOR_FIRST_NAME: "Jan Paul",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tubang",
      INSTRUCTOR_FIRST_NAME: "Kristin Danielle",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duterte",
      INSTRUCTOR_FIRST_NAME: "Miguel Andrei",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delcano",
      INSTRUCTOR_FIRST_NAME: "Pitt Cyrus",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandaragon",
      INSTRUCTOR_FIRST_NAME: "Abdulmohsin",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agustin",
      INSTRUCTOR_FIRST_NAME: "Bai Shaneen",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ubiña",
      INSTRUCTOR_FIRST_NAME: "Charles Evan",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sepe",
      INSTRUCTOR_FIRST_NAME: "Cellistine James",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Binghoy",
      INSTRUCTOR_FIRST_NAME: "El Romaerr",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panggoy",
      INSTRUCTOR_FIRST_NAME: "Julia Coleene",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Umbaña",
      INSTRUCTOR_FIRST_NAME: "Justin Tom Allen",
      COURSE_NAME: "Art and Design Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morales",
      INSTRUCTOR_FIRST_NAME: "Poncian Paolo",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "SEGURITAN_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "BEN JAY-ME G.",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrina",
      INSTRUCTOR_FIRST_NAME: "Dyan",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brtk",
      INSTRUCTOR_FIRST_NAME: "Doug",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Astillero",
      INSTRUCTOR_FIRST_NAME: "Althea Sitara",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lauban",
      INSTRUCTOR_FIRST_NAME: "Benjamin-Ali",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orcasitas",
      INSTRUCTOR_FIRST_NAME: "Francis Rave",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hatamosa",
      INSTRUCTOR_FIRST_NAME: "John Dave",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luague",
      INSTRUCTOR_FIRST_NAME: "Jeff",
      COURSE_NAME: "Good Governance and Social Responsibility",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bustamante III",
      INSTRUCTOR_FIRST_NAME: "George",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kadil",
      INSTRUCTOR_FIRST_NAME: "Ibrahim",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Juan Miguel",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agaban",
      INSTRUCTOR_FIRST_NAME: "Karlo Gabriyel",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibañez",
      INSTRUCTOR_FIRST_NAME: "Luis",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diez",
      INSTRUCTOR_FIRST_NAME: "Ethan Jeiel",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andrion",
      INSTRUCTOR_FIRST_NAME: "Alfred Ashley",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Selma",
      INSTRUCTOR_FIRST_NAME: "Christian Lloyd",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ninte",
      INSTRUCTOR_FIRST_NAME: "Renee Jasmin",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Geraldine",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miñoza",
      INSTRUCTOR_FIRST_NAME: "Josh Dannielle",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laureano",
      INSTRUCTOR_FIRST_NAME: "Jarred Lee",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Erese",
      INSTRUCTOR_FIRST_NAME: "Ralph Albert",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paco",
      INSTRUCTOR_FIRST_NAME: "Shawn Cazzel",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oria",
      INSTRUCTOR_FIRST_NAME: "Diosdado",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Butay",
      INSTRUCTOR_FIRST_NAME: "Fiona Jhoana Clacyl",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tubera",
      INSTRUCTOR_FIRST_NAME: "Kymbyrly Yzzy",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ikeda",
      INSTRUCTOR_FIRST_NAME: "Sho",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Osorio",
      INSTRUCTOR_FIRST_NAME: "Azsher Vonn",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Israel",
      INSTRUCTOR_FIRST_NAME: "Eric",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Christille Rayne",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palma Gil",
      INSTRUCTOR_FIRST_NAME: "Joshua Matthew",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ceballos",
      INSTRUCTOR_FIRST_NAME: "Karla Camille",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acompañado",
      INSTRUCTOR_FIRST_NAME: "Lawrence Roi",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortez",
      INSTRUCTOR_FIRST_NAME: "Shekinah Chloe",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macaalin",
      INSTRUCTOR_FIRST_NAME: "Abdul Hakim",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bangcoyo",
      INSTRUCTOR_FIRST_NAME: "Alvin Jhon",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "Aliyah Maxxine",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tamesis",
      INSTRUCTOR_FIRST_NAME: "Austine Mhar S",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Andre Paul",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macasilhig",
      INSTRUCTOR_FIRST_NAME: "Brent Paul",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balani",
      INSTRUCTOR_FIRST_NAME: "Venus",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinsuat",
      INSTRUCTOR_FIRST_NAME: "Bai Saadiyah Mahmur",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corsame",
      INSTRUCTOR_FIRST_NAME: "Czaraleen",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tubianosa",
      INSTRUCTOR_FIRST_NAME: "Jordan Ereahn",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumahad",
      INSTRUCTOR_FIRST_NAME: "John Lloyd",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Julaine",
      INSTRUCTOR_FIRST_NAME: "Trisa Jen",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Rafael",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sillador",
      INSTRUCTOR_FIRST_NAME: "Jim Adrian O",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Bea Joyce B",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Jan Rasheed Tanner",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arao-Arao",
      INSTRUCTOR_FIRST_NAME: "Kristian",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Thomas Harvey",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Andrea Luisa",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deutch",
      INSTRUCTOR_FIRST_NAME: "Harrison",
      COURSE_NAME: "Thesis 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Torreon",
      INSTRUCTOR_FIRST_NAME: "Joseph Xyrus Greg",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortez",
      INSTRUCTOR_FIRST_NAME: "David Isaac",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banzon",
      INSTRUCTOR_FIRST_NAME: "John Matthew",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asuncion",
      INSTRUCTOR_FIRST_NAME: "Erika",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paguyan",
      INSTRUCTOR_FIRST_NAME: "Mary Nadine Sophia",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abdulkadil",
      INSTRUCTOR_FIRST_NAME: "Hafid Shaheed",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galito",
      INSTRUCTOR_FIRST_NAME: "Rogelio B",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alfar",
      INSTRUCTOR_FIRST_NAME: "Jolius P",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corilla",
      INSTRUCTOR_FIRST_NAME: "Mary Anne Fatima",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sumampong",
      INSTRUCTOR_FIRST_NAME: "Suzanne Mathilda",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lomboy",
      INSTRUCTOR_FIRST_NAME: "Joshua Edric",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mantium",
      INSTRUCTOR_FIRST_NAME: "Adam",
      COURSE_NAME: "SURVEYING 2 (FIELD)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miñoza",
      INSTRUCTOR_FIRST_NAME: "Arianne Angel",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blanco",
      INSTRUCTOR_FIRST_NAME: "Carlos Benedict",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mante",
      INSTRUCTOR_FIRST_NAME: "Faith",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adlawan",
      INSTRUCTOR_FIRST_NAME: "Hailey Deceka",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Usares",
      INSTRUCTOR_FIRST_NAME: "Samuel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Samantha Zoe",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Relatado",
      INSTRUCTOR_FIRST_NAME: "James Bryan",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "Joses Gabriel",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morgado",
      INSTRUCTOR_FIRST_NAME: "Jhaniz Gwyn",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mallare",
      INSTRUCTOR_FIRST_NAME: "Venice Kaye",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escat",
      INSTRUCTOR_FIRST_NAME: "Jaemi Louisse",
      COURSE_NAME: "Philippine Indigenous Communities (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lanado",
      INSTRUCTOR_FIRST_NAME: "Hanseree Wilson",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Jannika Marie Mon",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Vince Joseph",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ranque",
      INSTRUCTOR_FIRST_NAME: "Krishna Hanaku",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Layson",
      INSTRUCTOR_FIRST_NAME: "Kristhea Valerie",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quitalig",
      INSTRUCTOR_FIRST_NAME: "Princess Anne Rose",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Stones",
      INSTRUCTOR_FIRST_NAME: "Rayyan",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abasolo",
      INSTRUCTOR_FIRST_NAME: "Sebastian",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Layson",
      INSTRUCTOR_FIRST_NAME: "Veejay Gabriel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baraclan",
      INSTRUCTOR_FIRST_NAME: "Vince Lawrence",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Braceros_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Juliet",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pabustan",
      INSTRUCTOR_FIRST_NAME: "Allyson Kaye",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mognie",
      INSTRUCTOR_FIRST_NAME: "Asnor",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solatar",
      INSTRUCTOR_FIRST_NAME: "Bryan Justin",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sorongon",
      INSTRUCTOR_FIRST_NAME: "Clarisse Franchesca",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Desamparado",
      INSTRUCTOR_FIRST_NAME: "Christian Jebs",
      COURSE_NAME: "Electronics Circuits Analysis and Design (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alfonso",
      INSTRUCTOR_FIRST_NAME: "Jheigndrey",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cueva",
      INSTRUCTOR_FIRST_NAME: "Justin James",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ancla",
      INSTRUCTOR_FIRST_NAME: "John Mark",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caro",
      INSTRUCTOR_FIRST_NAME: "Noli",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Misaka",
      INSTRUCTOR_FIRST_NAME: "Yuko",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paramio",
      INSTRUCTOR_FIRST_NAME: "Augustin Dave",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orozco",
      INSTRUCTOR_FIRST_NAME: "Jan Bryant",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumagan",
      INSTRUCTOR_FIRST_NAME: "Juris Jon",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chi",
      INSTRUCTOR_FIRST_NAME: "Dominique John",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asetre",
      INSTRUCTOR_FIRST_NAME: "Aubrey A",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pequiro",
      INSTRUCTOR_FIRST_NAME: "Fritzy Paula L",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barcena",
      INSTRUCTOR_FIRST_NAME: "Leigh",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Loquias",
      INSTRUCTOR_FIRST_NAME: "Miguel A",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gerarcas",
      INSTRUCTOR_FIRST_NAME: "Lenton John",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sevilla",
      INSTRUCTOR_FIRST_NAME: "Jan David M",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gomez",
      INSTRUCTOR_FIRST_NAME: "Marion",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangulamas",
      INSTRUCTOR_FIRST_NAME: "Datu Alrabin",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuscablo",
      INSTRUCTOR_FIRST_NAME: "Adrian Kent",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pobadora",
      INSTRUCTOR_FIRST_NAME: "Eld Rich",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tura",
      INSTRUCTOR_FIRST_NAME: "Emmanuel G.",
      COURSE_NAME: "Statics for Rigid Bodies - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madelo",
      INSTRUCTOR_FIRST_NAME: "Dinah Pearl",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mahadali",
      INSTRUCTOR_FIRST_NAME: "Mohammeed Bhadzrimar A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esma",
      INSTRUCTOR_FIRST_NAME: "Margarette Kyle",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mejias",
      INSTRUCTOR_FIRST_NAME: "Joshua Miguel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orillosa",
      INSTRUCTOR_FIRST_NAME: "Shawn Daniel",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Josol",
      INSTRUCTOR_FIRST_NAME: "Nigel Rex",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cerna_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Patrick",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jubilan",
      INSTRUCTOR_FIRST_NAME: "John Rafael",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maningo",
      INSTRUCTOR_FIRST_NAME: "Khrystel Adrianne",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Marco Gabriel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Margate",
      INSTRUCTOR_FIRST_NAME: "Audric Angelo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cale",
      INSTRUCTOR_FIRST_NAME: "Al Nasser",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ranan",
      INSTRUCTOR_FIRST_NAME: "Angelito",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ragos",
      INSTRUCTOR_FIRST_NAME: "Erwin April",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ballesteros",
      INSTRUCTOR_FIRST_NAME: "Ernesto Jr",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caslib",
      INSTRUCTOR_FIRST_NAME: "Giesha Celine",
      COURSE_NAME: "IE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Veloso",
      INSTRUCTOR_FIRST_NAME: "Graziella Gift",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dongcoy",
      INSTRUCTOR_FIRST_NAME: "Hannah Marie",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batiller",
      INSTRUCTOR_FIRST_NAME: "Ian Dave",
      COURSE_NAME: "IE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oranza",
      INSTRUCTOR_FIRST_NAME: "Jasmine Andrea",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Canonigo",
      INSTRUCTOR_FIRST_NAME: "Jewel",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Retuya",
      INSTRUCTOR_FIRST_NAME: "Justine Kasey",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Jose Mariano",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Papa",
      INSTRUCTOR_FIRST_NAME: "Joseph",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bioco",
      INSTRUCTOR_FIRST_NAME: "Kimberly",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laurente",
      INSTRUCTOR_FIRST_NAME: "Khing Dave",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagala",
      INSTRUCTOR_FIRST_NAME: "Michael Angelo",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Namion",
      INSTRUCTOR_FIRST_NAME: "Maurice Bon",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Consuegra",
      INSTRUCTOR_FIRST_NAME: "Myka Lorraine",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferniz",
      INSTRUCTOR_FIRST_NAME: "Roxan",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomaquin",
      INSTRUCTOR_FIRST_NAME: "Relyn",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Sophia Andrea",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salik",
      INSTRUCTOR_FIRST_NAME: "Shayenna",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ho_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Charles",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocenar",
      INSTRUCTOR_FIRST_NAME: "Andrea Lorraine",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubi",
      INSTRUCTOR_FIRST_NAME: "Axill",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agak",
      INSTRUCTOR_FIRST_NAME: "Bai Norhayla",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Christianna Ann Marie",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luhas",
      INSTRUCTOR_FIRST_NAME: "Catherine Joy",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabracuer",
      INSTRUCTOR_FIRST_NAME: "Carlo Miguel",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albiso",
      INSTRUCTOR_FIRST_NAME: "Ethan James",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adjalaine",
      INSTRUCTOR_FIRST_NAME: "Hana Rashida Ikianna",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gesim",
      INSTRUCTOR_FIRST_NAME: "Justin Pol",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manrique",
      INSTRUCTOR_FIRST_NAME: "Megan Kate",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eguia",
      INSTRUCTOR_FIRST_NAME: "Rec",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sato",
      INSTRUCTOR_FIRST_NAME: "Shayne",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coquilla",
      INSTRUCTOR_FIRST_NAME: "Alliza",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salat",
      INSTRUCTOR_FIRST_NAME: "Bai Lyra Ashlia",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacea",
      INSTRUCTOR_FIRST_NAME: "Charlie Berg",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salat",
      INSTRUCTOR_FIRST_NAME: "Datu Tyron Mohammad",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serofia",
      INSTRUCTOR_FIRST_NAME: "Ernesto",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gaudiano",
      INSTRUCTOR_FIRST_NAME: "Gavin Jeff Clyde",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Kirk Keane",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carbon",
      INSTRUCTOR_FIRST_NAME: "Michael Hero",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navarro",
      INSTRUCTOR_FIRST_NAME: "Maria Luna",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galban",
      INSTRUCTOR_FIRST_NAME: "Neil Johan",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinsuat",
      INSTRUCTOR_FIRST_NAME: "Navil",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abasolo",
      INSTRUCTOR_FIRST_NAME: "Ruth Lauren",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Margallo",
      INSTRUCTOR_FIRST_NAME: "Sofia Pauline",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garduque",
      INSTRUCTOR_FIRST_NAME: "Winona Kyle",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Ymir",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jullar",
      INSTRUCTOR_FIRST_NAME: "Alemae",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cerbito",
      INSTRUCTOR_FIRST_NAME: "Anna Rizza",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguelo",
      INSTRUCTOR_FIRST_NAME: "Christian Dave",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castro",
      INSTRUCTOR_FIRST_NAME: "Dinsell Leyan",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdevieso",
      INSTRUCTOR_FIRST_NAME: "Erika",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Velandria",
      INSTRUCTOR_FIRST_NAME: "Ignatius",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salcedo",
      INSTRUCTOR_FIRST_NAME: "Joemar",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Viscayno",
      INSTRUCTOR_FIRST_NAME: "Kate Kayle",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gaco",
      INSTRUCTOR_FIRST_NAME: "Mae Adrienne Angela",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sy",
      INSTRUCTOR_FIRST_NAME: "Vince Andrew Nico",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "McGraw-Hill",
      INSTRUCTOR_FIRST_NAME: "TechSupport",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rapanot",
      INSTRUCTOR_FIRST_NAME: "Evan Myles",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corsame",
      INSTRUCTOR_FIRST_NAME: "Francisco Lorenzo",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maganaka",
      INSTRUCTOR_FIRST_NAME: "John Jibrael",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Lira",
      INSTRUCTOR_FIRST_NAME: "Jorainne Monique",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Krisha Denise",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortaliz",
      INSTRUCTOR_FIRST_NAME: "Justin Jake",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocdenaria_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jose Marie",
      COURSE_NAME: "Mathematics for Engineers (Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cosmiano",
      INSTRUCTOR_FIRST_NAME: "Kyle Julius",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esguerra",
      INSTRUCTOR_FIRST_NAME: "Nicole Ann",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gavasan",
      INSTRUCTOR_FIRST_NAME: "Rigen Paolo",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calceña",
      INSTRUCTOR_FIRST_NAME: "Therese Helga Antonette",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pepito",
      INSTRUCTOR_FIRST_NAME: "Twyna Maxenne",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuliga",
      INSTRUCTOR_FIRST_NAME: "Anjelyn Joy",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toñacao",
      INSTRUCTOR_FIRST_NAME: "Clare Angeli",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palar",
      INSTRUCTOR_FIRST_NAME: "Chris Cyrus",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Lumen",
      INSTRUCTOR_FIRST_NAME: "Charlie",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hortal",
      INSTRUCTOR_FIRST_NAME: "Francis Christian",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernaldez",
      INSTRUCTOR_FIRST_NAME: "Gian Andrew",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sartirani",
      INSTRUCTOR_FIRST_NAME: "Gianpaolo",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yeto",
      INSTRUCTOR_FIRST_NAME: "Irish Venissa Gibbs",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almendras",
      INSTRUCTOR_FIRST_NAME: "Jhon Anthony",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pasayloon",
      INSTRUCTOR_FIRST_NAME: "Jay Anthony",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gaslang",
      INSTRUCTOR_FIRST_NAME: "Juana Corrine",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orbita",
      INSTRUCTOR_FIRST_NAME: "Jay Mark",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Verzano",
      INSTRUCTOR_FIRST_NAME: "Lloyd Derek",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Marc Steven",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hampac",
      INSTRUCTOR_FIRST_NAME: "Nicole",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruelo",
      INSTRUCTOR_FIRST_NAME: "Ronald",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coquilla",
      INSTRUCTOR_FIRST_NAME: "Tristan Maurice",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilare",
      INSTRUCTOR_FIRST_NAME: "Ysabelle Zoe",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Febbie Faith S.",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samanodi",
      INSTRUCTOR_FIRST_NAME: "Fatima Mecca",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabal",
      INSTRUCTOR_FIRST_NAME: "Mira Sol",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Ronahleen Anne",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Echevarria",
      INSTRUCTOR_FIRST_NAME: "Alyssa Nicole",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asahid",
      INSTRUCTOR_FIRST_NAME: "Remelyn",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Infante",
      INSTRUCTOR_FIRST_NAME: "Paul John",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baste",
      INSTRUCTOR_FIRST_NAME: "Martzel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alquizar",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Austero",
      INSTRUCTOR_FIRST_NAME: "Clint",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Requillo",
      INSTRUCTOR_FIRST_NAME: "Emmy Grace",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abaño",
      INSTRUCTOR_FIRST_NAME: "Sher Laurice",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llemit",
      INSTRUCTOR_FIRST_NAME: "Martinee",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batingal",
      INSTRUCTOR_FIRST_NAME: "Cielo",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Taylaran",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pactor",
      INSTRUCTOR_FIRST_NAME: "Jennyfer",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galagar",
      INSTRUCTOR_FIRST_NAME: "Jesse Jones",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sagaral",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuentes",
      INSTRUCTOR_FIRST_NAME: "Suede",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boloron",
      INSTRUCTOR_FIRST_NAME: "Niño",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "IBAÑEZ_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "KIARAH REYSHYLLE C.",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "JARABE_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "CHRISTIAN JAY",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medallon",
      INSTRUCTOR_FIRST_NAME: "Natheneal Paul",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abaño_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Sher Laurice",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumaling_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Rey",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ronahleen Anne",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buñol",
      INSTRUCTOR_FIRST_NAME: "Alyssa Gwen",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Derecho",
      INSTRUCTOR_FIRST_NAME: "Ann Karoline",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dura",
      INSTRUCTOR_FIRST_NAME: "Denever",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vasquez",
      INSTRUCTOR_FIRST_NAME: "Karl John",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ma",
      INSTRUCTOR_FIRST_NAME: "Marcus Jacob",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jusain",
      INSTRUCTOR_FIRST_NAME: "Raji James",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anoran",
      INSTRUCTOR_FIRST_NAME: "Stella Maris",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oliva",
      INSTRUCTOR_FIRST_NAME: "Vaughn David",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arabe",
      INSTRUCTOR_FIRST_NAME: "Vincent John Karl",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dismas",
      INSTRUCTOR_FIRST_NAME: "Xander James",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cagape",
      INSTRUCTOR_FIRST_NAME: "Zechaela",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mokamad",
      INSTRUCTOR_FIRST_NAME: "Zeeshan",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "OBREGON_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "MATTHEW MARK D.",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alquizar_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ba-ang_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Marie Gabrielle",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tilao",
      INSTRUCTOR_FIRST_NAME: "Ace Charles",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aala",
      INSTRUCTOR_FIRST_NAME: "Chandayster",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asoy",
      INSTRUCTOR_FIRST_NAME: "Emanuel John",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Teves",
      INSTRUCTOR_FIRST_NAME: "Fergievon Alaika",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batalan",
      INSTRUCTOR_FIRST_NAME: "George Miguel",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Verdan",
      INSTRUCTOR_FIRST_NAME: "Hym",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balod",
      INSTRUCTOR_FIRST_NAME: "Jae Dominique",
      COURSE_NAME: "Global Culture & Tourism Geography",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrasado",
      INSTRUCTOR_FIRST_NAME: "James Lloyd",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palo",
      INSTRUCTOR_FIRST_NAME: "Khryzyll Faith",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Merquita",
      INSTRUCTOR_FIRST_NAME: "Lucy Jeanne",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palo",
      INSTRUCTOR_FIRST_NAME: "Lars",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ali",
      INSTRUCTOR_FIRST_NAME: "Marwa",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Betulan",
      INSTRUCTOR_FIRST_NAME: "Marielle Jane",
      COURSE_NAME: "Global Culture & Tourism Geography",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matulin",
      INSTRUCTOR_FIRST_NAME: "Rachel",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumaguin",
      INSTRUCTOR_FIRST_NAME: "Zia Denise",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandap_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Cedric Joseph",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sapong_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jaremiah",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paglinawan_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Charmaine",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batingal_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Cielo",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "NARES_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JOHN ALBERT",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nodado",
      INSTRUCTOR_FIRST_NAME: "Alfred Dads",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jamio",
      INSTRUCTOR_FIRST_NAME: "Angel Mae",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tambuyat",
      INSTRUCTOR_FIRST_NAME: "Christine May",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villegas",
      INSTRUCTOR_FIRST_NAME: "Yeruel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mariveles",
      INSTRUCTOR_FIRST_NAME: "Ed Alexius",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wong",
      INSTRUCTOR_FIRST_NAME: "China",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Ellaijah Dwayne",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duetes",
      INSTRUCTOR_FIRST_NAME: "Greg Danielle",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ismael",
      INSTRUCTOR_FIRST_NAME: "Jairus Miguel",
      COURSE_NAME: "IE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Porticos",
      INSTRUCTOR_FIRST_NAME: "Kiarra Louise",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Halasan",
      INSTRUCTOR_FIRST_NAME: "Loureanne",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hewitt (Test Student)",
      INSTRUCTOR_FIRST_NAME: "Todd",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catalan",
      INSTRUCTOR_FIRST_NAME: "Adolf Carl",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayanghirang",
      INSTRUCTOR_FIRST_NAME: "Arnel Luis",
      COURSE_NAME: "Good Governance and Social Responsibility",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bajo",
      INSTRUCTOR_FIRST_NAME: "Crisnar Jadine",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguila",
      INSTRUCTOR_FIRST_NAME: "Leo",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toral",
      INSTRUCTOR_FIRST_NAME: "Lara Denise",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salas",
      INSTRUCTOR_FIRST_NAME: "Matt Hugh Albert",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Metts",
      INSTRUCTOR_FIRST_NAME: "Matthew Joshua",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andi",
      INSTRUCTOR_FIRST_NAME: "Rayyan",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laurente",
      INSTRUCTOR_FIRST_NAME: "Ronald",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calo",
      INSTRUCTOR_FIRST_NAME: "Rigel Tohamy",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Timogtimog",
      INSTRUCTOR_FIRST_NAME: "Zoe",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "VALENCERINA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "HANNA REGINE",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabal_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mira Sol",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gopiteo",
      INSTRUCTOR_FIRST_NAME: "Angelika",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabahug",
      INSTRUCTOR_FIRST_NAME: "Joshua Victor B",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agbas",
      INSTRUCTOR_FIRST_NAME: "Lester John",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bulseco",
      INSTRUCTOR_FIRST_NAME: "Aleija Rafaella",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garrido",
      INSTRUCTOR_FIRST_NAME: "Angelyn",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tuanquin",
      INSTRUCTOR_FIRST_NAME: "Beau Damien",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vidal",
      INSTRUCTOR_FIRST_NAME: "Brent Margarette",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arim",
      INSTRUCTOR_FIRST_NAME: "Charles",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalugdog",
      INSTRUCTOR_FIRST_NAME: "Christine Frances",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Landa",
      INSTRUCTOR_FIRST_NAME: "Christian Levi",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Del Mundo",
      INSTRUCTOR_FIRST_NAME: "Candice Nicole",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cariño",
      INSTRUCTOR_FIRST_NAME: "Deus William",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oliva",
      INSTRUCTOR_FIRST_NAME: "Emma Rose",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sorbito",
      INSTRUCTOR_FIRST_NAME: "Jian Carlo",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Jasper Dave",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Provido",
      INSTRUCTOR_FIRST_NAME: "Jaden",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sitoy",
      INSTRUCTOR_FIRST_NAME: "Jojit",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bonguyan",
      INSTRUCTOR_FIRST_NAME: "John Zachary",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brato",
      INSTRUCTOR_FIRST_NAME: "Kyle Andrei",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paclibar",
      INSTRUCTOR_FIRST_NAME: "Krizha Mae",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quimno",
      INSTRUCTOR_FIRST_NAME: "Michael Bernard",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enriquez",
      INSTRUCTOR_FIRST_NAME: "Marc Ebenjamin",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ledesma",
      INSTRUCTOR_FIRST_NAME: "Mar Lorenz",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Raminto",
      INSTRUCTOR_FIRST_NAME: "Princess Nicole",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valmores",
      INSTRUCTOR_FIRST_NAME: "Reszan James",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Layaoen",
      INSTRUCTOR_FIRST_NAME: "Susie Jane",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Threena Paula",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quintela",
      INSTRUCTOR_FIRST_NAME: "Veronica Laine",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "CASAS_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JOAN",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borla",
      INSTRUCTOR_FIRST_NAME: "Ada Isabel",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bulac",
      INSTRUCTOR_FIRST_NAME: "Alyanna Pauline",
      COURSE_NAME: "Thesis 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abella",
      INSTRUCTOR_FIRST_NAME: "Carlos Kane",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arnaiz",
      INSTRUCTOR_FIRST_NAME: "Dan Floyd",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carrillo",
      INSTRUCTOR_FIRST_NAME: "Eilyazen",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Basilio",
      INSTRUCTOR_FIRST_NAME: "Elyn Julia",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agno",
      INSTRUCTOR_FIRST_NAME: "Lawrence",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacaling",
      INSTRUCTOR_FIRST_NAME: "Matthew Vincent",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cacar",
      INSTRUCTOR_FIRST_NAME: "Rogen Ruy",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agno",
      INSTRUCTOR_FIRST_NAME: "Sophia",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tripoli",
      INSTRUCTOR_FIRST_NAME: "Seth Angelo",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Omar",
      INSTRUCTOR_FIRST_NAME: "Ahsan",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Iway",
      INSTRUCTOR_FIRST_NAME: "Felicity Kate",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Golucino",
      INSTRUCTOR_FIRST_NAME: "Giessela Joy",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Golucino",
      INSTRUCTOR_FIRST_NAME: "Glenneice Jebb",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garces",
      INSTRUCTOR_FIRST_NAME: "Donne",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pulido",
      INSTRUCTOR_FIRST_NAME: "Frince Daian",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pulido",
      INSTRUCTOR_FIRST_NAME: "Florencio",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alboroto",
      INSTRUCTOR_FIRST_NAME: "Jad Rafael",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amador",
      INSTRUCTOR_FIRST_NAME: "Lawrence",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sibal",
      INSTRUCTOR_FIRST_NAME: "Lichael Eldward",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Purswani",
      INSTRUCTOR_FIRST_NAME: "Raji Jan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lungay",
      INSTRUCTOR_FIRST_NAME: "Christopher Rey",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banzali",
      INSTRUCTOR_FIRST_NAME: "Ai",
      COURSE_NAME: "Production and Operations Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cid",
      INSTRUCTOR_FIRST_NAME: "Adrian Jose",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacastesantos",
      INSTRUCTOR_FIRST_NAME: "Ahron John",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Christian Rhyss",
      COURSE_NAME: "CCNA Routing and Switching 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelle",
      INSTRUCTOR_FIRST_NAME: "Dren",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosel",
      INSTRUCTOR_FIRST_NAME: "Hanah Crystallene",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Hannah Jasmine",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bermudez",
      INSTRUCTOR_FIRST_NAME: "Jeane Bernard",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lupera",
      INSTRUCTOR_FIRST_NAME: "Krystal Kate",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gotico",
      INSTRUCTOR_FIRST_NAME: "Khezia Mavin",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Keisha Yhana",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tacuken",
      INSTRUCTOR_FIRST_NAME: "Ruben",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bailio",
      INSTRUCTOR_FIRST_NAME: "Sophie",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alforque",
      INSTRUCTOR_FIRST_NAME: "Tristan Shawn",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lubuguin",
      INSTRUCTOR_FIRST_NAME: "Amer",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hilario",
      INSTRUCTOR_FIRST_NAME: "Cariella Jula",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Getigan",
      INSTRUCTOR_FIRST_NAME: "Debbie Shane",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abonales",
      INSTRUCTOR_FIRST_NAME: "Ethan Jhon",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Velasquez",
      INSTRUCTOR_FIRST_NAME: "Giero",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Javier",
      INSTRUCTOR_FIRST_NAME: "Irish Dawn",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ambasan",
      INSTRUCTOR_FIRST_NAME: "Jero",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacorda",
      INSTRUCTOR_FIRST_NAME: "Jomar",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Algunas",
      INSTRUCTOR_FIRST_NAME: "Kyla",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcaida",
      INSTRUCTOR_FIRST_NAME: "Lord Kylenne",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doronila",
      INSTRUCTOR_FIRST_NAME: "Patricia Gianne",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gomez",
      INSTRUCTOR_FIRST_NAME: "Ryzel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sastre",
      INSTRUCTOR_FIRST_NAME: "Rijim Harold",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arban",
      INSTRUCTOR_FIRST_NAME: "Rovic John",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bongabong",
      INSTRUCTOR_FIRST_NAME: "Sonnie James",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baruiz",
      INSTRUCTOR_FIRST_NAME: "Troy John",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nagata",
      INSTRUCTOR_FIRST_NAME: "Yumi",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asahid_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Remelyn",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galvez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mia",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortega",
      INSTRUCTOR_FIRST_NAME: "Athina Danielle",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Anshenmae Joyce",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Real",
      INSTRUCTOR_FIRST_NAME: "Althea Mae",
      COURSE_NAME: "ECE Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Torres",
      INSTRUCTOR_FIRST_NAME: "Andrea Nicole",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nierras",
      INSTRUCTOR_FIRST_NAME: "Christine Mikhaella",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelpinosas",
      INSTRUCTOR_FIRST_NAME: "Dune Aldwin",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Romuar",
      INSTRUCTOR_FIRST_NAME: "Judy Kaye",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tiu",
      INSTRUCTOR_FIRST_NAME: "Jana May Fatima",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ostia",
      INSTRUCTOR_FIRST_NAME: "Jade",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joyo",
      INSTRUCTOR_FIRST_NAME: "K-Alexa",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Santos",
      INSTRUCTOR_FIRST_NAME: "Mikee",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uson",
      INSTRUCTOR_FIRST_NAME: "Micah Ylla",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ali",
      INSTRUCTOR_FIRST_NAME: "Najiep",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caluya",
      INSTRUCTOR_FIRST_NAME: "Pinky Jocelle",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Animas",
      INSTRUCTOR_FIRST_NAME: "Shane Raphael",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estember_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Rene",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samanodi_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Fatima Mecca",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Febbie Faith S.",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "SIMBULAS_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "FIDES",
      COURSE_NAME: "Production and Operations Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzaga",
      INSTRUCTOR_FIRST_NAME: "Aleia Marie",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diampa",
      INSTRUCTOR_FIRST_NAME: "Adriane Paul",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangaron",
      INSTRUCTOR_FIRST_NAME: "Christina Paula",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abellar",
      INSTRUCTOR_FIRST_NAME: "Janssie Richmond",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barbosa",
      INSTRUCTOR_FIRST_NAME: "Kristine Anne",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dao",
      INSTRUCTOR_FIRST_NAME: "Leah Mae",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flavier",
      INSTRUCTOR_FIRST_NAME: "Mervin Diego Rafael",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubino",
      INSTRUCTOR_FIRST_NAME: "Mike Juri",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laporre",
      INSTRUCTOR_FIRST_NAME: "Peter Miles Anthony",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabian",
      INSTRUCTOR_FIRST_NAME: "Ralph Edcel",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galanto",
      INSTRUCTOR_FIRST_NAME: "Zoei Trek",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pactor_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jennyfer",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villaflor",
      INSTRUCTOR_FIRST_NAME: "Earl Khervie",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocubillo",
      INSTRUCTOR_FIRST_NAME: "Francyne Karel",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parreño",
      INSTRUCTOR_FIRST_NAME: "Jamril Maclain",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jajalis",
      INSTRUCTOR_FIRST_NAME: "Nur-Adnin",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espina",
      INSTRUCTOR_FIRST_NAME: "Samantha Claire",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fiel",
      INSTRUCTOR_FIRST_NAME: "Anwell Earl",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cerna",
      INSTRUCTOR_FIRST_NAME: "Andrei Manuel",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valenzuela",
      INSTRUCTOR_FIRST_NAME: "Bea Alexandria",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquiatan",
      INSTRUCTOR_FIRST_NAME: "Fraunell Anzel",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mananquil",
      INSTRUCTOR_FIRST_NAME: "Glydel Christi",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paña",
      INSTRUCTOR_FIRST_NAME: "Ivan Yuri",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ablay",
      INSTRUCTOR_FIRST_NAME: "Jana Athena Marie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andolana",
      INSTRUCTOR_FIRST_NAME: "Kierulf",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castro",
      INSTRUCTOR_FIRST_NAME: "Katherine",
      COURSE_NAME: "Advanced Engineering Mathematics (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Relva",
      INSTRUCTOR_FIRST_NAME: "Mia Lauren",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cadorna",
      INSTRUCTOR_FIRST_NAME: "Rolann Darlene",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ceniza",
      INSTRUCTOR_FIRST_NAME: "Samantha",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Isleta",
      INSTRUCTOR_FIRST_NAME: "Xhyrich",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Somozo",
      INSTRUCTOR_FIRST_NAME: "Bethel",
      COURSE_NAME: "Good Governance and Social Responsibility",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asiong",
      INSTRUCTOR_FIRST_NAME: "Caster Troy",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simplicio Jr.",
      INSTRUCTOR_FIRST_NAME: "Henrito",
      COURSE_NAME: "Operating Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Templa",
      INSTRUCTOR_FIRST_NAME: "Carlo Angelo Jonathan",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calla",
      INSTRUCTOR_FIRST_NAME: "Inno Angelo",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garialdo",
      INSTRUCTOR_FIRST_NAME: "John Clayford",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aranjuez",
      INSTRUCTOR_FIRST_NAME: "Julliene Kate",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peloton",
      INSTRUCTOR_FIRST_NAME: "Juan Rafael",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benabaye",
      INSTRUCTOR_FIRST_NAME: "John Ynno",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suan",
      INSTRUCTOR_FIRST_NAME: "Kristina Celine",
      COURSE_NAME: "CCNA Routing and Switching 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuyong",
      INSTRUCTOR_FIRST_NAME: "Melbert Kaye",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kanazawa",
      INSTRUCTOR_FIRST_NAME: "Miko",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Timtim",
      INSTRUCTOR_FIRST_NAME: "Patrick Luigi",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dinopol",
      INSTRUCTOR_FIRST_NAME: "Shannin Nicole",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baldelovar",
      INSTRUCTOR_FIRST_NAME: "Ydnar Christian",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "NUMBER",
      INSTRUCTOR_FIRST_NAME: "BB USER",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Angellika Chyn",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elorde",
      INSTRUCTOR_FIRST_NAME: "Alexius",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bascones",
      INSTRUCTOR_FIRST_NAME: "Bez Maxine",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asoy",
      INSTRUCTOR_FIRST_NAME: "Christian James Rey",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zerrudo",
      INSTRUCTOR_FIRST_NAME: "Christofer Lawrence",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bornea",
      INSTRUCTOR_FIRST_NAME: "Carina Miel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paguio",
      INSTRUCTOR_FIRST_NAME: "Carlo",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rivera",
      INSTRUCTOR_FIRST_NAME: "Daphne Jade",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galo",
      INSTRUCTOR_FIRST_NAME: "Giulian",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garvida",
      INSTRUCTOR_FIRST_NAME: "Gabriela",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Geollegue",
      INSTRUCTOR_FIRST_NAME: "Harriet",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bantugan",
      INSTRUCTOR_FIRST_NAME: "Jose Alanis",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuizon",
      INSTRUCTOR_FIRST_NAME: "John Nestor",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "John Vincent",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palomata",
      INSTRUCTOR_FIRST_NAME: "Layranz Claire",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Heruela",
      INSTRUCTOR_FIRST_NAME: "Leanna",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Mark Justine",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortaliz",
      INSTRUCTOR_FIRST_NAME: "Michael Joseph",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mahusay",
      INSTRUCTOR_FIRST_NAME: "Melissa Mae",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Berina",
      INSTRUCTOR_FIRST_NAME: "Princess Jda Mea",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gatus",
      INSTRUCTOR_FIRST_NAME: "Raymund Anthony",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abella",
      INSTRUCTOR_FIRST_NAME: "Sharmaine",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balmes",
      INSTRUCTOR_FIRST_NAME: "Shekinah Joy",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Therese Kyle",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elduayen",
      INSTRUCTOR_FIRST_NAME: "Vincent Roi",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Infante_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Paul John",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "PITLO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JOHN MARCO M.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Victorio_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ninya",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morales_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Frandel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Ashlee Nicole",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galaraga",
      INSTRUCTOR_FIRST_NAME: "Alyssa Rayme",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cacabelos",
      INSTRUCTOR_FIRST_NAME: "Aynah Uela",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abe",
      INSTRUCTOR_FIRST_NAME: "Beverly",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martije",
      INSTRUCTOR_FIRST_NAME: "Britney Stiff",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Charlize Angelica",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tañedo",
      INSTRUCTOR_FIRST_NAME: "Christian Jen",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maligsa",
      INSTRUCTOR_FIRST_NAME: "Caisey Ricole",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quitorio",
      INSTRUCTOR_FIRST_NAME: "Faith",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maraguinot",
      INSTRUCTOR_FIRST_NAME: "Gwynet Althea",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Jazmin",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ballo",
      INSTRUCTOR_FIRST_NAME: "Josiah Eric",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dompor",
      INSTRUCTOR_FIRST_NAME: "John Lee",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrancullo",
      INSTRUCTOR_FIRST_NAME: "Shaira Coleen",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arañez",
      INSTRUCTOR_FIRST_NAME: "Trisha Ruchelle",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Libre",
      INSTRUCTOR_FIRST_NAME: "Denzel Jonathan",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bravo",
      INSTRUCTOR_FIRST_NAME: "Achilles Geoffrey",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duran",
      INSTRUCTOR_FIRST_NAME: "Deon Edward",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tajo",
      INSTRUCTOR_FIRST_NAME: "Chariz Ann L",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gunasekaran",
      INSTRUCTOR_FIRST_NAME: "Michael Joseph",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiñones",
      INSTRUCTOR_FIRST_NAME: "Kay Hiacenth B",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garrido",
      INSTRUCTOR_FIRST_NAME: "Jose Rafael",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tenchavez",
      INSTRUCTOR_FIRST_NAME: "Clyde Harley C",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plaza",
      INSTRUCTOR_FIRST_NAME: "Dante",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maldonado Zavala",
      INSTRUCTOR_FIRST_NAME: "Fernando",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pedroso",
      INSTRUCTOR_FIRST_NAME: "John Michael",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orog",
      INSTRUCTOR_FIRST_NAME: "John Paul S",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ala",
      INSTRUCTOR_FIRST_NAME: "Datu Eden",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fu",
      INSTRUCTOR_FIRST_NAME: "Kent Oliver",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monfort",
      INSTRUCTOR_FIRST_NAME: "Pascual Jason",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Casangyao",
      INSTRUCTOR_FIRST_NAME: "Trishia Izze",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alba",
      INSTRUCTOR_FIRST_NAME: "Ace Julianne",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacorte",
      INSTRUCTOR_FIRST_NAME: "Darius Kyle",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biruar",
      INSTRUCTOR_FIRST_NAME: "Ash-Shakir Khider",
      COURSE_NAME: "Production and Operations Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anding",
      INSTRUCTOR_FIRST_NAME: "Janelle Rose",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Denzon",
      INSTRUCTOR_FIRST_NAME: "Keith Adrian",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Kate",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Revilla",
      INSTRUCTOR_FIRST_NAME: "Karl Jabez",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lundag",
      INSTRUCTOR_FIRST_NAME: "Kenji",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caseñas",
      INSTRUCTOR_FIRST_NAME: "Luke Seymour",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Royeras",
      INSTRUCTOR_FIRST_NAME: "Mc Curvin",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Datumanong",
      INSTRUCTOR_FIRST_NAME: "Nornesa",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuaresma",
      INSTRUCTOR_FIRST_NAME: "Neil Stephen",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vizconde",
      INSTRUCTOR_FIRST_NAME: "Rafael Jose",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macias",
      INSTRUCTOR_FIRST_NAME: "Russel Matt",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Roderno",
      INSTRUCTOR_FIRST_NAME: "Renzo Miguel",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brillantes",
      INSTRUCTOR_FIRST_NAME: "Yves Rael",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarabia",
      INSTRUCTOR_FIRST_NAME: "Chynna Alexa Ryl",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Beltran",
      INSTRUCTOR_FIRST_NAME: "Daniela Christine",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandi",
      INSTRUCTOR_FIRST_NAME: "Dominique Knip",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomas",
      INSTRUCTOR_FIRST_NAME: "Dyxter",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aleria",
      INSTRUCTOR_FIRST_NAME: "Francine Anne",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gomez",
      INSTRUCTOR_FIRST_NAME: "Isobel Vespertina",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jayme",
      INSTRUCTOR_FIRST_NAME: "Jeddh Andrew",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oclarit",
      INSTRUCTOR_FIRST_NAME: "Julia Bettina",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Damalerio",
      INSTRUCTOR_FIRST_NAME: "Jonathan David",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dizon",
      INSTRUCTOR_FIRST_NAME: "Jonessa",
      COURSE_NAME: "Electronics Circuits Analysis and Design (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oclarit",
      INSTRUCTOR_FIRST_NAME: "Joshua Emmanuel",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pahila",
      INSTRUCTOR_FIRST_NAME: "Jenny Katrina",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayanan",
      INSTRUCTOR_FIRST_NAME: "Julianna Roby",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuscablo",
      INSTRUCTOR_FIRST_NAME: "Johnsen Ricalie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Portos",
      INSTRUCTOR_FIRST_NAME: "John Raymond",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castro",
      INSTRUCTOR_FIRST_NAME: "Jan Ysabel",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Limbaga",
      INSTRUCTOR_FIRST_NAME: "Kayla Kaye",
      COURSE_NAME: "Machine Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bajado",
      INSTRUCTOR_FIRST_NAME: "Lois Akilah",
      COURSE_NAME: "Fundamentals of Material Science and Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Miguel Angelo",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manliguis",
      INSTRUCTOR_FIRST_NAME: "Monica Debra",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hernandez",
      INSTRUCTOR_FIRST_NAME: "Peter Paul",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espina",
      INSTRUCTOR_FIRST_NAME: "Reia Blanche",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañagale",
      INSTRUCTOR_FIRST_NAME: "Rey Ryan",
      COURSE_NAME: "Post-Production Techniques",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sayon",
      INSTRUCTOR_FIRST_NAME: "Sophia Kaye",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodrigo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Roel",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dionio",
      INSTRUCTOR_FIRST_NAME: "Kendrick",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lapiras",
      INSTRUCTOR_FIRST_NAME: "Marjhuvyn",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macalisang",
      INSTRUCTOR_FIRST_NAME: "Cedie",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Audrey Alfred Kurt",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ignes",
      INSTRUCTOR_FIRST_NAME: "Abigail",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estomo",
      INSTRUCTOR_FIRST_NAME: "Chass Clayton",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Cyrus",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortel",
      INSTRUCTOR_FIRST_NAME: "Dionn Frederick",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tamulon",
      INSTRUCTOR_FIRST_NAME: "Dave Lheandre",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Emiel Benedict",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balinas",
      INSTRUCTOR_FIRST_NAME: "Florence Angelou",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andoy",
      INSTRUCTOR_FIRST_NAME: "Fayeed Al-Jasem",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Japitana",
      INSTRUCTOR_FIRST_NAME: "Fritz Jv Austin",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pascual",
      INSTRUCTOR_FIRST_NAME: "Francis John",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antogop",
      INSTRUCTOR_FIRST_NAME: "Giovanne",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nalual",
      INSTRUCTOR_FIRST_NAME: "Ivan Axel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Jerome",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacanaria",
      INSTRUCTOR_FIRST_NAME: "Kyle Dhane",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Kiara Vlei",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daligdig",
      INSTRUCTOR_FIRST_NAME: "Mary Armel Joy",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paja",
      INSTRUCTOR_FIRST_NAME: "Marjie Angelyn",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amil",
      INSTRUCTOR_FIRST_NAME: "Man-Ishar",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrer",
      INSTRUCTOR_FIRST_NAME: "Nathaniel",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simon",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Isaac",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tariman",
      INSTRUCTOR_FIRST_NAME: "Nathaniel",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nepa",
      INSTRUCTOR_FIRST_NAME: "Rachelle Ann",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gultiano",
      INSTRUCTOR_FIRST_NAME: "Rachel Camilla",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dain",
      INSTRUCTOR_FIRST_NAME: "Reizel Fae",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ninte",
      INSTRUCTOR_FIRST_NAME: "Rayne Julianne",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chio",
      INSTRUCTOR_FIRST_NAME: "Rainier Raye",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ines",
      INSTRUCTOR_FIRST_NAME: "Ryzamil Shaena",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tagalog",
      INSTRUCTOR_FIRST_NAME: "Reeve Varen",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tesoro",
      INSTRUCTOR_FIRST_NAME: "William Alec",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lin",
      INSTRUCTOR_FIRST_NAME: "Yii Chiun",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "MADRAZO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "KYRA GELOISA JANE P.",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Guia_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Emmalyn",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cangayda",
      INSTRUCTOR_FIRST_NAME: "Andrie Jed",
      COURSE_NAME: "Capstone Project 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Condor",
      INSTRUCTOR_FIRST_NAME: "Christian Babe",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gilayo",
      INSTRUCTOR_FIRST_NAME: "Chris Jericho",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Patrimonio",
      INSTRUCTOR_FIRST_NAME: "Carl Joshua",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pamor",
      INSTRUCTOR_FIRST_NAME: "Charlaine Kaye",
      COURSE_NAME: "DC MACHINERY (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Prado",
      INSTRUCTOR_FIRST_NAME: "Daniel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simbajon",
      INSTRUCTOR_FIRST_NAME: "Franciane",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magan",
      INSTRUCTOR_FIRST_NAME: "Hector Anthony",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andong",
      INSTRUCTOR_FIRST_NAME: "Jonniah",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ragadio",
      INSTRUCTOR_FIRST_NAME: "Julienne Cyril",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panis",
      INSTRUCTOR_FIRST_NAME: "Jeffsea",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabanillo",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galo",
      INSTRUCTOR_FIRST_NAME: "Julienne Trisha Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lolo",
      INSTRUCTOR_FIRST_NAME: "Maydelyn Que",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banzali",
      INSTRUCTOR_FIRST_NAME: "Ma. Ysabel",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dueñas",
      INSTRUCTOR_FIRST_NAME: "Nathalie Christine Felizia",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wu",
      INSTRUCTOR_FIRST_NAME: "Robilyn",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "donotdelete_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "BBSupport",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacillo",
      INSTRUCTOR_FIRST_NAME: "Angel May",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montilde",
      INSTRUCTOR_FIRST_NAME: "Althea Mae",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "GASIT",
      INSTRUCTOR_FIRST_NAME: "LOVELY ROSE R.",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Echevarria_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Alyssa Nicole",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Joyo",
      INSTRUCTOR_FIRST_NAME: "K-Alyza",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paña",
      INSTRUCTOR_FIRST_NAME: "Jenny Rena",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Butongkay",
      INSTRUCTOR_FIRST_NAME: "Jebryel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pangilinan",
      INSTRUCTOR_FIRST_NAME: "Anya Sophia",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trasmil",
      INSTRUCTOR_FIRST_NAME: "Creeza Jean",
      COURSE_NAME: "Facilities Planning and Design Principles",
    },
    {
      INSTRUCTOR_LAST_NAME: "Neniel",
      INSTRUCTOR_FIRST_NAME: "Czarina Mae",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vital",
      INSTRUCTOR_FIRST_NAME: "Gavriel Tristan",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Gabriel",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enopia",
      INSTRUCTOR_FIRST_NAME: "Jennica Ann",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Griño",
      INSTRUCTOR_FIRST_NAME: "Julia Marie",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponferrada",
      INSTRUCTOR_FIRST_NAME: "Juancho Paolo",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calvelo",
      INSTRUCTOR_FIRST_NAME: "Keeane Jazyque",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacag",
      INSTRUCTOR_FIRST_NAME: "Mona Dainna Jane",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Overly",
      INSTRUCTOR_FIRST_NAME: "Adriana Lauren",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agata",
      INSTRUCTOR_FIRST_NAME: "Taichi Niño",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Latap",
      INSTRUCTOR_FIRST_NAME: "Louie Jay",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Necesario",
      INSTRUCTOR_FIRST_NAME: "Jerro",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bata",
      INSTRUCTOR_FIRST_NAME: "Franzeska Corinne",
      COURSE_NAME: "Advanced Logic",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarsaba",
      INSTRUCTOR_FIRST_NAME: "Angel Grace",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fiel",
      INSTRUCTOR_FIRST_NAME: "Abby Trisha",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumaling",
      INSTRUCTOR_FIRST_NAME: "Rey",
      COURSE_NAME: "HyFlex Learning Workshop",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Lanz Reno",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andres",
      INSTRUCTOR_FIRST_NAME: "Patricia Ly",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padillo",
      INSTRUCTOR_FIRST_NAME: "Ronan Joseph",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fajardo",
      INSTRUCTOR_FIRST_NAME: "Gil Jason",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Derayal",
      INSTRUCTOR_FIRST_NAME: "Hermosa",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ching",
      INSTRUCTOR_FIRST_NAME: "Yari",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "John Paul",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mar",
      INSTRUCTOR_FIRST_NAME: "Keian Renheart",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rutia",
      INSTRUCTOR_FIRST_NAME: "Oscar George",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Porras",
      INSTRUCTOR_FIRST_NAME: "Ken John",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manzanares",
      INSTRUCTOR_FIRST_NAME: "Marc T",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labis",
      INSTRUCTOR_FIRST_NAME: "Aidrian",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabaya",
      INSTRUCTOR_FIRST_NAME: "Zetryl Jean",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gacal",
      INSTRUCTOR_FIRST_NAME: "Emilio",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Marc Zymon",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Goo",
      INSTRUCTOR_FIRST_NAME: "Boyoung",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toyoda",
      INSTRUCTOR_FIRST_NAME: "Jaen Rafael",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nakakusu",
      INSTRUCTOR_FIRST_NAME: "Reina",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Johnson",
      INSTRUCTOR_FIRST_NAME: "Jullohn Krystan V",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galagar_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jesse Jones",
      COURSE_NAME: "Principles of 2D Animation (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "MANGUBAT_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JOVAIRA",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sepulveda",
      INSTRUCTOR_FIRST_NAME: "Miguel Lorenzo",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Campaña",
      INSTRUCTOR_FIRST_NAME: "Nolymarie Crystine",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Norberto Cris",
      COURSE_NAME: "Advanced Engineering Mathematics (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dolloso",
      INSTRUCTOR_FIRST_NAME: "Nathan Eric",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacquing",
      INSTRUCTOR_FIRST_NAME: "Russell John",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Occeña",
      INSTRUCTOR_FIRST_NAME: "Vincent Jayner",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "AVILA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "CLARIBEL P.",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aboso",
      INSTRUCTOR_FIRST_NAME: "Reven",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salik",
      INSTRUCTOR_FIRST_NAME: "Sarah",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abude",
      INSTRUCTOR_FIRST_NAME: "Althea",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kadon",
      INSTRUCTOR_FIRST_NAME: "Allan Alexander",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lam",
      INSTRUCTOR_FIRST_NAME: "Alexandra Celine",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matondo",
      INSTRUCTOR_FIRST_NAME: "Antoinette Mae",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aliman",
      INSTRUCTOR_FIRST_NAME: "Datu Omar Mustapha",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tiu-Bot",
      INSTRUCTOR_FIRST_NAME: "Eryn Anne",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vilan",
      INSTRUCTOR_FIRST_NAME: "Edrienne Hershey",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padernilla",
      INSTRUCTOR_FIRST_NAME: "Francis Arnel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abada",
      INSTRUCTOR_FIRST_NAME: "Hanz Hendric Gabriel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vestal",
      INSTRUCTOR_FIRST_NAME: "Jose Marie",
      COURSE_NAME: "System Analysis and Design (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gelbolingo",
      INSTRUCTOR_FIRST_NAME: "Katrina",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alabata",
      INSTRUCTOR_FIRST_NAME: "Kharl Jomari",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Felicia",
      INSTRUCTOR_FIRST_NAME: "Luigi",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiño",
      INSTRUCTOR_FIRST_NAME: "Lovegail",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Danan",
      INSTRUCTOR_FIRST_NAME: "Mizzia Athena",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matondo",
      INSTRUCTOR_FIRST_NAME: "Mark Anthony",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Beltran",
      INSTRUCTOR_FIRST_NAME: "Mcglennon Glexie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Digao",
      INSTRUCTOR_FIRST_NAME: "Ma. Gianna Vielka",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Is-Haq",
      INSTRUCTOR_FIRST_NAME: "Mohammad Haddad",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alibaer",
      INSTRUCTOR_FIRST_NAME: "Nashemin",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Nicole Anne",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clarito",
      INSTRUCTOR_FIRST_NAME: "Robert Anthony",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Crisostomo",
      INSTRUCTOR_FIRST_NAME: "Russel James",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dante",
      INSTRUCTOR_FIRST_NAME: "Rezylaine Louise",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cobalida",
      INSTRUCTOR_FIRST_NAME: "Roline Mae",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacang",
      INSTRUCTOR_FIRST_NAME: "Sophia Bella",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villegas",
      INSTRUCTOR_FIRST_NAME: "Xena",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mari Zalvi",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jaini",
      INSTRUCTOR_FIRST_NAME: "Aljaber Allie",
      COURSE_NAME: "DC MACHINERY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boquiren",
      INSTRUCTOR_FIRST_NAME: "Anthony Kendrick",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bibaoco",
      INSTRUCTOR_FIRST_NAME: "Alain",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ea",
      INSTRUCTOR_FIRST_NAME: "Alessandro Romero",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villahermosa",
      INSTRUCTOR_FIRST_NAME: "Alexander",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calapre",
      INSTRUCTOR_FIRST_NAME: "Chandler Philip",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guro",
      INSTRUCTOR_FIRST_NAME: "Fahyeedh",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carcedo",
      INSTRUCTOR_FIRST_NAME: "Jacy Davis",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siao",
      INSTRUCTOR_FIRST_NAME: "Josh Kristian",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangibunong",
      INSTRUCTOR_FIRST_NAME: "Jastine Lance",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Franco",
      INSTRUCTOR_FIRST_NAME: "Jomarie Zyme",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vargas",
      INSTRUCTOR_FIRST_NAME: "Marcello Miguel",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lonzaga",
      INSTRUCTOR_FIRST_NAME: "Steven",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paraiso",
      INSTRUCTOR_FIRST_NAME: "Trishia Keith Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Gerard",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avendano",
      INSTRUCTOR_FIRST_NAME: "Glenn",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balbin",
      INSTRUCTOR_FIRST_NAME: "Jessie Jaye",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eleazar",
      INSTRUCTOR_FIRST_NAME: "Elisa",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fowler",
      INSTRUCTOR_FIRST_NAME: "Peter Matthew Paul",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumasing",
      INSTRUCTOR_FIRST_NAME: "Janice",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nicdao",
      INSTRUCTOR_FIRST_NAME: "John Chrisian",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sucaldito",
      INSTRUCTOR_FIRST_NAME: "Micahel Angelo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Bart Andrew",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abutanmo",
      INSTRUCTOR_FIRST_NAME: "Allister Justin",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Casumpang",
      INSTRUCTOR_FIRST_NAME: "Andrea Louisse",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salanga Jr",
      INSTRUCTOR_FIRST_NAME: "Allen",
      COURSE_NAME: "Game Programming 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Demayuga",
      INSTRUCTOR_FIRST_NAME: "Cybert June",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diuyan",
      INSTRUCTOR_FIRST_NAME: "Emmanuelle Ray",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Glori Maris",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rivera",
      INSTRUCTOR_FIRST_NAME: "Janmark Evan",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Grejaldo",
      INSTRUCTOR_FIRST_NAME: "James",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Melecio",
      INSTRUCTOR_FIRST_NAME: "Jade",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferraren",
      INSTRUCTOR_FIRST_NAME: "James Mckinely",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Admana",
      INSTRUCTOR_FIRST_NAME: "Kenjie",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumianjang",
      INSTRUCTOR_FIRST_NAME: "Abd Matiein",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alibang",
      INSTRUCTOR_FIRST_NAME: "Gideon",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "John Laurence",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Juliana Marien",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrancullo",
      INSTRUCTOR_FIRST_NAME: "Kenny Roi",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gapasin",
      INSTRUCTOR_FIRST_NAME: "Matt Louise",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padora",
      INSTRUCTOR_FIRST_NAME: "Mayumi",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almazan",
      INSTRUCTOR_FIRST_NAME: "Nathalie Faye",
      COURSE_NAME: "Principles of 2D Animation (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gavasan",
      INSTRUCTOR_FIRST_NAME: "Paul Angelo",
      COURSE_NAME: "Industrial Organization and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Jesus",
      INSTRUCTOR_FIRST_NAME: "Pauline Kyle",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cainglet",
      INSTRUCTOR_FIRST_NAME: "Samantha",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Taha",
      INSTRUCTOR_FIRST_NAME: "Yunus",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oclaret",
      INSTRUCTOR_FIRST_NAME: "Bernard Jay",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelayo",
      INSTRUCTOR_FIRST_NAME: "Rolando",
      COURSE_NAME: "ME Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Janel Rry",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estibal",
      INSTRUCTOR_FIRST_NAME: "Alfonse Ireneo",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelayo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Rolando",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuerpo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Maria Suzette",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ano-Os",
      INSTRUCTOR_FIRST_NAME: "Alexa Vanica",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albarico",
      INSTRUCTOR_FIRST_NAME: "Hazel",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fregillana",
      INSTRUCTOR_FIRST_NAME: "Kjelcher",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cainglet",
      INSTRUCTOR_FIRST_NAME: "Matthew",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maruyama",
      INSTRUCTOR_FIRST_NAME: "Sora",
      COURSE_NAME: "Logic Circuits and Switching Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bangayan",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cervancia",
      INSTRUCTOR_FIRST_NAME: "Kristine",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panaligan",
      INSTRUCTOR_FIRST_NAME: "Tristan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rebutiaco",
      INSTRUCTOR_FIRST_NAME: "Ada Vianca",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maala",
      INSTRUCTOR_FIRST_NAME: "Raniel",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Dominique Josh",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Faustino",
      INSTRUCTOR_FIRST_NAME: "Justine",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mariano",
      INSTRUCTOR_FIRST_NAME: "Jyzel Ace",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Prado",
      INSTRUCTOR_FIRST_NAME: "Julianne Benedict",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lobiano",
      INSTRUCTOR_FIRST_NAME: "John Christopher",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lucero",
      INSTRUCTOR_FIRST_NAME: "Miguel",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodas",
      INSTRUCTOR_FIRST_NAME: "Charlie",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avance",
      INSTRUCTOR_FIRST_NAME: "Laurence Christian",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toribio",
      INSTRUCTOR_FIRST_NAME: "Angela Mikaela",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tilacan",
      INSTRUCTOR_FIRST_NAME: "Ceja",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lison",
      INSTRUCTOR_FIRST_NAME: "Kurt Brian",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pantig",
      INSTRUCTOR_FIRST_NAME: "Louise Jermie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bagaforo",
      INSTRUCTOR_FIRST_NAME: "Misha Leigh",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañada",
      INSTRUCTOR_FIRST_NAME: "Rizza Mae",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Damalerio",
      INSTRUCTOR_FIRST_NAME: "Maia Julienne",
      COURSE_NAME: "DC MACHINERY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Melliza_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kevin",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rebutiaco_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ada Vianca",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cervancia_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kristine",
      COURSE_NAME: "Electromagnetics for ECE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Janel Rry",
      COURSE_NAME: "CCNA Routing and Switching 1(Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "LOGROSA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "GERNELYN T.",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sucaldito_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Micahel Angelo",
      COURSE_NAME: "Audio Design and Sound Engineering (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baste_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Martzel",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "LEOPOLDO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "MERIAM P.",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumasing_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Janice",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibarra_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Joseph Byran",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barnal",
      INSTRUCTOR_FIRST_NAME: "Zakia Nia Angelie",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pascua",
      INSTRUCTOR_FIRST_NAME: "Cristina",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacre",
      INSTRUCTOR_FIRST_NAME: "Lythe Marvin",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sañada",
      INSTRUCTOR_FIRST_NAME: "Sean",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magoncia",
      INSTRUCTOR_FIRST_NAME: "Charles Khen",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Patrimonio",
      INSTRUCTOR_FIRST_NAME: "Sean Carlo",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumapac",
      INSTRUCTOR_FIRST_NAME: "Venice Julienne",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atienza_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Alexander Hamilton",
      COURSE_NAME: "Mathematics for Engineers (Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabalse_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Rhizhail",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacis_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Silong",
      INSTRUCTOR_FIRST_NAME: "Angeline",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Erynn Trichelle",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carr",
      INSTRUCTOR_FIRST_NAME: "Bryll Joseph",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bangoy",
      INSTRUCTOR_FIRST_NAME: "Renier Mitz",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rivera",
      INSTRUCTOR_FIRST_NAME: "Christian Gerard",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soco",
      INSTRUCTOR_FIRST_NAME: "Zoe Vera",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balansag",
      INSTRUCTOR_FIRST_NAME: "Trisha Mae",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bontuyan",
      INSTRUCTOR_FIRST_NAME: "Esther Kate",
      COURSE_NAME: "Modulation and Coding Techniques Laboratory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Landanganon",
      INSTRUCTOR_FIRST_NAME: "Jyde Emmanuel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villarta",
      INSTRUCTOR_FIRST_NAME: "Kent Anthony",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lapiña",
      INSTRUCTOR_FIRST_NAME: "Prince Jhamer",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oliva",
      INSTRUCTOR_FIRST_NAME: "Sean William",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gregorio",
      INSTRUCTOR_FIRST_NAME: "Carl Andrew",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Danielle Mae",
      COURSE_NAME: "Electronics Circuits Analysis and Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andolana",
      INSTRUCTOR_FIRST_NAME: "Kiel Jossiel",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Metran",
      INSTRUCTOR_FIRST_NAME: "Kyle Patryk",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandin",
      INSTRUCTOR_FIRST_NAME: "Lance Lawrence",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laco",
      INSTRUCTOR_FIRST_NAME: "Leila Marie",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serrano",
      INSTRUCTOR_FIRST_NAME: "Lance Matthew",
      COURSE_NAME: "DC MACHINERY (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Maria Ricaela Dhy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Braw",
      INSTRUCTOR_FIRST_NAME: "Nigel",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarcia",
      INSTRUCTOR_FIRST_NAME: "Sarah Suzzane",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cedeno",
      INSTRUCTOR_FIRST_NAME: "Angelo Ace",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Salde",
      INSTRUCTOR_FIRST_NAME: "Angela Veronica",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pepito",
      INSTRUCTOR_FIRST_NAME: "Lee Jeny",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chin",
      INSTRUCTOR_FIRST_NAME: "Niru",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enoval",
      INSTRUCTOR_FIRST_NAME: "Gabrielle",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guillermo",
      INSTRUCTOR_FIRST_NAME: "John Ross",
      COURSE_NAME: "Electromagnetics for ECE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agunod",
      INSTRUCTOR_FIRST_NAME: "Juan Miguel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dapit",
      INSTRUCTOR_FIRST_NAME: "Justin Patrick",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estalilla",
      INSTRUCTOR_FIRST_NAME: "Precious Andrei",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sangki",
      INSTRUCTOR_FIRST_NAME: "Ryhan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Huang",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "Basic Occupational Safety and Health",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padayogdog",
      INSTRUCTOR_FIRST_NAME: "Jairus Miles",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cenit",
      INSTRUCTOR_FIRST_NAME: "Lois Maxine",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suganob_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lapiras_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Marjhuvyn",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortes",
      INSTRUCTOR_FIRST_NAME: "Eunice Andrea",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villarosa",
      INSTRUCTOR_FIRST_NAME: "Julrich",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "CALUGAS_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ALEEN GLENN",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarmiento",
      INSTRUCTOR_FIRST_NAME: "Arl Gerald",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mahilum",
      INSTRUCTOR_FIRST_NAME: "Jayford",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Belonio",
      INSTRUCTOR_FIRST_NAME: "Kaila",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antepuesto",
      INSTRUCTOR_FIRST_NAME: "Lance Edward",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gampong",
      INSTRUCTOR_FIRST_NAME: "Mohammad",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orillo",
      INSTRUCTOR_FIRST_NAME: "Rio Marie",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tesoro",
      INSTRUCTOR_FIRST_NAME: "Shaira Lois",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacional",
      INSTRUCTOR_FIRST_NAME: "Angelo Gabriel",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malubay",
      INSTRUCTOR_FIRST_NAME: "Angela Julliet",
      COURSE_NAME: "Business Plan Implementation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palmes",
      INSTRUCTOR_FIRST_NAME: "Joina Mae",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catotal",
      INSTRUCTOR_FIRST_NAME: "Matthieu Rei",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cubero",
      INSTRUCTOR_FIRST_NAME: "Ray Joseph",
      COURSE_NAME: "IE Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escoreal",
      INSTRUCTOR_FIRST_NAME: "Josshua",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Ann Hope",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Datuin",
      INSTRUCTOR_FIRST_NAME: "Alex Mae Ann",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Adriel",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañez",
      INSTRUCTOR_FIRST_NAME: "Joaquin Lorenzo",
      COURSE_NAME: "E-Commerce",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ng",
      INSTRUCTOR_FIRST_NAME: "Kameron",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luarez",
      INSTRUCTOR_FIRST_NAME: "Thea Marie",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medallon_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Natheneal Paul",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Acle",
      INSTRUCTOR_FIRST_NAME: "Florence Gale",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villamil",
      INSTRUCTOR_FIRST_NAME: "Marc",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palanca",
      INSTRUCTOR_FIRST_NAME: "Randolph",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Jonas James",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Engalan",
      INSTRUCTOR_FIRST_NAME: "Leah Beth",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nidea",
      INSTRUCTOR_FIRST_NAME: "John Carlo",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madrazo",
      INSTRUCTOR_FIRST_NAME: "Liam Jared",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malnegro",
      INSTRUCTOR_FIRST_NAME: "Maverick Lance",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortiz",
      INSTRUCTOR_FIRST_NAME: "Bryan Selwyn",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Herda",
      INSTRUCTOR_FIRST_NAME: "Francis Rhyon",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Costales",
      INSTRUCTOR_FIRST_NAME: "Johan Mari",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amoguis",
      INSTRUCTOR_FIRST_NAME: "Rochie",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arnoco",
      INSTRUCTOR_FIRST_NAME: "Daniekou",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Warain",
      INSTRUCTOR_FIRST_NAME: "John Victor",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serafin",
      INSTRUCTOR_FIRST_NAME: "Trizia Katrina",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tacder_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Lovella Fe",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estardo",
      INSTRUCTOR_FIRST_NAME: "Sofia Marik",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Durmiendo",
      INSTRUCTOR_FIRST_NAME: "Paullene Leigh J",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padua",
      INSTRUCTOR_FIRST_NAME: "Lance Michael",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruales",
      INSTRUCTOR_FIRST_NAME: "Gene Richie",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcillanosa_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mae",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macalisang_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Cedie",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Besonia",
      INSTRUCTOR_FIRST_NAME: "Annielou",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escabarte",
      INSTRUCTOR_FIRST_NAME: "Airish Hillary",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Minerva",
      INSTRUCTOR_FIRST_NAME: "Christian Jan",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balagulan",
      INSTRUCTOR_FIRST_NAME: "John Thaddeus",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ellica",
      INSTRUCTOR_FIRST_NAME: "Klent Lyndon",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peralta",
      INSTRUCTOR_FIRST_NAME: "Lindsay Jan",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lescano",
      INSTRUCTOR_FIRST_NAME: "Rhudea Carla",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sone",
      INSTRUCTOR_FIRST_NAME: "Shelfie Marie",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Charlyn Joy",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Justiniani",
      INSTRUCTOR_FIRST_NAME: "Mareiuol",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Omac",
      INSTRUCTOR_FIRST_NAME: "Jayashnava",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yana",
      INSTRUCTOR_FIRST_NAME: "Kyle John",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Romo",
      INSTRUCTOR_FIRST_NAME: "Alexa Carl",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bandolon",
      INSTRUCTOR_FIRST_NAME: "Shawn Adrian",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dellosa",
      INSTRUCTOR_FIRST_NAME: "Christopher Josh",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kasim",
      INSTRUCTOR_FIRST_NAME: "Bai Michelle",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sumatra",
      INSTRUCTOR_FIRST_NAME: "Christopher John",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nakano",
      INSTRUCTOR_FIRST_NAME: "Garri Clyde",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siongco",
      INSTRUCTOR_FIRST_NAME: "Ronald Manrich",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibad",
      INSTRUCTOR_FIRST_NAME: "Daud Michael",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lastimado",
      INSTRUCTOR_FIRST_NAME: "Earl Jan",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dinoy",
      INSTRUCTOR_FIRST_NAME: "Nicole Angelique",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matiga",
      INSTRUCTOR_FIRST_NAME: "Aj Doulos",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bantilan",
      INSTRUCTOR_FIRST_NAME: "Hubert Kevin John Wilbur",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Opiano",
      INSTRUCTOR_FIRST_NAME: "Matthew Oliver",
      COURSE_NAME: "Advanced Engineering Mathematics (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Allado",
      INSTRUCTOR_FIRST_NAME: "Rycca Trinity",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumaad",
      INSTRUCTOR_FIRST_NAME: "Ineke Vrede",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puchero",
      INSTRUCTOR_FIRST_NAME: "Jose Miguel",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tutor",
      INSTRUCTOR_FIRST_NAME: "Kharylle",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Proctor",
      INSTRUCTOR_FIRST_NAME: "Michael Rodrigo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Binasing",
      INSTRUCTOR_FIRST_NAME: "Nadzrid",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Julmani",
      INSTRUCTOR_FIRST_NAME: "Saiful Janasheen",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alagao_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Gretchen",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Co",
      INSTRUCTOR_FIRST_NAME: "James Virgil",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lungay_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Christopher Rey",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallo",
      INSTRUCTOR_FIRST_NAME: "Genalyn",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Revelo",
      INSTRUCTOR_FIRST_NAME: "John Kerby",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banawa",
      INSTRUCTOR_FIRST_NAME: "Melleen Grace",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pinguiaman",
      INSTRUCTOR_FIRST_NAME: "Amir Jayeive",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Margas",
      INSTRUCTOR_FIRST_NAME: "Eiron Kyle",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tupas",
      INSTRUCTOR_FIRST_NAME: "Trisha Marie",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oliveros",
      INSTRUCTOR_FIRST_NAME: "Marc Dennis",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Melanie",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valerie Ira",
      INSTRUCTOR_FIRST_NAME: "Balmoris",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kannan",
      INSTRUCTOR_FIRST_NAME: "Ashok",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enerio",
      INSTRUCTOR_FIRST_NAME: "Iloi Sean",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Roy Luis",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mesia",
      INSTRUCTOR_FIRST_NAME: "Flonie Lynn",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lazaro Jr._PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jose",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rasonabe",
      INSTRUCTOR_FIRST_NAME: "Deiren Jade",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kalim",
      INSTRUCTOR_FIRST_NAME: "Jameel",
      COURSE_NAME: "DATA STRUCTURES AND ALGORITHMS (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ngojo",
      INSTRUCTOR_FIRST_NAME: "Kenji Niño",
      COURSE_NAME: "ECE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enojada",
      INSTRUCTOR_FIRST_NAME: "Ed Bryant Gerard",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Dianne Ritz",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balabarcon",
      INSTRUCTOR_FIRST_NAME: "Julian Chris",
      COURSE_NAME: "3D Animation - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Desonia",
      INSTRUCTOR_FIRST_NAME: "Lorraine Danica",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villaruz",
      INSTRUCTOR_FIRST_NAME: "Louei Jay",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almonte_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Velimor",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dugay_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kevin",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiza",
      INSTRUCTOR_FIRST_NAME: "Aljim",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baduya",
      INSTRUCTOR_FIRST_NAME: "Ira Nikolai",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doria",
      INSTRUCTOR_FIRST_NAME: "Amiel Jasper",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacleb",
      INSTRUCTOR_FIRST_NAME: "Alyssa Mariz",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aperocho",
      INSTRUCTOR_FIRST_NAME: "Hannah Shaquia",
      COURSE_NAME: "CPE Practice and Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Libang",
      INSTRUCTOR_FIRST_NAME: "Miguel Roi",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Angelica",
      COURSE_NAME: "Logic Circuits and Switching Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Jude Zyrah",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimapilis",
      INSTRUCTOR_FIRST_NAME: "Roy Zedrick",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Christopher Ross",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Damo",
      INSTRUCTOR_FIRST_NAME: "Daniel Dave",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Santos",
      INSTRUCTOR_FIRST_NAME: "Floro",
      COURSE_NAME: "Receptive Communication Skills (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuentes",
      INSTRUCTOR_FIRST_NAME: "James Adrian Maryll",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apolinar",
      INSTRUCTOR_FIRST_NAME: "Paul Ivan",
      COURSE_NAME: "Electrical Engineering Laws, Codes and Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "GASIT_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "LOVELY ROSE R.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caberte",
      INSTRUCTOR_FIRST_NAME: "Erika Shane",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gemepino",
      INSTRUCTOR_FIRST_NAME: "Lee Ernest",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maluya",
      INSTRUCTOR_FIRST_NAME: "Ian Jur",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bordios",
      INSTRUCTOR_FIRST_NAME: "Zach Alexzander",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Layno_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kenneth",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mabunga",
      INSTRUCTOR_FIRST_NAME: "Brix Brian",
      COURSE_NAME: "EE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortes",
      INSTRUCTOR_FIRST_NAME: "Ellen Rose",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ombajin",
      INSTRUCTOR_FIRST_NAME: "Jobert",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Torre",
      INSTRUCTOR_FIRST_NAME: "Reena",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luy",
      INSTRUCTOR_FIRST_NAME: "Sasha Kallie",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pascua_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Cristina",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balicbalic",
      INSTRUCTOR_FIRST_NAME: "Rey Jason",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pineda",
      INSTRUCTOR_FIRST_NAME: "Torque",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brigole",
      INSTRUCTOR_FIRST_NAME: "Shane Anne S",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Samantha Gabrielle",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nacua",
      INSTRUCTOR_FIRST_NAME: "Nicole",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masion",
      INSTRUCTOR_FIRST_NAME: "Chryzza Mae",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimena",
      INSTRUCTOR_FIRST_NAME: "Rina",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balbin_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jessie Jaye",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarande",
      INSTRUCTOR_FIRST_NAME: "Fritz Kenneth",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kim",
      INSTRUCTOR_FIRST_NAME: "So Yeon",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bontuyan",
      INSTRUCTOR_FIRST_NAME: "Karyll Grace",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batilong",
      INSTRUCTOR_FIRST_NAME: "Lloid Josua",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medrano",
      INSTRUCTOR_FIRST_NAME: "Alykha",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panaligan_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Tristan",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barrios",
      INSTRUCTOR_FIRST_NAME: "Olann",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rollon",
      INSTRUCTOR_FIRST_NAME: "Rigilmar Leo",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mustapha",
      INSTRUCTOR_FIRST_NAME: "Rasol",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sambutuan",
      INSTRUCTOR_FIRST_NAME: "Zyle Alsharid",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Durias",
      INSTRUCTOR_FIRST_NAME: "Clarence Jed",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delfin",
      INSTRUCTOR_FIRST_NAME: "Denise Keana",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Jefrec",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Boriz",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ann Gloghienette",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nuezca",
      INSTRUCTOR_FIRST_NAME: "Anthony",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Arth Rennaire",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lab-Oyan",
      INSTRUCTOR_FIRST_NAME: "Fianrey",
      COURSE_NAME: "Modulation and Coding Techniques Laboratory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Munda",
      INSTRUCTOR_FIRST_NAME: "Patricia Martianna",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amadeo",
      INSTRUCTOR_FIRST_NAME: "Jeo Eduard",
      COURSE_NAME: "CPE Practice and Design 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laorden",
      INSTRUCTOR_FIRST_NAME: "John Rafael",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Katherine Grace",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sulelom",
      INSTRUCTOR_FIRST_NAME: "Daniela Jane",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escalante",
      INSTRUCTOR_FIRST_NAME: "Paul Adrian",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dellosa_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Christopher Josh",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Cyrus Mari",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balayo",
      INSTRUCTOR_FIRST_NAME: "Kit Lester",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madriga",
      INSTRUCTOR_FIRST_NAME: "Princess Hana",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Imbang",
      INSTRUCTOR_FIRST_NAME: "Gil John",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estanislao",
      INSTRUCTOR_FIRST_NAME: "Rexanne Louise",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Seno",
      INSTRUCTOR_FIRST_NAME: "Sergio Anthony",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Aaliyah Cielo",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medel",
      INSTRUCTOR_FIRST_NAME: "Harden Patrick",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garay",
      INSTRUCTOR_FIRST_NAME: "Samantha Annika",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Frivaldo",
      INSTRUCTOR_FIRST_NAME: "Juan",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zaragoza",
      INSTRUCTOR_FIRST_NAME: "Ariel Louis",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salendab",
      INSTRUCTOR_FIRST_NAME: "Nur Hamid Mikko",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Domondon",
      INSTRUCTOR_FIRST_NAME: "Kherenne Joy",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malaran",
      INSTRUCTOR_FIRST_NAME: "Girlie",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wu_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Lin",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banzon",
      INSTRUCTOR_FIRST_NAME: "Carl Patrick",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miranda",
      INSTRUCTOR_FIRST_NAME: "Danica Anne",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nicdao_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "John Chrisian",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baguio",
      INSTRUCTOR_FIRST_NAME: "Cola Jane",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doyohin",
      INSTRUCTOR_FIRST_NAME: "Bridget Aubrey",
      COURSE_NAME: "Electromagnetics for ECE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mallo",
      INSTRUCTOR_FIRST_NAME: "John Angelo",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mison",
      INSTRUCTOR_FIRST_NAME: "Jannah Ashley",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masayao",
      INSTRUCTOR_FIRST_NAME: "Mardjorie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calawod",
      INSTRUCTOR_FIRST_NAME: "Noel Luke Zion",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macabantog",
      INSTRUCTOR_FIRST_NAME: "Sittie Johana",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapucar",
      INSTRUCTOR_FIRST_NAME: "William Henry R",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponce",
      INSTRUCTOR_FIRST_NAME: "Pamela Mae S",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caballas",
      INSTRUCTOR_FIRST_NAME: "Ma. Antoinette",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Panlilio",
      INSTRUCTOR_FIRST_NAME: "Pauleen Nicelle",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escoza",
      INSTRUCTOR_FIRST_NAME: "Kian",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuerpo",
      INSTRUCTOR_FIRST_NAME: "Maria Suzette",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andales",
      INSTRUCTOR_FIRST_NAME: "Alexandra Denise",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Julia May",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gavino_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Katherine",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Graza",
      INSTRUCTOR_FIRST_NAME: "Coleen Angelique",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moral",
      INSTRUCTOR_FIRST_NAME: "Chris John",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mogol",
      INSTRUCTOR_FIRST_NAME: "Gwyneth Anne",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hechona",
      INSTRUCTOR_FIRST_NAME: "Hendrie",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malaran_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Girlie",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Domondon_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kherenne Joy",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atienza",
      INSTRUCTOR_FIRST_NAME: "Julia",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tongol",
      INSTRUCTOR_FIRST_NAME: "Oliver",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jamilaren",
      INSTRUCTOR_FIRST_NAME: "Sierra Simone",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carreon",
      INSTRUCTOR_FIRST_NAME: "Theresa Marie",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gales",
      INSTRUCTOR_FIRST_NAME: "Ivan Ray",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Yna Janica",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manliguez",
      INSTRUCTOR_FIRST_NAME: "Angel",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gascon",
      INSTRUCTOR_FIRST_NAME: "Geri Mae",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Niel Ronwarenz",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Patrimonio",
      INSTRUCTOR_FIRST_NAME: "Paolo Romeo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lintag",
      INSTRUCTOR_FIRST_NAME: "Jordan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ugnay",
      INSTRUCTOR_FIRST_NAME: "Justin",
      COURSE_NAME: "Artificial Intelligence in Games (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Birondo",
      INSTRUCTOR_FIRST_NAME: "Rizza Junelvy",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bentulan",
      INSTRUCTOR_FIRST_NAME: "Bryan",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antonio",
      INSTRUCTOR_FIRST_NAME: "Charles Konrad",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marzon",
      INSTRUCTOR_FIRST_NAME: "Jem Jireh",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luy",
      INSTRUCTOR_FIRST_NAME: "Karl Patrick",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galvez",
      INSTRUCTOR_FIRST_NAME: "Myr Hyenz",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Meneses",
      INSTRUCTOR_FIRST_NAME: "Salvador",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deloso",
      INSTRUCTOR_FIRST_NAME: "Christian King",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bisa",
      INSTRUCTOR_FIRST_NAME: "Mariella",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Imperial",
      INSTRUCTOR_FIRST_NAME: "Renamae",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Richard Emmanuel",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enriquez",
      INSTRUCTOR_FIRST_NAME: "Claude Bryan",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caingles",
      INSTRUCTOR_FIRST_NAME: "Leonne Zackery Marcus",
      COURSE_NAME:
        "Fundamentals of Material Science and Engineering (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mola",
      INSTRUCTOR_FIRST_NAME: "Alexis John",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vizconde",
      INSTRUCTOR_FIRST_NAME: "Rasheed",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arban",
      INSTRUCTOR_FIRST_NAME: "Kenneth Lance",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guerra",
      INSTRUCTOR_FIRST_NAME: "Zubair",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Metilla",
      INSTRUCTOR_FIRST_NAME: "John Anthony",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Skeen",
      INSTRUCTOR_FIRST_NAME: "Claire",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estibal_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Alfonse Ireneo",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sejera_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Marianne",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Poliquit",
      INSTRUCTOR_FIRST_NAME: "Denise Cole",
      COURSE_NAME: "Readings in Philippine History (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miranda",
      INSTRUCTOR_FIRST_NAME: "Francesca Beatrice",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oncada",
      INSTRUCTOR_FIRST_NAME: "Prince Grant Stalen",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macaalin",
      INSTRUCTOR_FIRST_NAME: "Sittie Aina",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jutar",
      INSTRUCTOR_FIRST_NAME: "Vonn Adrian",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maquiran",
      INSTRUCTOR_FIRST_NAME: "Benjh",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gerolaga",
      INSTRUCTOR_FIRST_NAME: "Deuler",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bercero",
      INSTRUCTOR_FIRST_NAME: "Stephanie Reese",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balais",
      INSTRUCTOR_FIRST_NAME: "Julie Ann Mariell",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antolejao",
      INSTRUCTOR_FIRST_NAME: "Brix Silver",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Denila",
      INSTRUCTOR_FIRST_NAME: "Hendrich Rad",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amora",
      INSTRUCTOR_FIRST_NAME: "Justine Yzabel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padrones",
      INSTRUCTOR_FIRST_NAME: "Precious Kaye",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maligro",
      INSTRUCTOR_FIRST_NAME: "Vladimir",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catarman_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Lee Ceasar",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Berago",
      INSTRUCTOR_FIRST_NAME: "Arwenn",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabricante",
      INSTRUCTOR_FIRST_NAME: "Jiuan Arq",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lacerna",
      INSTRUCTOR_FIRST_NAME: "Mariana Nissa",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inson",
      INSTRUCTOR_FIRST_NAME: "Cristy",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacatang",
      INSTRUCTOR_FIRST_NAME: "Johannes",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pabualan",
      INSTRUCTOR_FIRST_NAME: "Josie May",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paraon",
      INSTRUCTOR_FIRST_NAME: "Leonard",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Costan",
      INSTRUCTOR_FIRST_NAME: "Jon Lorenz",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ayo",
      INSTRUCTOR_FIRST_NAME: "Marydelle",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suropia",
      INSTRUCTOR_FIRST_NAME: "Michael Philip",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arancon",
      INSTRUCTOR_FIRST_NAME: "Neph Ricard",
      COURSE_NAME: "Mathematics for Engineers (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacula",
      INSTRUCTOR_FIRST_NAME: "Sharifa Hainie",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monte",
      INSTRUCTOR_FIRST_NAME: "Pal John",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luchavez",
      INSTRUCTOR_FIRST_NAME: "Angel Kyle Gaverealle",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marfori",
      INSTRUCTOR_FIRST_NAME: "Carlos Miguel",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabangan",
      INSTRUCTOR_FIRST_NAME: "Jimdandy",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kasid",
      INSTRUCTOR_FIRST_NAME: "Sittie Janecah Beb",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manaois",
      INSTRUCTOR_FIRST_NAME: "Tiffany Moriel",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magbanua",
      INSTRUCTOR_FIRST_NAME: "Hektor Emilio",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calalas",
      INSTRUCTOR_FIRST_NAME: "Rhett Francis",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eulatriz",
      INSTRUCTOR_FIRST_NAME: "Mikko Clive",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pamat",
      INSTRUCTOR_FIRST_NAME: "Le Ann Fate",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendiola",
      INSTRUCTOR_FIRST_NAME: "Ira",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bueno",
      INSTRUCTOR_FIRST_NAME: "Bastian Vince",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vinculado",
      INSTRUCTOR_FIRST_NAME: "Jinwhill",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Didato",
      INSTRUCTOR_FIRST_NAME: "Zayd Thabit",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Frivaldo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Juan",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "bbtestuser11",
      INSTRUCTOR_FIRST_NAME: "bbtestuser11",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miranda",
      INSTRUCTOR_FIRST_NAME: "Alyana",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pineda",
      INSTRUCTOR_FIRST_NAME: "Aaron",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mohamed Elsherbiny",
      INSTRUCTOR_FIRST_NAME: "Karim",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ching",
      INSTRUCTOR_FIRST_NAME: "Uriel",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "LAGANZON_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ELENITA C.",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabriel",
      INSTRUCTOR_FIRST_NAME: "Kathleen",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hofileña_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Joy",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villavert",
      INSTRUCTOR_FIRST_NAME: "Diya",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "John Bernard",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguio",
      INSTRUCTOR_FIRST_NAME: "Jassen May",
      COURSE_NAME: "Global Culture & Tourism Geography",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lebrun",
      INSTRUCTOR_FIRST_NAME: "Kacey Nicole",
      COURSE_NAME: "Strategic Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Cris Gerald",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sentillas",
      INSTRUCTOR_FIRST_NAME: "Roxannie",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pino",
      INSTRUCTOR_FIRST_NAME: "Ma. Theresa",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Hermione Alexis",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montinola",
      INSTRUCTOR_FIRST_NAME: "Miles",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saagundo",
      INSTRUCTOR_FIRST_NAME: "Luke",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sobremisana",
      INSTRUCTOR_FIRST_NAME: "Gilbert",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mercado",
      INSTRUCTOR_FIRST_NAME: "Manilou",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañete",
      INSTRUCTOR_FIRST_NAME: "Trixie Nin",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponce",
      INSTRUCTOR_FIRST_NAME: "Clyde",
      COURSE_NAME: "Good Governance and Social Responsibility",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gragana",
      INSTRUCTOR_FIRST_NAME: "Mark Jan",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baguio_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Cola Jane",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alontaga",
      INSTRUCTOR_FIRST_NAME: "Jasper Vincent",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sedilla",
      INSTRUCTOR_FIRST_NAME: "Raymond",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Principio",
      INSTRUCTOR_FIRST_NAME: "Neslyn",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corpuz",
      INSTRUCTOR_FIRST_NAME: "Ethan Alexis Luis",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arce",
      INSTRUCTOR_FIRST_NAME: "Prinz Socriele",
      COURSE_NAME: "ECE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diez",
      INSTRUCTOR_FIRST_NAME: "Fredie",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magwili",
      INSTRUCTOR_FIRST_NAME: "Glenn",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Renegado",
      INSTRUCTOR_FIRST_NAME: "Rainier",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cacabelos",
      INSTRUCTOR_FIRST_NAME: "Aonah Ida",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Atienza",
      INSTRUCTOR_FIRST_NAME: "Bianca Louise",
      COURSE_NAME: "Machine Shop Theory and Practice 2 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arbuso",
      INSTRUCTOR_FIRST_NAME: "Daren",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yñiguez",
      INSTRUCTOR_FIRST_NAME: "Apple Benz",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Polines",
      INSTRUCTOR_FIRST_NAME: "Frances Angela",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samad",
      INSTRUCTOR_FIRST_NAME: "Shete Farhannah",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Del Fierro",
      INSTRUCTOR_FIRST_NAME: "Lorenzo Eugene",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bering",
      INSTRUCTOR_FIRST_NAME: "Shiela Marie",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tejero",
      INSTRUCTOR_FIRST_NAME: "Khay",
      COURSE_NAME: "Alternative Energy Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arriola",
      INSTRUCTOR_FIRST_NAME: "Natasha Lauren",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plasabas",
      INSTRUCTOR_FIRST_NAME: "Joffreylle Marie",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vasquez",
      INSTRUCTOR_FIRST_NAME: "Romeo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jaurigue_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Casiano",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magwili_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Glenn",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Kyle Edison",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gante",
      INSTRUCTOR_FIRST_NAME: "Donna Ville",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arriola_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Natasha Lauren",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plasabas_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Joffreylle Marie",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Renegado_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Rainier",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gante_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Donna Ville",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Badong_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Warren",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reid (Dummy Account)",
      INSTRUCTOR_FIRST_NAME: "James",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arce_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Prinz Socriele",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "CARDOZA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "KEVIN LEE",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "del Corro",
      INSTRUCTOR_FIRST_NAME: "Josef Mika-el",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Woof",
      INSTRUCTOR_FIRST_NAME: "Pochita",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carlos",
      INSTRUCTOR_FIRST_NAME: "Joan Marie",
      COURSE_NAME: "Foreign Language 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kansi",
      INSTRUCTOR_FIRST_NAME: "Bai Princess Sittie Mohaira",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dayrit",
      INSTRUCTOR_FIRST_NAME: "Relahdell",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Unabia",
      INSTRUCTOR_FIRST_NAME: "Abram",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Mark Erickson",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sentillas",
      INSTRUCTOR_FIRST_NAME: "Roxannie",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Viacrucis",
      INSTRUCTOR_FIRST_NAME: "Vaughn Alfred",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sumadia",
      INSTRUCTOR_FIRST_NAME: "Vianca Joy",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapenit",
      INSTRUCTOR_FIRST_NAME: "Francis Glenn",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Makiling",
      INSTRUCTOR_FIRST_NAME: "Krist Garneth",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuizon",
      INSTRUCTOR_FIRST_NAME: "Stephanie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Napala_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Abegael Ann",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duma-og",
      INSTRUCTOR_FIRST_NAME: "Yanni",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcos",
      INSTRUCTOR_FIRST_NAME: "Kenneth",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanchez",
      INSTRUCTOR_FIRST_NAME: "Lorraine Jane",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arriesgado",
      INSTRUCTOR_FIRST_NAME: "Hilario II",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student1",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student2",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student4",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student5",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student7",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Game Programming 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student9",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student10",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student11",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student12",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student13",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student14",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student15",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student16",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student17",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student18",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student19",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student20",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "ME Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student21",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student22",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student23",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student24",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student25",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student26",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student27",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "ME Correlation 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student28",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student31",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student35",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student36",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student37",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student40",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcos_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kenneth",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanchez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Lorraine Jane",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Roma",
      INSTRUCTOR_FIRST_NAME: "Lyleca Joy",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Patricia Pilar",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jeffrix",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chio",
      INSTRUCTOR_FIRST_NAME: "Mervin John",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solano",
      INSTRUCTOR_FIRST_NAME: "Patrick Emmanuel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilongo",
      INSTRUCTOR_FIRST_NAME: "Genevieve",
      COURSE_NAME: "Logic Circuits and Switching Theory (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tec",
      INSTRUCTOR_FIRST_NAME: "Ross Roman",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Concubierta",
      INSTRUCTOR_FIRST_NAME: "Peter John",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tec_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ross Roman",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangumpig",
      INSTRUCTOR_FIRST_NAME: "Bai Nisren",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abarca",
      INSTRUCTOR_FIRST_NAME: "Ellen Jane",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tesoro",
      INSTRUCTOR_FIRST_NAME: "Fritzie",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masulot",
      INSTRUCTOR_FIRST_NAME: "Mahather",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañete",
      INSTRUCTOR_FIRST_NAME: "Trixia Jan",
      COURSE_NAME: "CCNA Routing and Switching 1(Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hilario",
      INSTRUCTOR_FIRST_NAME: "Caille Jozua",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bello",
      INSTRUCTOR_FIRST_NAME: "Burnitt",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Desear",
      INSTRUCTOR_FIRST_NAME: "Christian Jerome",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bagundang",
      INSTRUCTOR_FIRST_NAME: "Nicole Mae",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Paul Vincent",
      COURSE_NAME: "ME Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macapugay",
      INSTRUCTOR_FIRST_NAME: "Ria Alyanna",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Demafeliz",
      INSTRUCTOR_FIRST_NAME: "Ric Lorenz",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magallanes",
      INSTRUCTOR_FIRST_NAME: "Danish Miles",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santisas",
      INSTRUCTOR_FIRST_NAME: "Stephen",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cayme",
      INSTRUCTOR_FIRST_NAME: "Liregine",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "San Miguel",
      INSTRUCTOR_FIRST_NAME: "Ritz Klaire",
      COURSE_NAME: "Advanced Engineering Mathematics (Lab)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sialmo III",
      INSTRUCTOR_FIRST_NAME: "John Rhyl",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sialmo III_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "John Rhyl",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Olofernes",
      INSTRUCTOR_FIRST_NAME: "Luther John",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kamenza",
      INSTRUCTOR_FIRST_NAME: "Sittie Rawdhah",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Alexes Anne",
      COURSE_NAME: "DC MACHINERY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Johanna Marie",
      COURSE_NAME: "DC MACHINERY (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Johanna Marie",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Alexes Anne",
      COURSE_NAME: "Power Plant Design With Renewable Energy (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caballero II",
      INSTRUCTOR_FIRST_NAME: "Jose Karlo",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "bbtest_inst",
      INSTRUCTOR_FIRST_NAME: "bbtest_inst",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "bbtest_inst_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "bbtest_inst",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duma-og_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Yanni",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Berber",
      INSTRUCTOR_FIRST_NAME: "Joseph Rodel",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Daryll Dan",
      COURSE_NAME: "DATA STRUCTURES AND ALGORITHMS (LABORATORY)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Beatty",
      INSTRUCTOR_FIRST_NAME: "Brian",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Berber_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Joseph Rodel",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Teo",
      INSTRUCTOR_FIRST_NAME: "Angela",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doma",
      INSTRUCTOR_FIRST_NAME: "Bonifacio",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimaunahan",
      INSTRUCTOR_FIRST_NAME: "Ericson",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Reggie Christian",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tiburcio",
      INSTRUCTOR_FIRST_NAME: "Irah Nathanne",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Umali",
      INSTRUCTOR_FIRST_NAME: "Ricky",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Nanette",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avila",
      INSTRUCTOR_FIRST_NAME: "Monchito",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Ramil",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Layno",
      INSTRUCTOR_FIRST_NAME: "Renilda",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Legaspi",
      INSTRUCTOR_FIRST_NAME: "Ria Ann",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deang",
      INSTRUCTOR_FIRST_NAME: "John Jovaniel",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ilao",
      INSTRUCTOR_FIRST_NAME: "Adomar",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumoran",
      INSTRUCTOR_FIRST_NAME: "Dennis",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abdon",
      INSTRUCTOR_FIRST_NAME: "Ria",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dummy3",
      INSTRUCTOR_FIRST_NAME: "GernStud",
      COURSE_NAME: "Principles of 2D Animation (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suacasa",
      INSTRUCTOR_FIRST_NAME: "Marc Denn",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pablo",
      INSTRUCTOR_FIRST_NAME: "Venus",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Samuel",
      INSTRUCTOR_FIRST_NAME: "Jeanne",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hinck",
      INSTRUCTOR_FIRST_NAME: "Glori",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Ian Boots",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carreon III",
      INSTRUCTOR_FIRST_NAME: "Virgilio",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fantillo",
      INSTRUCTOR_FIRST_NAME: "Elisier",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Grade Synch",
      INSTRUCTOR_FIRST_NAME: "Pearson",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caballero II_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jose Karlo",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alorro",
      INSTRUCTOR_FIRST_NAME: "Margaux Rikki Melisse",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galvezo",
      INSTRUCTOR_FIRST_NAME: "Sammy",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pandero",
      INSTRUCTOR_FIRST_NAME: "Jeanie Lou",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Holazo",
      INSTRUCTOR_FIRST_NAME: "Gabrielle Margarette",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maala_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Raniel",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "MORES_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ALFREDO",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocon",
      INSTRUCTOR_FIRST_NAME: "Keesha Dawn",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ando",
      INSTRUCTOR_FIRST_NAME: "Kaiser Dey",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student6",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duerme",
      INSTRUCTOR_FIRST_NAME: "Joel Zoe Daniel",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adana",
      INSTRUCTOR_FIRST_NAME: "Gianfranco",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendiola",
      INSTRUCTOR_FIRST_NAME: "Jim Francis Ernest",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Avendano_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Glenn",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daquigan",
      INSTRUCTOR_FIRST_NAME: "Daniella Eloise",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tseng",
      INSTRUCTOR_FIRST_NAME: "Wei-Min",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anzar",
      INSTRUCTOR_FIRST_NAME: "Fatra Anne Maryam",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student3",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soldevilla",
      INSTRUCTOR_FIRST_NAME: "Eimeren",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tamdang",
      INSTRUCTOR_FIRST_NAME: "Adrienne Marie",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nequia",
      INSTRUCTOR_FIRST_NAME: "Homer Ashley",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apostol",
      INSTRUCTOR_FIRST_NAME: "Charlene Joy",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santiago",
      INSTRUCTOR_FIRST_NAME: "Jesusa Paula",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student30",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Badiang",
      INSTRUCTOR_FIRST_NAME: "Alyssa Janne",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagutan",
      INSTRUCTOR_FIRST_NAME: "Mark Andre",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mohammad",
      INSTRUCTOR_FIRST_NAME: "Bai Rahajita Najm",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangelen",
      INSTRUCTOR_FIRST_NAME: "Ieshan Nindie",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gilbang",
      INSTRUCTOR_FIRST_NAME: "Mikhayla Bea",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Israel",
      INSTRUCTOR_FIRST_NAME: "Keith Noriel",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sitier",
      INSTRUCTOR_FIRST_NAME: "Joshua Angelo",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pareñas",
      INSTRUCTOR_FIRST_NAME: "Paul Isaac",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caluyong",
      INSTRUCTOR_FIRST_NAME: "James Klien",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabriel",
      INSTRUCTOR_FIRST_NAME: "Ashantinel Happy",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Charlotte Marie",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Clifford Jan",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fudadera",
      INSTRUCTOR_FIRST_NAME: "Jude Michael",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Notarte",
      INSTRUCTOR_FIRST_NAME: "Sophia Lei",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Peña",
      INSTRUCTOR_FIRST_NAME: "Christian Jefferson",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Descargar",
      INSTRUCTOR_FIRST_NAME: "Collin Rose",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ignacio",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardo",
      INSTRUCTOR_FIRST_NAME: "Angel Joy",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "Clarissavil",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dinoy",
      INSTRUCTOR_FIRST_NAME: "Milestone Bryle",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villanueva",
      INSTRUCTOR_FIRST_NAME: "Kyle Harvey",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luzano",
      INSTRUCTOR_FIRST_NAME: "Emmanuel Moses",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lapuz",
      INSTRUCTOR_FIRST_NAME: "Brix Xander",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abao",
      INSTRUCTOR_FIRST_NAME: "Kirk Von",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrer",
      INSTRUCTOR_FIRST_NAME: "Christopher Welbourne",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Angelo",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bordios",
      INSTRUCTOR_FIRST_NAME: "Geri Juliana",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jaurigue",
      INSTRUCTOR_FIRST_NAME: "Casiano",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Posadas",
      INSTRUCTOR_FIRST_NAME: "Tracy Angelo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Davis",
      INSTRUCTOR_FIRST_NAME: "Princess Shyne",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jorolan",
      INSTRUCTOR_FIRST_NAME: "James Matthew",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catarman",
      INSTRUCTOR_FIRST_NAME: "Lee Ceasar",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delos Angeles",
      INSTRUCTOR_FIRST_NAME: "Duztine",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valderama",
      INSTRUCTOR_FIRST_NAME: "Patricia Mae",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amil",
      INSTRUCTOR_FIRST_NAME: "Khalil Yusof",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pinzon",
      INSTRUCTOR_FIRST_NAME: "Bianne Ariana",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Melliza",
      INSTRUCTOR_FIRST_NAME: "Kevin",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chupita",
      INSTRUCTOR_FIRST_NAME: "Jandee Onele",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anguren",
      INSTRUCTOR_FIRST_NAME: "Ma. Thalia",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lambino",
      INSTRUCTOR_FIRST_NAME: "Andrea Julianne",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanguilan",
      INSTRUCTOR_FIRST_NAME: "Jolo",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Ramos Jr.",
      INSTRUCTOR_FIRST_NAME: "Jessie Lix",
      COURSE_NAME: "Thesis 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amil",
      INSTRUCTOR_FIRST_NAME: "Charisse Faith",
      COURSE_NAME: "Practicum",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siat",
      INSTRUCTOR_FIRST_NAME: "Dianne Raye",
      COURSE_NAME: "Modulation and Coding Techniques Laboratory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tonatos",
      INSTRUCTOR_FIRST_NAME: "Jaydeine",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dionio_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kendrick",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sumali",
      INSTRUCTOR_FIRST_NAME: "Fatimah",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borja",
      INSTRUCTOR_FIRST_NAME: "Jackie Chelsea",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "LIM_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "VICTOR KIM",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguelo",
      INSTRUCTOR_FIRST_NAME: "Kareena Danielle",
      COURSE_NAME: "Operating Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Toloy",
      INSTRUCTOR_FIRST_NAME: "Dian Cliford",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dofitas",
      INSTRUCTOR_FIRST_NAME: "Earl",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orito",
      INSTRUCTOR_FIRST_NAME: "Jude Russell",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paclar",
      INSTRUCTOR_FIRST_NAME: "Andrave",
      COURSE_NAME: "Engineering Drawing 1(Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "LANTICSE_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "RHEA",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nakata",
      INSTRUCTOR_FIRST_NAME: "Taiyo",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barreda",
      INSTRUCTOR_FIRST_NAME: "Athina Pia",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sandoval_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mary Grace",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sapong",
      INSTRUCTOR_FIRST_NAME: "Jaremiah",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valer",
      INSTRUCTOR_FIRST_NAME: "Jezreel Rhynze",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Braga",
      INSTRUCTOR_FIRST_NAME: "June Imee Thella",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguirre",
      INSTRUCTOR_FIRST_NAME: "Shannia Dianne",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student29",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elevera",
      INSTRUCTOR_FIRST_NAME: "Jann Lucas",
      COURSE_NAME: "Philippine Indigenous Communities - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doydoy",
      INSTRUCTOR_FIRST_NAME: "Zamantha Margarette",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pascual",
      INSTRUCTOR_FIRST_NAME: "Francess Blythe R.",
      COURSE_NAME: "Embedded Systems (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bandigan",
      INSTRUCTOR_FIRST_NAME: "Dustin Josh",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Joemarie G.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padayhag",
      INSTRUCTOR_FIRST_NAME: "Antonne Kyll P.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Eadrian Steven A",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilotos",
      INSTRUCTOR_FIRST_NAME: "Pent Jr N.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumatas",
      INSTRUCTOR_FIRST_NAME: "Shania Mitzi",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Igbalic",
      INSTRUCTOR_FIRST_NAME: "Kimberly E",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Afinidad",
      INSTRUCTOR_FIRST_NAME: "Dave Jefferson",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Marielle",
      COURSE_NAME: "Engineering Calculus 1 - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monday",
      INSTRUCTOR_FIRST_NAME: "Marc Joseph",
      COURSE_NAME: "Mechanics of Deformable Bodies for ME",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aytona",
      INSTRUCTOR_FIRST_NAME: "Andrew Jhon",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daig",
      INSTRUCTOR_FIRST_NAME: "Danielle Defoe",
      COURSE_NAME: "Architectural Design 4: Space Planning 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Basio",
      INSTRUCTOR_FIRST_NAME: "Justyne Andrei",
      COURSE_NAME: "Engineering Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Charity Hope",
      COURSE_NAME: "Philippine Literature 2nd Sem 2020",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batula",
      INSTRUCTOR_FIRST_NAME: "Ethan Francis",
      COURSE_NAME: "Creativity In Problem Solving",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arduo",
      INSTRUCTOR_FIRST_NAME: "Janpher Cris",
      COURSE_NAME: "Momentum Transfer (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Luis Antonio",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padua",
      INSTRUCTOR_FIRST_NAME: "Leslien Mae",
      COURSE_NAME:
        "Architectural Visual Communications 4: Visual Techniques 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cerin",
      INSTRUCTOR_FIRST_NAME: "Miguel Luis",
      COURSE_NAME: "ENGINEERING DATA ANALYSIS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Marc Noel",
      COURSE_NAME: "ENGINEERING DATA ANALYSIS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batara",
      INSTRUCTOR_FIRST_NAME: "Nichole Xiane",
      COURSE_NAME: "Highway and Railroad Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamul",
      INSTRUCTOR_FIRST_NAME: "Rhey Louis",
      COURSE_NAME: "ENGINEERING DATA ANALYSIS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cangero",
      INSTRUCTOR_FIRST_NAME: "Vincent Michael",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alarcon",
      INSTRUCTOR_FIRST_NAME: "Addy Guianne",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdivia",
      INSTRUCTOR_FIRST_NAME: "Abelardo III",
      COURSE_NAME: "Physical Activity Towards Health And Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ausejo",
      INSTRUCTOR_FIRST_NAME: "Brya Miquela",
      COURSE_NAME: "Physical Activity Towards Health And Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corotan",
      INSTRUCTOR_FIRST_NAME: "Mary Abbegail",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Henry",
      INSTRUCTOR_FIRST_NAME: "Mark Paul",
      COURSE_NAME: "Business Ventures In Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yñiguez",
      INSTRUCTOR_FIRST_NAME: "Ram Nicolo",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibag",
      INSTRUCTOR_FIRST_NAME: "Reign Uriel Nicole",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magayon",
      INSTRUCTOR_FIRST_NAME: "Snazzy Nicole",
      COURSE_NAME: "MULTICULTURAL DIVERSITY IN THE WORKPLACE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maquirang",
      INSTRUCTOR_FIRST_NAME: "Jea Rose",
      COURSE_NAME: "ENGINEERING DATA ANALYSIS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Zac Robb",
      COURSE_NAME: "OPPORTUNITY SEEKING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Grade Synch",
      INSTRUCTOR_FIRST_NAME: "Pearson",
      COURSE_NAME: "WileyPLUS Digital Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrogueña",
      INSTRUCTOR_FIRST_NAME: "Adrianne",
      COURSE_NAME: "MCM Digital Textbooks",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rubis",
      INSTRUCTOR_FIRST_NAME: "Brandon Kyle",
      COURSE_NAME: "WileyPLUS Digital Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gubat",
      INSTRUCTOR_FIRST_NAME: "Cianber Louis",
      COURSE_NAME: "eReading Hub",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deriada",
      INSTRUCTOR_FIRST_NAME: "Carlo Martin",
      COURSE_NAME: "WileyPLUS Instructor Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Segarra",
      INSTRUCTOR_FIRST_NAME: "Francis",
      COURSE_NAME: "The Life And Works Of Jose Rizal (Summer)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balatero",
      INSTRUCTOR_FIRST_NAME: "Jessa Airah",
      COURSE_NAME: "Student Wellness",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valenzuela",
      INSTRUCTOR_FIRST_NAME: "Justin Jay",
      COURSE_NAME: "MCM Digital Textbooks",
    },
    {
      INSTRUCTOR_LAST_NAME: "Campilan",
      INSTRUCTOR_FIRST_NAME: "Jude Vincent",
      COURSE_NAME: "eReading Hub",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ng",
      INSTRUCTOR_FIRST_NAME: "Kelsie Jullien",
      COURSE_NAME: "WileyPLUS Digital Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Vienna Venice",
      COURSE_NAME: "WileyPLUS Digital Resources",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wee",
      INSTRUCTOR_FIRST_NAME: "Stacey Venett",
      COURSE_NAME: "21St Century Literature from the Philippines and the World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cunanan",
      INSTRUCTOR_FIRST_NAME: "Shaun Christopher",
      COURSE_NAME: "Financial Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tumanda",
      INSTRUCTOR_FIRST_NAME: "Athena Gabriela",
      COURSE_NAME: "Numerical Methods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendiola",
      INSTRUCTOR_FIRST_NAME: "Kurt Vinmar",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Israel",
      INSTRUCTOR_FIRST_NAME: "Jaira Faye",
      COURSE_NAME: "SAFETY MANAGEMENT",
    },
    {
      INSTRUCTOR_LAST_NAME: "Onor",
      INSTRUCTOR_FIRST_NAME: "Julliana Louise",
      COURSE_NAME: "READINGS IN PHILIPPINE HISTORY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Kyle Mathiew",
      COURSE_NAME: "UNDERSTANDING THE SELF",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ng",
      INSTRUCTOR_FIRST_NAME: "Keisha Justine",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solidarios",
      INSTRUCTOR_FIRST_NAME: "Prince Louie",
      COURSE_NAME: "Engineering Mechanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Veras",
      INSTRUCTOR_FIRST_NAME: "Trixie Grace",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garvida",
      INSTRUCTOR_FIRST_NAME: "Ashley Nichole",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lawas",
      INSTRUCTOR_FIRST_NAME: "Eran Arthur Euvan",
      COURSE_NAME: "Macro Perspective of Tourism and Hospitality",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serida",
      INSTRUCTOR_FIRST_NAME: "Jofel John",
      COURSE_NAME: "Multicultural Diversity in The Workplace",
    },
    {
      INSTRUCTOR_LAST_NAME: "Verona",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sagsagat",
      INSTRUCTOR_FIRST_NAME: "Rihana",
      COURSE_NAME:
        "Construction MEthods and Project Management (Laboratory) - A442",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bellezas",
      INSTRUCTOR_FIRST_NAME: "Sophia Christelle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Administrator",
      INSTRUCTOR_FIRST_NAME: "Blackboard",
      COURSE_NAME: "Architectural Visual Communications 1: Graphics 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendrico",
      INSTRUCTOR_FIRST_NAME: "Charles Ethan T",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Visales",
      INSTRUCTOR_FIRST_NAME: "Datu Ishaq Jurham",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valenzuela",
      INSTRUCTOR_FIRST_NAME: "Brent Arhus",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gulanes",
      INSTRUCTOR_FIRST_NAME: "Angela Lex",
      COURSE_NAME: "HISTORY OF GRAPHIC DESIGN",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bongato",
      INSTRUCTOR_FIRST_NAME: "Brylle Erich",
      COURSE_NAME: "The Life And Works Of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bula",
      INSTRUCTOR_FIRST_NAME: "Benedict Michael",
      COURSE_NAME: "Science, Technology, And Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabello",
      INSTRUCTOR_FIRST_NAME: "Jose Miguel",
      COURSE_NAME: "Science, Technology, And Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabang",
      INSTRUCTOR_FIRST_NAME: "Princess Elliezah",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Namang",
      INSTRUCTOR_FIRST_NAME: "Charles Gerald",
      COURSE_NAME: "Engineering Drawing 1 main",
    },
    {
      INSTRUCTOR_LAST_NAME: "Testa",
      INSTRUCTOR_FIRST_NAME: "Clizfel Michal",
      COURSE_NAME: "Engineering Drawing 1 main",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrina",
      INSTRUCTOR_FIRST_NAME: "Kevin John",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapere",
      INSTRUCTOR_FIRST_NAME: "Neil Luis",
      COURSE_NAME: "Engineering Drawing 1 main",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garzon",
      INSTRUCTOR_FIRST_NAME: "Jeeno Miguel",
      COURSE_NAME: "Project Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barriga",
      INSTRUCTOR_FIRST_NAME: "Anna Bianca",
      COURSE_NAME: "Architectural Visual Communications 3: Graphics 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "BAWAY",
      INSTRUCTOR_FIRST_NAME: "CRISTIAN JAY",
      COURSE_NAME: "Strategic Business Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "BERSAMIN",
      INSTRUCTOR_FIRST_NAME: "RONETTE",
      COURSE_NAME: "Cost Accounting and Control",
    },
    {
      INSTRUCTOR_LAST_NAME: "CORTEZ",
      INSTRUCTOR_FIRST_NAME: "KIMBERLY",
      COURSE_NAME: "Cost Accounting and Control",
    },
    {
      INSTRUCTOR_LAST_NAME: "DACAL",
      INSTRUCTOR_FIRST_NAME: "EARL CLIVE",
      COURSE_NAME: "bbtest12",
    },
    {
      INSTRUCTOR_LAST_NAME: "NARES",
      INSTRUCTOR_FIRST_NAME: "JOHN ALBERT",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alterado",
      INSTRUCTOR_FIRST_NAME: "Stacey Ellise",
      COURSE_NAME: "Transportation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Roque",
      INSTRUCTOR_FIRST_NAME: "Anna Jedidiah",
      COURSE_NAME: "Creative Industries II: Performing Arts",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guest",
      INSTRUCTOR_FIRST_NAME: "Blackboard",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Integration",
      INSTRUCTOR_FIRST_NAME: "Blackboard",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Candelaria",
      INSTRUCTOR_FIRST_NAME: "Joshua Robin",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ambrosio",
      INSTRUCTOR_FIRST_NAME: "John Vastile",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tague",
      INSTRUCTOR_FIRST_NAME: "Rhine Lesther",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "LANTICSE",
      INSTRUCTOR_FIRST_NAME: "RHEA",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "AQUINO",
      INSTRUCTOR_FIRST_NAME: "JESUNINO",
      COURSE_NAME: "Test Course (Training)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Robillo",
      INSTRUCTOR_FIRST_NAME: "Natasha Francesca G.",
      COURSE_NAME:
        "Building Utilities 2: Electrical, Electronics and MEchanical Systems (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palconit",
      INSTRUCTOR_FIRST_NAME: "Denzel Joshua S.",
      COURSE_NAME: "Digital Signal Processing",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bongcac",
      INSTRUCTOR_FIRST_NAME: "Blessa",
      COURSE_NAME: "Filipino 7",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balat",
      INSTRUCTOR_FIRST_NAME: "Rojhelyn",
      COURSE_NAME: "Training Course (Ultra)",
    },
    {
      INSTRUCTOR_LAST_NAME: "MONTAOS",
      INSTRUCTOR_FIRST_NAME: "CHRISTOPHER",
      COURSE_NAME:
        "Physical Science (Disaster Readiness & Risk Reduction for Stem)",
    },
    {
      INSTRUCTOR_LAST_NAME: "CARDOZA",
      INSTRUCTOR_FIRST_NAME: "KEVIN LEE",
      COURSE_NAME: "Quantitative Techniques in Business",
    },
    {
      INSTRUCTOR_LAST_NAME: "GILDO",
      INSTRUCTOR_FIRST_NAME: "JOHN MARK",
      COURSE_NAME: "Contemporary Philippine Arts from the Regions",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gultiano",
      INSTRUCTOR_FIRST_NAME: "Leslie",
      COURSE_NAME: "Introduction To Matlab (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eco",
      INSTRUCTOR_FIRST_NAME: "Elloise",
      COURSE_NAME: "LOGIC AND CRITICAL THINKING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Kristoffer Xander",
      COURSE_NAME: "MMCM DIGITAL TEXTBOOKS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lorenzo",
      INSTRUCTOR_FIRST_NAME: "Zazheska",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "CALUGAS",
      INSTRUCTOR_FIRST_NAME: "ALEEN GLENN",
      COURSE_NAME: "Dynamics of Rigid Bodies - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "JAMES",
      INSTRUCTOR_FIRST_NAME: "GENELIN RUTH",
      COURSE_NAME: "Statics of Rigid Bodies - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "JARABE",
      INSTRUCTOR_FIRST_NAME: "CHRISTIAN JAY",
      COURSE_NAME: "Statics for Rigid Bodies - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gapasin",
      INSTRUCTOR_FIRST_NAME: "Ernesto Iii",
      COURSE_NAME:
        "Freehand and Digital Drawing (Paired) - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plata",
      INSTRUCTOR_FIRST_NAME: "Shekinah Grace A",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simbajon",
      INSTRUCTOR_FIRST_NAME: "Alden Allan",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nasilin",
      INSTRUCTOR_FIRST_NAME: "Fatima Khaira",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rampak",
      INSTRUCTOR_FIRST_NAME: "Sittie Mohaeyah",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alcarde",
      INSTRUCTOR_FIRST_NAME: "Patricia Ann",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arajani",
      INSTRUCTOR_FIRST_NAME: "Alonica",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vergara",
      INSTRUCTOR_FIRST_NAME: "Jan Shanette",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Butiong",
      INSTRUCTOR_FIRST_NAME: "Edmond Ray A",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mosqueda",
      INSTRUCTOR_FIRST_NAME: "Anthony A",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chavez",
      INSTRUCTOR_FIRST_NAME: "Immanoel Ivan",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lape",
      INSTRUCTOR_FIRST_NAME: "Jaymarc P",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez",
      INSTRUCTOR_FIRST_NAME: "Jeffrix",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Elline Tiffenie",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abayon",
      INSTRUCTOR_FIRST_NAME: "Martina Salvi",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banuag",
      INSTRUCTOR_FIRST_NAME: "Philip Earl",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buñag",
      INSTRUCTOR_FIRST_NAME: "Raphael Andre",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miles",
      INSTRUCTOR_FIRST_NAME: "Jacob Matthew",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ngo",
      INSTRUCTOR_FIRST_NAME: "Albec",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miranda",
      INSTRUCTOR_FIRST_NAME: "Micaela",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escoreal",
      INSTRUCTOR_FIRST_NAME: "Jellaine",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "MORES",
      INSTRUCTOR_FIRST_NAME: "ALFREDO",
      COURSE_NAME: "General Biology 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuyos",
      INSTRUCTOR_FIRST_NAME: "Jehel Cris",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañas",
      INSTRUCTOR_FIRST_NAME: "Chelsy Kate",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palanca Jr._PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Virgil",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "LINGASA",
      INSTRUCTOR_FIRST_NAME: "JARELYN G.",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dulay",
      INSTRUCTOR_FIRST_NAME: "Ezra Rafgeonn",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maglente",
      INSTRUCTOR_FIRST_NAME: "Jeam Kaye",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miyazaki",
      INSTRUCTOR_FIRST_NAME: "Aoi",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Via",
      INSTRUCTOR_FIRST_NAME: "Nathan Carlos",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez III",
      INSTRUCTOR_FIRST_NAME: "Benjamin",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boloron_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Niño",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dugaduga",
      INSTRUCTOR_FIRST_NAME: "Adrian Paolo",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Torcende",
      INSTRUCTOR_FIRST_NAME: "Ivan Vince",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trujillo",
      INSTRUCTOR_FIRST_NAME: "Colleen",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lam",
      INSTRUCTOR_FIRST_NAME: "Alexander Philip",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Frost",
      INSTRUCTOR_FIRST_NAME: "Enrico James Thomas",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillo",
      INSTRUCTOR_FIRST_NAME: "Jean Louis",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sumaliday",
      INSTRUCTOR_FIRST_NAME: "Honey Marie L",
      COURSE_NAME: "IE Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "MCM",
      INSTRUCTOR_FIRST_NAME: "Student",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andrew",
      INSTRUCTOR_FIRST_NAME: "Czarls Audrey Davienn",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maestrecampo",
      INSTRUCTOR_FIRST_NAME: "Dodjie",
      COURSE_NAME: "Philippine Indigenous Communities - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ludas",
      INSTRUCTOR_FIRST_NAME: "Gerald",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacutin",
      INSTRUCTOR_FIRST_NAME: "Joaquin Angelo",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dejacto",
      INSTRUCTOR_FIRST_NAME: "Francis Dane",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Juan",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "DELOS REYES_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "MARYCON C.",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuizon",
      INSTRUCTOR_FIRST_NAME: "Kate Well Jellyn B",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Birondo",
      INSTRUCTOR_FIRST_NAME: "Kia Carizza",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Murillo",
      INSTRUCTOR_FIRST_NAME: "Leika Szarena",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palacios",
      INSTRUCTOR_FIRST_NAME: "Alexandra Mae",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jagonia",
      INSTRUCTOR_FIRST_NAME: "Janelle Joyce",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batacan",
      INSTRUCTOR_FIRST_NAME: "Marie Lois Claire",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Famor",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Molibas",
      INSTRUCTOR_FIRST_NAME: "Saud",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estaniel",
      INSTRUCTOR_FIRST_NAME: "Sherman Rae",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rogador",
      INSTRUCTOR_FIRST_NAME: "Kimberly",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ganade III",
      INSTRUCTOR_FIRST_NAME: "Feliciano",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mariveles",
      INSTRUCTOR_FIRST_NAME: "Gev Alexia",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corminal",
      INSTRUCTOR_FIRST_NAME: "Gerry",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumikid",
      INSTRUCTOR_FIRST_NAME: "Crizalyn Mae",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dollosa",
      INSTRUCTOR_FIRST_NAME: "Cionee Mae",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vallespin",
      INSTRUCTOR_FIRST_NAME: "Kirby Conphil",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Endozo",
      INSTRUCTOR_FIRST_NAME: "Eunice Kaye",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trimor",
      INSTRUCTOR_FIRST_NAME: "Jovielyn",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosete",
      INSTRUCTOR_FIRST_NAME: "Arielle Francine",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Casa",
      INSTRUCTOR_FIRST_NAME: "Angelica Grace",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tolentino",
      INSTRUCTOR_FIRST_NAME: "Mico Emmanuel",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "LAGUNDAY_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ALBERT",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Murcia",
      INSTRUCTOR_FIRST_NAME: "Prince Ric John",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cadayona",
      INSTRUCTOR_FIRST_NAME: "Marc Ian",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rendon",
      INSTRUCTOR_FIRST_NAME: "Kierstin Cate",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aboso_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Reven",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jarloc",
      INSTRUCTOR_FIRST_NAME: "John Dave",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nano",
      INSTRUCTOR_FIRST_NAME: "Marc Lesther M.",
      COURSE_NAME: "Edukasyon sa Pagpapakatao 7",
    },
    {
      INSTRUCTOR_LAST_NAME: "LISONDRA",
      INSTRUCTOR_FIRST_NAME: "CHERRY",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "LOPEZ",
      INSTRUCTOR_FIRST_NAME: "NESLYN",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "MEDRANO",
      INSTRUCTOR_FIRST_NAME: "ANTHONY HILMER",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "LUBIANO",
      INSTRUCTOR_FIRST_NAME: "ROWENA",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sia",
      INSTRUCTOR_FIRST_NAME: "John Mark U.",
      COURSE_NAME:
        "Microprocessor and Microcontroller Systems and Design - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lewis",
      INSTRUCTOR_FIRST_NAME: "Michael George",
      COURSE_NAME: "Advanced Engineering Mathematics - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "LEMOSNERO",
      INSTRUCTOR_FIRST_NAME: "JOANNA MAE",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "AZNAR",
      INSTRUCTOR_FIRST_NAME: "BONIFACIO",
      COURSE_NAME: "English 10",
    },
    {
      INSTRUCTOR_LAST_NAME: "donotdelete",
      INSTRUCTOR_FIRST_NAME: "BBSupport",
      COURSE_NAME:
        "Disciplines and Ideas in the Applied Sciences (PreReq:HUMSS2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "OSTIQUE",
      INSTRUCTOR_FIRST_NAME: "MARA CHRISTINA",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Phan",
      INSTRUCTOR_FIRST_NAME: "Jember Mico B",
      COURSE_NAME: "DEVELOPMENTAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zamora",
      INSTRUCTOR_FIRST_NAME: "Kyra Sheyn",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Ellijah",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alocada",
      INSTRUCTOR_FIRST_NAME: "Tristan Noel",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alicer",
      INSTRUCTOR_FIRST_NAME: "Josh Felix",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernales",
      INSTRUCTOR_FIRST_NAME: "Micaella",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sangco",
      INSTRUCTOR_FIRST_NAME: "Ruziell Patrick G",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brahim",
      INSTRUCTOR_FIRST_NAME: "Datu Tahir",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Blanco",
      INSTRUCTOR_FIRST_NAME: "Anton Gus",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabral",
      INSTRUCTOR_FIRST_NAME: "Maria Cristina",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "LEOPOLDO",
      INSTRUCTOR_FIRST_NAME: "MERIAM P.",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Roxan",
      INSTRUCTOR_FIRST_NAME: "Patrice",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Datlangin",
      INSTRUCTOR_FIRST_NAME: "Egie John",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Azcuna",
      INSTRUCTOR_FIRST_NAME: "Christian Joel",
      COURSE_NAME: "Statistical Analysis With Software Application",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manalastas",
      INSTRUCTOR_FIRST_NAME: "Andre Anthony",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Digal",
      INSTRUCTOR_FIRST_NAME: "Pritz Jelly",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Repulles",
      INSTRUCTOR_FIRST_NAME: "Rosemarie Kaye",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aplasca",
      INSTRUCTOR_FIRST_NAME: "Kyzha Shanley P",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimaukom",
      INSTRUCTOR_FIRST_NAME: "Asraf",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esmael",
      INSTRUCTOR_FIRST_NAME: "Hesham B",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sandigan",
      INSTRUCTOR_FIRST_NAME: "Sittie Shareena",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garay",
      INSTRUCTOR_FIRST_NAME: "Christian Dominique",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puebla",
      INSTRUCTOR_FIRST_NAME: "Josiah Bernard",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabriga",
      INSTRUCTOR_FIRST_NAME: "Hannah Victoria",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Bart Andrew",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Arnel",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ronquillo",
      INSTRUCTOR_FIRST_NAME: "Katherine Mae M",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pabualan",
      INSTRUCTOR_FIRST_NAME: "Nokie",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suico",
      INSTRUCTOR_FIRST_NAME: "Pipe",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bonete",
      INSTRUCTOR_FIRST_NAME: "Yuan Colt",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dapit",
      INSTRUCTOR_FIRST_NAME: "Pauline Joy",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ligtas",
      INSTRUCTOR_FIRST_NAME: "Lara Allison",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biton",
      INSTRUCTOR_FIRST_NAME: "Patrick",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oclarit",
      INSTRUCTOR_FIRST_NAME: "Jean Kurt",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Condes",
      INSTRUCTOR_FIRST_NAME: "Ace Myl",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plaza",
      INSTRUCTOR_FIRST_NAME: "Kaye Joanne Angelika",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guyot",
      INSTRUCTOR_FIRST_NAME: "Sean Lorenzo",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apolonio",
      INSTRUCTOR_FIRST_NAME: "Neil Clyde Zenith",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pastoriza",
      INSTRUCTOR_FIRST_NAME: "Kym Fredrique C",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Ayeisha Deanne C.",
      COURSE_NAME: "Philippine Indigenous Communities - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villarosa",
      INSTRUCTOR_FIRST_NAME: "Patricia Ann",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Liezel",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tidula",
      INSTRUCTOR_FIRST_NAME: "Kyle Benett",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdehueza",
      INSTRUCTOR_FIRST_NAME: "Alessandra Gabrielle",
      COURSE_NAME: "Enterprise Architecture",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corporal",
      INSTRUCTOR_FIRST_NAME: "Luis Miguel",
      COURSE_NAME: "2D ANIMATION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Deborah Anne",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villadores",
      INSTRUCTOR_FIRST_NAME: "Alexis Manuel D",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manzano",
      INSTRUCTOR_FIRST_NAME: "Shaima",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castañaga",
      INSTRUCTOR_FIRST_NAME: "Michael Farid",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapat",
      INSTRUCTOR_FIRST_NAME: "Christ Arzen",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernardez",
      INSTRUCTOR_FIRST_NAME: "Shenna",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villamor",
      INSTRUCTOR_FIRST_NAME: "Airene Grace",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanchez",
      INSTRUCTOR_FIRST_NAME: "Pio Renato",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oclarit",
      INSTRUCTOR_FIRST_NAME: "Josef Mikael G",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Onella",
      INSTRUCTOR_FIRST_NAME: "Ronald Ian Q",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kim",
      INSTRUCTOR_FIRST_NAME: "Christine Soohyoon",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabiles",
      INSTRUCTOR_FIRST_NAME: "Carl Mari",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bardos",
      INSTRUCTOR_FIRST_NAME: "Jeevan",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Razo",
      INSTRUCTOR_FIRST_NAME: "Rhomarblitz Jane Rose D",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdevieso",
      INSTRUCTOR_FIRST_NAME: "Christian",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Torreon",
      INSTRUCTOR_FIRST_NAME: "Christian Jay C",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "Lloyd Adrian",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caasi",
      INSTRUCTOR_FIRST_NAME: "Jobryn V",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sazon",
      INSTRUCTOR_FIRST_NAME: "Wilmar Reinner",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serafica",
      INSTRUCTOR_FIRST_NAME: "Jussel Ray",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "BAACO",
      INSTRUCTOR_FIRST_NAME: "MARY DAPHNIE G.",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maglacion",
      INSTRUCTOR_FIRST_NAME: "Geovanie",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "BRIONES_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ISAGANI",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amion",
      INSTRUCTOR_FIRST_NAME: "Julianne Medori",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Daza",
      INSTRUCTOR_FIRST_NAME: "Martin",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puno",
      INSTRUCTOR_FIRST_NAME: "Humphrey John Clover",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cayan",
      INSTRUCTOR_FIRST_NAME: "Ralph Christian S.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banguis",
      INSTRUCTOR_FIRST_NAME: "Regilyn",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mydas Evy L. Cantillan",
      INSTRUCTOR_FIRST_NAME: "Cantillan",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bardos",
      INSTRUCTOR_FIRST_NAME: "Mhellisa R",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ansaldo",
      INSTRUCTOR_FIRST_NAME: "Gideon Cassee",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nadela",
      INSTRUCTOR_FIRST_NAME: "Dabreah Dominique",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jani",
      INSTRUCTOR_FIRST_NAME: "Samcheska Janine",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salon",
      INSTRUCTOR_FIRST_NAME: "John Enzo",
      COURSE_NAME: "Understanding the Self (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esmeña",
      INSTRUCTOR_FIRST_NAME: "Pocholo Adrian",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanchez",
      INSTRUCTOR_FIRST_NAME: "Carl Christian",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hinampas",
      INSTRUCTOR_FIRST_NAME: "Annjanette",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caballero",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dultra",
      INSTRUCTOR_FIRST_NAME: "Fretzyl Alexie",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponce",
      INSTRUCTOR_FIRST_NAME: "Anthon Miguel",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alvaro",
      INSTRUCTOR_FIRST_NAME: "Andrea Ysabelle",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Revil",
      INSTRUCTOR_FIRST_NAME: "Jevin Aundrey",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ruta",
      INSTRUCTOR_FIRST_NAME: "Christian Joseph B.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Ken Jeremy",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yian",
      INSTRUCTOR_FIRST_NAME: "Nicole Francine",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cristino",
      INSTRUCTOR_FIRST_NAME: "Alex James",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deogrades",
      INSTRUCTOR_FIRST_NAME: "Trisha Faye",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tomas",
      INSTRUCTOR_FIRST_NAME: "Mary Christine",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuerpo",
      INSTRUCTOR_FIRST_NAME: "Johannah Martella",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deloso",
      INSTRUCTOR_FIRST_NAME: "Christian Rhoy",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "SORIÑO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "HONEY JANE",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morales",
      INSTRUCTOR_FIRST_NAME: "Frandel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabiten",
      INSTRUCTOR_FIRST_NAME: "Kent Gabrielle",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kotah_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Benson",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Simene",
      INSTRUCTOR_FIRST_NAME: "Eurika Britney M",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salang",
      INSTRUCTOR_FIRST_NAME: "Maria Joanna Andrea",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medellin Jr.",
      INSTRUCTOR_FIRST_NAME: "Clarence",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampo",
      INSTRUCTOR_FIRST_NAME: "Quennies",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galvez",
      INSTRUCTOR_FIRST_NAME: "Mia",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Celestino",
      INSTRUCTOR_FIRST_NAME: "Cyrill Justine",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Piño",
      INSTRUCTOR_FIRST_NAME: "Chantal Rain",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Diego Jose R",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Halasan",
      INSTRUCTOR_FIRST_NAME: "Justin Michael",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nepomuceno",
      INSTRUCTOR_FIRST_NAME: "Derk Yuri",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosales",
      INSTRUCTOR_FIRST_NAME: "Gabriel Ethan",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pangilinan",
      INSTRUCTOR_FIRST_NAME: "Richard Erick",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "AMPATUAN",
      INSTRUCTOR_FIRST_NAME: "ALEJANDRE MAJEED",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palma",
      INSTRUCTOR_FIRST_NAME: "Erika Aliah Michelle",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinsuat",
      INSTRUCTOR_FIRST_NAME: "Mikhaela Marsha",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ambrona",
      INSTRUCTOR_FIRST_NAME: "Ray Alfred",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pinili",
      INSTRUCTOR_FIRST_NAME: "Jericho",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Busog",
      INSTRUCTOR_FIRST_NAME: "Misshy Kate",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lua",
      INSTRUCTOR_FIRST_NAME: "Joshua Benedict",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Potenz Gregory",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "ALBAY",
      INSTRUCTOR_FIRST_NAME: "ROMMEL",
      COURSE_NAME: "Philippine Indigenous Communities (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dummy2",
      INSTRUCTOR_FIRST_NAME: "GernStud",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosete",
      INSTRUCTOR_FIRST_NAME: "Ma. Christelle Kharla",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llemit_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Martinee",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manganaan",
      INSTRUCTOR_FIRST_NAME: "Samantha",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinsuat",
      INSTRUCTOR_FIRST_NAME: "Bai Sharhaina",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagrimas",
      INSTRUCTOR_FIRST_NAME: "Tricia",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacalla",
      INSTRUCTOR_FIRST_NAME: "Kyle Pierre",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peñalosa",
      INSTRUCTOR_FIRST_NAME: "Gerome B",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soterno",
      INSTRUCTOR_FIRST_NAME: "Mariah Isabelle",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almario",
      INSTRUCTOR_FIRST_NAME: "Alex Camille",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Seballa",
      INSTRUCTOR_FIRST_NAME: "Kim Jude R",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ebol",
      INSTRUCTOR_FIRST_NAME: "Via Mae",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paradeza",
      INSTRUCTOR_FIRST_NAME: "Jan Carlo B",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dizon",
      INSTRUCTOR_FIRST_NAME: "Raphael Joseph",
      COURSE_NAME: "Mechanical Engineering 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jugar",
      INSTRUCTOR_FIRST_NAME: "Hernan Rey",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calinisan",
      INSTRUCTOR_FIRST_NAME: "Eiman Gabriel",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galido",
      INSTRUCTOR_FIRST_NAME: "Christine Louise",
      COURSE_NAME: "Mathematics for Engineers (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yambao",
      INSTRUCTOR_FIRST_NAME: "Alderney",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valero",
      INSTRUCTOR_FIRST_NAME: "Jonnah Belle",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maniwang",
      INSTRUCTOR_FIRST_NAME: "Jose Enrico",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Joanna Eve Alexandra",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Duropan",
      INSTRUCTOR_FIRST_NAME: "Eunice",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangrobang",
      INSTRUCTOR_FIRST_NAME: "Jared Josh",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pantin",
      INSTRUCTOR_FIRST_NAME: "Zeyesha Chelsea",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apalesis",
      INSTRUCTOR_FIRST_NAME: "Elizar Nicole",
      COURSE_NAME: "Philippine Indigenous Communities - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salon",
      INSTRUCTOR_FIRST_NAME: "Frances Noelle",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magno III",
      INSTRUCTOR_FIRST_NAME: "Eugenio Virgilio",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juyad",
      INSTRUCTOR_FIRST_NAME: "Christine Paula",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ba-ang",
      INSTRUCTOR_FIRST_NAME: "Marie Gabrielle",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Franada",
      INSTRUCTOR_FIRST_NAME: "Kirsten Lorenz",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elarmo",
      INSTRUCTOR_FIRST_NAME: "Abigail",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Melocoton",
      INSTRUCTOR_FIRST_NAME: "Juancho Francesco",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boniza",
      INSTRUCTOR_FIRST_NAME: "Edzyl Philip",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañete",
      INSTRUCTOR_FIRST_NAME: "Hailie Ashley G",
      COURSE_NAME: "DC/AC Machinery - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lasib",
      INSTRUCTOR_FIRST_NAME: "Ryedhel Fame Gwyneth",
      COURSE_NAME: "Advanced Algebra",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yumo",
      INSTRUCTOR_FIRST_NAME: "Timothy Gerard",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balba",
      INSTRUCTOR_FIRST_NAME: "Charlene",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gatab",
      INSTRUCTOR_FIRST_NAME: "Jarode Andrei",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangulabnan",
      INSTRUCTOR_FIRST_NAME: "Piolo John",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tong",
      INSTRUCTOR_FIRST_NAME: "Karyle Anne S.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coloma",
      INSTRUCTOR_FIRST_NAME: "Julia Yvanna Marie",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuello",
      INSTRUCTOR_FIRST_NAME: "Eugene Andreu",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mago",
      INSTRUCTOR_FIRST_NAME: "Charlize Ygerny",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diente",
      INSTRUCTOR_FIRST_NAME: "Villarico",
      COURSE_NAME: "Engineering MEchanics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Operario",
      INSTRUCTOR_FIRST_NAME: "Hans Ivan",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kadingilan",
      INSTRUCTOR_FIRST_NAME: "Norhak",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salem",
      INSTRUCTOR_FIRST_NAME: "Zhaira Nicolle",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manuel",
      INSTRUCTOR_FIRST_NAME: "J.Rikko Beethoven A.",
      COURSE_NAME: "Principles of Transportation Engineering - A342",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pagco",
      INSTRUCTOR_FIRST_NAME: "Krissoula Sheina",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lenterna",
      INSTRUCTOR_FIRST_NAME: "Rafael Marko",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magno",
      INSTRUCTOR_FIRST_NAME: "Vince Cedric",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Roble",
      INSTRUCTOR_FIRST_NAME: "Izabhela V",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adlawan",
      INSTRUCTOR_FIRST_NAME: "Kyle John",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ombajin",
      INSTRUCTOR_FIRST_NAME: "Lenie Joy",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pusta",
      INSTRUCTOR_FIRST_NAME: "Mary Antoinette",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puentespina",
      INSTRUCTOR_FIRST_NAME: "Carl Patrick",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Layno",
      INSTRUCTOR_FIRST_NAME: "Kenneth",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Allen Dayle",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clapis",
      INSTRUCTOR_FIRST_NAME: "Lanz Lexi Lianne",
      COURSE_NAME: "International Business and Trade",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salem",
      INSTRUCTOR_FIRST_NAME: "Dionne Krisha",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Michelle",
      INSTRUCTOR_FIRST_NAME: "Galacio",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ancheta",
      INSTRUCTOR_FIRST_NAME: "Tristan James",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumagat",
      INSTRUCTOR_FIRST_NAME: "Rae Cloyd",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cayas",
      INSTRUCTOR_FIRST_NAME: "Vincent Michael",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serito",
      INSTRUCTOR_FIRST_NAME: "Joel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bucag",
      INSTRUCTOR_FIRST_NAME: "Almar Jezrel",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magayano",
      INSTRUCTOR_FIRST_NAME: "Jan Randolf",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Allado",
      INSTRUCTOR_FIRST_NAME: "Prince Jerome",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mangas",
      INSTRUCTOR_FIRST_NAME: "Vaughn Dylan Quinn",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abella",
      INSTRUCTOR_FIRST_NAME: "Jamiel",
      COURSE_NAME: "General Botany",
    },
    {
      INSTRUCTOR_LAST_NAME: "ODANGO",
      INSTRUCTOR_FIRST_NAME: "JANREVE",
      COURSE_NAME: "General Botany",
    },
    {
      INSTRUCTOR_LAST_NAME: "DALAGAN",
      INSTRUCTOR_FIRST_NAME: "JUNINAH",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "CABUÑAS",
      INSTRUCTOR_FIRST_NAME: "JAY",
      COURSE_NAME: "Chemistry for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ras",
      INSTRUCTOR_FIRST_NAME: "Vanessa Jean G",
      COURSE_NAME: "MANAGERIAL ACCOUNTING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magdagasang",
      INSTRUCTOR_FIRST_NAME: "Sky",
      COURSE_NAME: "Structural Design 1 : Rcd and Pre-Stressed Concrete",
    },
    {
      INSTRUCTOR_LAST_NAME: "CAHAYAG",
      INSTRUCTOR_FIRST_NAME: "AIDA LOU",
      COURSE_NAME: "Chemistry for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marcellones",
      INSTRUCTOR_FIRST_NAME: "Jasper Van",
      COURSE_NAME: "Data Structures and Algorithms (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cataluña",
      INSTRUCTOR_FIRST_NAME: "Li Laine",
      COURSE_NAME:
        "Architectural Design 7: Community Architecture and Urban Design (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perodez",
      INSTRUCTOR_FIRST_NAME: "Maria Sushmita",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dummy1",
      INSTRUCTOR_FIRST_NAME: "GernStud",
      COURSE_NAME: "Receptive Communication Skills (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumlao",
      INSTRUCTOR_FIRST_NAME: "Diana Mikaela D.",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabil",
      INSTRUCTOR_FIRST_NAME: "Andrea Gwen A",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Deiparine",
      INSTRUCTOR_FIRST_NAME: "Rafaela Marie",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palo",
      INSTRUCTOR_FIRST_NAME: "Floyd Cristian P",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Yzrael",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guerrero",
      INSTRUCTOR_FIRST_NAME: "Franz Joseph",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamboa",
      INSTRUCTOR_FIRST_NAME: "Milden Khryss",
      COURSE_NAME: "Differential Equations",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corpuz",
      INSTRUCTOR_FIRST_NAME: "Lester Laurence",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luayon",
      INSTRUCTOR_FIRST_NAME: "Dea Jyzel",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Socorro",
      INSTRUCTOR_FIRST_NAME: "Fryance Jy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sancebutche",
      INSTRUCTOR_FIRST_NAME: "Kreishajoy Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matabilas",
      INSTRUCTOR_FIRST_NAME: "Joshua Allan",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sebastian",
      INSTRUCTOR_FIRST_NAME: "Deanne Belle",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodrigo",
      INSTRUCTOR_FIRST_NAME: "Roel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Trisha Yvonne",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cubelo",
      INSTRUCTOR_FIRST_NAME: "Jose Enrique",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañamo",
      INSTRUCTOR_FIRST_NAME: "Paul Willis",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sambas",
      INSTRUCTOR_FIRST_NAME: "Liam Mikael",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jayme",
      INSTRUCTOR_FIRST_NAME: "Kirby Kruegger F",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Regunda",
      INSTRUCTOR_FIRST_NAME: "Isaiah John",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lobrino",
      INSTRUCTOR_FIRST_NAME: "Airez Jozel",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baruiz",
      INSTRUCTOR_FIRST_NAME: "Ashley Jilianne",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sagabay",
      INSTRUCTOR_FIRST_NAME: "Chriztlyre Hershey Vynne",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Napolitano",
      INSTRUCTOR_FIRST_NAME: "Nathan Jed",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Sean Andrei",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ranara",
      INSTRUCTOR_FIRST_NAME: "Annie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sian",
      INSTRUCTOR_FIRST_NAME: "David Anthony",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gumban",
      INSTRUCTOR_FIRST_NAME: "Joan",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galaura",
      INSTRUCTOR_FIRST_NAME: "Weezy Mie",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Policarpio",
      INSTRUCTOR_FIRST_NAME: "Mariah Mae D",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cordero",
      INSTRUCTOR_FIRST_NAME: "Ria Millicent",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "ODARVE_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "VICTOR",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buniel",
      INSTRUCTOR_FIRST_NAME: "Nena Salve",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ontanillas",
      INSTRUCTOR_FIRST_NAME: "Steven Mark",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Larase",
      INSTRUCTOR_FIRST_NAME: "Mcee Raiza",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navarro",
      INSTRUCTOR_FIRST_NAME: "Rizaih Reuel Jet",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Molao",
      INSTRUCTOR_FIRST_NAME: "Abee Jamren",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Porticos",
      INSTRUCTOR_FIRST_NAME: "Liam Kendrique",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalogdog",
      INSTRUCTOR_FIRST_NAME: "Shennah Mae",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estinozo",
      INSTRUCTOR_FIRST_NAME: "Joseph Dennis",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagondon",
      INSTRUCTOR_FIRST_NAME: "Alexis John",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Iturralde",
      INSTRUCTOR_FIRST_NAME: "Jaci",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bangayan_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jennifer",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galgo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Erika Valerie",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Louigie Marree",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andolana",
      INSTRUCTOR_FIRST_NAME: "Kiel Joliette",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gamutin",
      INSTRUCTOR_FIRST_NAME: "Jericho M",
      COURSE_NAME: "Industrial Electronics for Electrical Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ignacio",
      INSTRUCTOR_FIRST_NAME: "Rein Aneluv",
      COURSE_NAME: "Illumination Engineering Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "CABALES",
      INSTRUCTOR_FIRST_NAME: "DIANA",
      COURSE_NAME: "AC Apparatus and Devices (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nicor",
      INSTRUCTOR_FIRST_NAME: "Carl John Ignacio",
      COURSE_NAME: "TOUR AND TRAVEL MANAGEMENT",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ponce",
      INSTRUCTOR_FIRST_NAME: "Patricia Kate",
      COURSE_NAME: "Data Communications (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aglobo",
      INSTRUCTOR_FIRST_NAME: "Ericka",
      COURSE_NAME: "Financial Market",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ongle",
      INSTRUCTOR_FIRST_NAME: "Clarence",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Artuz",
      INSTRUCTOR_FIRST_NAME: "Rachel",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabian",
      INSTRUCTOR_FIRST_NAME: "Lindsay Shannon",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mantua",
      INSTRUCTOR_FIRST_NAME: "Gabriel T",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amoronio",
      INSTRUCTOR_FIRST_NAME: "Cyril John",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capulong",
      INSTRUCTOR_FIRST_NAME: "Lester Angelo",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mino",
      INSTRUCTOR_FIRST_NAME: "Kim Charles",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Guiapal",
      INSTRUCTOR_FIRST_NAME: "Analyn G",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bonsubre",
      INSTRUCTOR_FIRST_NAME: "James Patrick",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Silongan",
      INSTRUCTOR_FIRST_NAME: "Bin Dawod",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Allen Vincent",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clenuar",
      INSTRUCTOR_FIRST_NAME: "Lle An Issey",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martinez",
      INSTRUCTOR_FIRST_NAME: "John Gabriel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borres_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Rianina",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "account",
      INSTRUCTOR_FIRST_NAME: "student1",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dangaran",
      INSTRUCTOR_FIRST_NAME: "Pauline",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriguez_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Daryll Dan",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Asis",
      INSTRUCTOR_FIRST_NAME: "Zyrille Mae",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Milana",
      INSTRUCTOR_FIRST_NAME: "Daniel James",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sira",
      INSTRUCTOR_FIRST_NAME: "Alain Mari P",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apostol",
      INSTRUCTOR_FIRST_NAME: "Levije Fate",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacudao",
      INSTRUCTOR_FIRST_NAME: "Alanis Monica",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capala",
      INSTRUCTOR_FIRST_NAME: "Marie Antoinette",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pelaez",
      INSTRUCTOR_FIRST_NAME: "William Lance",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garay",
      INSTRUCTOR_FIRST_NAME: "Sophia Ysabelle",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aca-Ac",
      INSTRUCTOR_FIRST_NAME: "Neil-II",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarcia",
      INSTRUCTOR_FIRST_NAME: "Daniel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "LOZADA",
      INSTRUCTOR_FIRST_NAME: "LIEZEL",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bilao",
      INSTRUCTOR_FIRST_NAME: "Nathaniel Josh",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bucog",
      INSTRUCTOR_FIRST_NAME: "Lou Vincent",
      COURSE_NAME: "Mathematics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Gabriel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "MADRAZO",
      INSTRUCTOR_FIRST_NAME: "KYRA GELOISA JANE P.",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serrano",
      INSTRUCTOR_FIRST_NAME: "Hyacinth Kae B",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saron",
      INSTRUCTOR_FIRST_NAME: "Alyssa Danica Mae B",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Janelle Cassandra",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Chantelle",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hilario",
      INSTRUCTOR_FIRST_NAME: "Mary Grace",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cortel",
      INSTRUCTOR_FIRST_NAME: "Cristian Jyll",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabalan",
      INSTRUCTOR_FIRST_NAME: "Harold Jr. S",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padin",
      INSTRUCTOR_FIRST_NAME: "Juren Michael Jay",
      COURSE_NAME: "Principles of 2D Animation (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martinez",
      INSTRUCTOR_FIRST_NAME: "Marc Howard",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Capundag",
      INSTRUCTOR_FIRST_NAME: "John Blake",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiambao",
      INSTRUCTOR_FIRST_NAME: "Jose Sonny",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cainglet",
      INSTRUCTOR_FIRST_NAME: "Kent Xavier",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Derecho",
      INSTRUCTOR_FIRST_NAME: "Simon Patrick",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dionela",
      INSTRUCTOR_FIRST_NAME: "Kirsten Moira",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tesoro",
      INSTRUCTOR_FIRST_NAME: "Sam Adrianne",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Margarette",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peji",
      INSTRUCTOR_FIRST_NAME: "Chris Haven P",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sazon",
      INSTRUCTOR_FIRST_NAME: "Franz Jerick",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alterado",
      INSTRUCTOR_FIRST_NAME: "Shane Star Victoria",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabigas",
      INSTRUCTOR_FIRST_NAME: "Crishia Sheena Danyle",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monjardin",
      INSTRUCTOR_FIRST_NAME: "Cris Edward",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Logrosa",
      INSTRUCTOR_FIRST_NAME: "Christian Joy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carillo",
      INSTRUCTOR_FIRST_NAME: "Kate Julia L",
      COURSE_NAME: "Dynamics of Society, Politics, and Development in Mindanao",
    },
    {
      INSTRUCTOR_LAST_NAME: "Danao",
      INSTRUCTOR_FIRST_NAME: "Allen",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Centillas",
      INSTRUCTOR_FIRST_NAME: "Genedemetri Kaye",
      COURSE_NAME: "Audio Design and Sound Engineering (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lazaro Jr.",
      INSTRUCTOR_FIRST_NAME: "Jose",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "AMAYA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "PETER BENJAMIN",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ricarse",
      INSTRUCTOR_FIRST_NAME: "Kaisha",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mutalib",
      INSTRUCTOR_FIRST_NAME: "Jasper",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student34",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biado",
      INSTRUCTOR_FIRST_NAME: "Beverly",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Luzano",
      INSTRUCTOR_FIRST_NAME: "Elisa Mari",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Nava",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arbotante",
      INSTRUCTOR_FIRST_NAME: "Hannah Alexa V.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bering_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Shiela Marie",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tapon",
      INSTRUCTOR_FIRST_NAME: "Jz",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adayo",
      INSTRUCTOR_FIRST_NAME: "Edrian Mark",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lozano",
      INSTRUCTOR_FIRST_NAME: "Ritchel Mae",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kusain",
      INSTRUCTOR_FIRST_NAME: "Haifah",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Telin",
      INSTRUCTOR_FIRST_NAME: "Jullia Marzell",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cayco",
      INSTRUCTOR_FIRST_NAME: "Miggy Zachary",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abella",
      INSTRUCTOR_FIRST_NAME: "Raiza",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kabwe",
      INSTRUCTOR_FIRST_NAME: "Nicknate S",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Faustino",
      INSTRUCTOR_FIRST_NAME: "Daniel Mickaiel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yuson",
      INSTRUCTOR_FIRST_NAME: "Jasmine Nicole",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Epe",
      INSTRUCTOR_FIRST_NAME: "Ysa Thea",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Colendres",
      INSTRUCTOR_FIRST_NAME: "Henric Azrael",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Glor",
      INSTRUCTOR_FIRST_NAME: "Jan Martin",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Lance K",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lavega",
      INSTRUCTOR_FIRST_NAME: "Kirk Patrick",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Los Reyes",
      INSTRUCTOR_FIRST_NAME: "Clark",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Llorente",
      INSTRUCTOR_FIRST_NAME: "Lydda Jane",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "ODARVE",
      INSTRUCTOR_FIRST_NAME: "VICTOR",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Defenio",
      INSTRUCTOR_FIRST_NAME: "Ainoah Luz-Marie",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palileo",
      INSTRUCTOR_FIRST_NAME: "James Henry",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pertez",
      INSTRUCTOR_FIRST_NAME: "Fame",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tuquib",
      INSTRUCTOR_FIRST_NAME: "Danica Fayme",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Librado_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Mary Grace",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baulete",
      INSTRUCTOR_FIRST_NAME: "Jethcarl Ceddrick",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramintas",
      INSTRUCTOR_FIRST_NAME: "Josh Keny",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cruz",
      INSTRUCTOR_FIRST_NAME: "Glher Joshric",
      COURSE_NAME: "DC/AC Machinery - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Robert Anthony Nathan",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bantugan",
      INSTRUCTOR_FIRST_NAME: "Joyce Camille",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "MCM",
      INSTRUCTOR_FIRST_NAME: "Student",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Britos",
      INSTRUCTOR_FIRST_NAME: "Bern Stanly",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Leon",
      INSTRUCTOR_FIRST_NAME: "Jerald Ryan",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Ciriaco",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzaga",
      INSTRUCTOR_FIRST_NAME: "Glenn William",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ofilan",
      INSTRUCTOR_FIRST_NAME: "Evie",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inagaki",
      INSTRUCTOR_FIRST_NAME: "Akari",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Villadores",
      INSTRUCTOR_FIRST_NAME: "Alexis Miguel",
      COURSE_NAME: "Electromagnetics for ECE",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumao-As",
      INSTRUCTOR_FIRST_NAME: "Meg Louise P",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Campanilla",
      INSTRUCTOR_FIRST_NAME: "Zabriel Anne",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Badar",
      INSTRUCTOR_FIRST_NAME: "Angelie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Nadine Shaine",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zailon",
      INSTRUCTOR_FIRST_NAME: "Jaber D.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ordinario",
      INSTRUCTOR_FIRST_NAME: "Reniño Reeve",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mondragon",
      INSTRUCTOR_FIRST_NAME: "Katrina Ella J",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salvador",
      INSTRUCTOR_FIRST_NAME: "Shairah Lynn",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mag-Aso",
      INSTRUCTOR_FIRST_NAME: "Kurt Enriko M",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pol",
      INSTRUCTOR_FIRST_NAME: "Franz Emmanuel",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espino",
      INSTRUCTOR_FIRST_NAME: "Matthew James",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Müller",
      INSTRUCTOR_FIRST_NAME: "Rania",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montes",
      INSTRUCTOR_FIRST_NAME: "Bon Jovi",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim Jr._PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ernesto",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Langones",
      INSTRUCTOR_FIRST_NAME: "Miguel Paolo",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masipag",
      INSTRUCTOR_FIRST_NAME: "Angela",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escoreal",
      INSTRUCTOR_FIRST_NAME: "Josseph",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuentes",
      INSTRUCTOR_FIRST_NAME: "Rhea Rose",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dugay",
      INSTRUCTOR_FIRST_NAME: "Kevin",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banzon",
      INSTRUCTOR_FIRST_NAME: "Noelord",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catienza",
      INSTRUCTOR_FIRST_NAME: "Michel Eirene",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "RALLA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "PATRICK JAYSON",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tarranza",
      INSTRUCTOR_FIRST_NAME: "John Paul",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soniel",
      INSTRUCTOR_FIRST_NAME: "Joseph Genesis",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Choy",
      INSTRUCTOR_FIRST_NAME: "Annabel",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mesenas",
      INSTRUCTOR_FIRST_NAME: "Mary Elizabeth",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanoy",
      INSTRUCTOR_FIRST_NAME: "Jezzreel Moses",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magallano",
      INSTRUCTOR_FIRST_NAME: "Allyza Zyrene",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tibre",
      INSTRUCTOR_FIRST_NAME: "Lucilyn D",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "IBAÑEZ",
      INSTRUCTOR_FIRST_NAME: "KIARAH REYSHYLLE C.",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gahaton",
      INSTRUCTOR_FIRST_NAME: "Iris Mae",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rosario",
      INSTRUCTOR_FIRST_NAME: "Harold",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elino",
      INSTRUCTOR_FIRST_NAME: "Frances Aila",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tagabe",
      INSTRUCTOR_FIRST_NAME: "Emiegrace G",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Viola",
      INSTRUCTOR_FIRST_NAME: "Angela Candice",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Javelosa",
      INSTRUCTOR_FIRST_NAME: "Aragorn",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Picardal",
      INSTRUCTOR_FIRST_NAME: "Kim Karlo C",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salse",
      INSTRUCTOR_FIRST_NAME: "Mathea Nicole",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabaño",
      INSTRUCTOR_FIRST_NAME: "Alyanna Lezeth",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laude",
      INSTRUCTOR_FIRST_NAME: "Arneil",
      COURSE_NAME: "INTRODUCTION TO MICRO, SMALL AND MEDIUM ENTERPRISES",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alaba",
      INSTRUCTOR_FIRST_NAME: "Cresty Joy",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vergara",
      INSTRUCTOR_FIRST_NAME: "Alyanna Ricci",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Guia",
      INSTRUCTOR_FIRST_NAME: "Emmalyn",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montojo",
      INSTRUCTOR_FIRST_NAME: "Moira Chloee",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Shimada",
      INSTRUCTOR_FIRST_NAME: "Kiyara Miyuki",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antipuesto",
      INSTRUCTOR_FIRST_NAME: "Gilleser James",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "ÑUMBER",
      INSTRUCTOR_FIRST_NAME: "BB USER",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buniel",
      INSTRUCTOR_FIRST_NAME: "Ronald Joshua",
      COURSE_NAME:
        "Chemical Reaction Engineering (Paired) - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lao",
      INSTRUCTOR_FIRST_NAME: "Jenika Carlein",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wu",
      INSTRUCTOR_FIRST_NAME: "Jessie",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calalas",
      INSTRUCTOR_FIRST_NAME: "Kiarra Isabelle",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Genova",
      INSTRUCTOR_FIRST_NAME: "Uwenzie",
      COURSE_NAME:
        "Building Technology 5: Alternative Building Construction Systems (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vergara",
      INSTRUCTOR_FIRST_NAME: "Rembert Jr.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Batao",
      INSTRUCTOR_FIRST_NAME: "Mark Eugene A.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabuang",
      INSTRUCTOR_FIRST_NAME: "Eugene Fritz",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Berame",
      INSTRUCTOR_FIRST_NAME: "Krisanto Emmanuel L.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibañez",
      INSTRUCTOR_FIRST_NAME: "Gabriel Christian",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chan",
      INSTRUCTOR_FIRST_NAME: "Kathrine A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tarepe",
      INSTRUCTOR_FIRST_NAME: "Dwayne Ivar",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Israel",
      INSTRUCTOR_FIRST_NAME: "Gian Elde",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labrador",
      INSTRUCTOR_FIRST_NAME: "Mary Joyce",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ostique",
      INSTRUCTOR_FIRST_NAME: "John Faisal G.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Astillo",
      INSTRUCTOR_FIRST_NAME: "Denise Marie B",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alorro",
      INSTRUCTOR_FIRST_NAME: "Prince Rome Mackenzie",
      COURSE_NAME: "Account Lockout Intervention",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalumpines",
      INSTRUCTOR_FIRST_NAME: "Sheezeil Doreah",
      COURSE_NAME: "Account Lockout Intervention",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mansing",
      INSTRUCTOR_FIRST_NAME: "Lazaro",
      COURSE_NAME: "ENGINEERING DATA ANALYSIS",
    },
    {
      INSTRUCTOR_LAST_NAME: "INTONG",
      INSTRUCTOR_FIRST_NAME: "DYAN",
      COURSE_NAME: "Homeroom Copper",
    },
    {
      INSTRUCTOR_LAST_NAME: "PACIOL",
      INSTRUCTOR_FIRST_NAME: "REY",
      COURSE_NAME: "Homeroom Mayo",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saliot",
      INSTRUCTOR_FIRST_NAME: "Ruben",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Singcoy",
      INSTRUCTOR_FIRST_NAME: "Aldrin",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Antonio",
      INSTRUCTOR_FIRST_NAME: "Chalet B",
      COURSE_NAME: "HYDROLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sicat",
      INSTRUCTOR_FIRST_NAME: "Christian Dave C",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gerdan",
      INSTRUCTOR_FIRST_NAME: "Daniel Craig",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Camay",
      INSTRUCTOR_FIRST_NAME: "Dustin Kyle",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bontuyan",
      INSTRUCTOR_FIRST_NAME: "Aljin Lois",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Collado",
      INSTRUCTOR_FIRST_NAME: "Faith",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "MAGLOYUAN",
      INSTRUCTOR_FIRST_NAME: "NEIL P.",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Licup",
      INSTRUCTOR_FIRST_NAME: "Prospher Jhessbill",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morales",
      INSTRUCTOR_FIRST_NAME: "Keanric",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student33",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Juen",
      INSTRUCTOR_FIRST_NAME: "Prince Cj",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tatoy",
      INSTRUCTOR_FIRST_NAME: "Raven Boneclair",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "VILLANUEVA",
      INSTRUCTOR_FIRST_NAME: "RACHEL C.",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "Aubrey Kerstan G",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Badong",
      INSTRUCTOR_FIRST_NAME: "Warren",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ipong",
      INSTRUCTOR_FIRST_NAME: "Lady Janrose",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nailes",
      INSTRUCTOR_FIRST_NAME: "Gwyneth Dorothy",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parreño",
      INSTRUCTOR_FIRST_NAME: "Jerille Marc",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Defensor",
      INSTRUCTOR_FIRST_NAME: "Arnel Rasheed",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ebus",
      INSTRUCTOR_FIRST_NAME: "John Dave",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Botona",
      INSTRUCTOR_FIRST_NAME: "Marvin John",
      COURSE_NAME: "Emc Practicum 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palanca",
      INSTRUCTOR_FIRST_NAME: "Lewin Grover",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Añonuevo",
      INSTRUCTOR_FIRST_NAME: "Jex Humphrey",
      COURSE_NAME: "Art and Design Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "OBREGON",
      INSTRUCTOR_FIRST_NAME: "MATTHEW MARK D.",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Comia",
      INSTRUCTOR_FIRST_NAME: "Maria Regina",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bitor",
      INSTRUCTOR_FIRST_NAME: "Robert Joseph",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esmael",
      INSTRUCTOR_FIRST_NAME: "Nhorsaidin",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oñate",
      INSTRUCTOR_FIRST_NAME: "Leanie Grace D.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mitmug",
      INSTRUCTOR_FIRST_NAME: "Ameerhasan",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tancawan",
      INSTRUCTOR_FIRST_NAME: "Jiles Chester",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Mardelito",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suelto",
      INSTRUCTOR_FIRST_NAME: "Nielliza",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yaeso",
      INSTRUCTOR_FIRST_NAME: "Jilliane Miles",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabaguio",
      INSTRUCTOR_FIRST_NAME: "Manuel Sebastian",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ti",
      INSTRUCTOR_FIRST_NAME: "Jan Melvin Edward",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alferez",
      INSTRUCTOR_FIRST_NAME: "Vanne Odette Jan",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tarona",
      INSTRUCTOR_FIRST_NAME: "Elger",
      COURSE_NAME: "Architecture and Organization (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jacela",
      INSTRUCTOR_FIRST_NAME: "Prince Clyde S",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bercero",
      INSTRUCTOR_FIRST_NAME: "Keanu Lloyd L",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Geverola",
      INSTRUCTOR_FIRST_NAME: "Kris Charles P",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lidasan",
      INSTRUCTOR_FIRST_NAME: "Jamaissan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mondalo",
      INSTRUCTOR_FIRST_NAME: "Bea Rica A",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalugdug",
      INSTRUCTOR_FIRST_NAME: "Maria Sophia Dorothy C",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apale",
      INSTRUCTOR_FIRST_NAME: "Queen Emie Ray",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Luna",
      INSTRUCTOR_FIRST_NAME: "Prince Kyle",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baillo",
      INSTRUCTOR_FIRST_NAME: "Kashmir Faye",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Leonar",
      INSTRUCTOR_FIRST_NAME: "Charisse",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abad",
      INSTRUCTOR_FIRST_NAME: "Harvey Jon",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Peig",
      INSTRUCTOR_FIRST_NAME: "Audrey Marie Hyacinth",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "DE LIMA",
      INSTRUCTOR_FIRST_NAME: "SUZANNE NOREEN",
      COURSE_NAME:
        "Building Utilities 2: Electrical, Electronics and MEchanical Systems (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tiongco",
      INSTRUCTOR_FIRST_NAME: "Danilo",
      COURSE_NAME: "Hydraulics (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salangsang",
      INSTRUCTOR_FIRST_NAME: "Chino A",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mamacos",
      INSTRUCTOR_FIRST_NAME: "Julia Aika",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manalastas",
      INSTRUCTOR_FIRST_NAME: "Kyezell",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almanzor",
      INSTRUCTOR_FIRST_NAME: "Neil Angelo",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martin",
      INSTRUCTOR_FIRST_NAME: "Lowell John",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Jesus",
      INSTRUCTOR_FIRST_NAME: "Emjay Paul",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maquiling",
      INSTRUCTOR_FIRST_NAME: "Deo Daisson",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nicolas",
      INSTRUCTOR_FIRST_NAME: "Luis Enrico",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mandap",
      INSTRUCTOR_FIRST_NAME: "Jomer",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abatayo",
      INSTRUCTOR_FIRST_NAME: "Jara Leighanna",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimenez",
      INSTRUCTOR_FIRST_NAME: "Karl Daniel",
      COURSE_NAME: "LEGAL ASPECTS IN TOURISM AND HOSPITALITY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ikehata",
      INSTRUCTOR_FIRST_NAME: "Koki",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "RALLON",
      INSTRUCTOR_FIRST_NAME: "NICHOLA",
      COURSE_NAME: "Training Course (Ultra)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cultura",
      INSTRUCTOR_FIRST_NAME: "Paul John E.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Solay",
      INSTRUCTOR_FIRST_NAME: "Rohania",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lanote",
      INSTRUCTOR_FIRST_NAME: "Ella Jean",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martin",
      INSTRUCTOR_FIRST_NAME: "Chloe",
      COURSE_NAME: "2D ANIMATION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biclar",
      INSTRUCTOR_FIRST_NAME: "Gwyneth Estelle",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabuya",
      INSTRUCTOR_FIRST_NAME: "Julianne Zoe",
      COURSE_NAME: "Computer Engineering Drafting And Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escovilla",
      INSTRUCTOR_FIRST_NAME: "Kyle Gabriel",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catigbe",
      INSTRUCTOR_FIRST_NAME: "Ralph Michael",
      COURSE_NAME: "Filipino 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montero",
      INSTRUCTOR_FIRST_NAME: "Jula Thalita Kuom",
      COURSE_NAME: "Philippine Literature 2nd Sem 2020",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Lee Hong",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hemplo",
      INSTRUCTOR_FIRST_NAME: "Dale Anthony",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Park",
      INSTRUCTOR_FIRST_NAME: "Rexies",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Devalgue",
      INSTRUCTOR_FIRST_NAME: "Adrian",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masagnay",
      INSTRUCTOR_FIRST_NAME: "Mychel Anne",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Grospe",
      INSTRUCTOR_FIRST_NAME: "Kenn Archie",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Callo",
      INSTRUCTOR_FIRST_NAME: "Ailene",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vibas",
      INSTRUCTOR_FIRST_NAME: "Tyrone Piolo",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lechoncito",
      INSTRUCTOR_FIRST_NAME: "Josef Neil",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estrella",
      INSTRUCTOR_FIRST_NAME: "Kyle Joy",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Limcatchon",
      INSTRUCTOR_FIRST_NAME: "Jugaire",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alejandre",
      INSTRUCTOR_FIRST_NAME: "Bianca Amber",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillo",
      INSTRUCTOR_FIRST_NAME: "Paolo Fredrick",
      COURSE_NAME: "Practical Research 1 (Qualitative)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Francisco",
      INSTRUCTOR_FIRST_NAME: "Joey",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salcedo",
      INSTRUCTOR_FIRST_NAME: "Emmanuel",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Goo",
      INSTRUCTOR_FIRST_NAME: "Richard Bonsek",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espinosa",
      INSTRUCTOR_FIRST_NAME: "Mel Andrei",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sucayan",
      INSTRUCTOR_FIRST_NAME: "Mark Steven",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salomia",
      INSTRUCTOR_FIRST_NAME: "Kristina Paula",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hualde",
      INSTRUCTOR_FIRST_NAME: "Julia",
      COURSE_NAME: "Machine Shop Theory and Practice 1 (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malagum",
      INSTRUCTOR_FIRST_NAME: "Jules Broz",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jani",
      INSTRUCTOR_FIRST_NAME: "Sam Jefferson",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magalona",
      INSTRUCTOR_FIRST_NAME: "King Aj",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampatuan",
      INSTRUCTOR_FIRST_NAME: "Datu Rizwan",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carian",
      INSTRUCTOR_FIRST_NAME: "Aaron Miguel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arbuso",
      INSTRUCTOR_FIRST_NAME: "Alexandra",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Senshiki",
      INSTRUCTOR_FIRST_NAME: "Hiroshi N",
      COURSE_NAME: "Engineering Data Analysis (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Peña",
      INSTRUCTOR_FIRST_NAME: "Trishia Benjalyn Amor",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Francisquete",
      INSTRUCTOR_FIRST_NAME: "Ralph Edgar",
      COURSE_NAME: "Accommodation Operations and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendoza",
      INSTRUCTOR_FIRST_NAME: "Zapheth R.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Milloria",
      INSTRUCTOR_FIRST_NAME: "John Bryle",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catedrilla",
      INSTRUCTOR_FIRST_NAME: "Gianne Eniel",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ngojo",
      INSTRUCTOR_FIRST_NAME: "Kenzo Niño",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maquiling",
      INSTRUCTOR_FIRST_NAME: "Earl Kaizzer D",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Remigio",
      INSTRUCTOR_FIRST_NAME: "Aldraine Jay",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gomez",
      INSTRUCTOR_FIRST_NAME: "Allison",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "DAIGDIGAN",
      INSTRUCTOR_FIRST_NAME: "JAMES S.",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kumar",
      INSTRUCTOR_FIRST_NAME: "Yash",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "useradmin",
      INSTRUCTOR_FIRST_NAME: "useradmin",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gulay",
      INSTRUCTOR_FIRST_NAME: "Desiree Grace",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortiz",
      INSTRUCTOR_FIRST_NAME: "Korrine Lyle",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Allaga Jr.",
      INSTRUCTOR_FIRST_NAME: "Joel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sialana",
      INSTRUCTOR_FIRST_NAME: "Janna Gabrielle",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tocao",
      INSTRUCTOR_FIRST_NAME: "Vanessa Joy",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Camposano",
      INSTRUCTOR_FIRST_NAME: "Brisbane",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "John Alvin",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "QUINAGON_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "RAMON B. III",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ongchangco",
      INSTRUCTOR_FIRST_NAME: "Gabrielle Bea",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Viola",
      INSTRUCTOR_FIRST_NAME: "Giane Kate",
      COURSE_NAME: "Highway and Railroad Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Laguiab",
      INSTRUCTOR_FIRST_NAME: "Mohamad Ysah",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pongol",
      INSTRUCTOR_FIRST_NAME: "Alessandra Mari",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Celo",
      INSTRUCTOR_FIRST_NAME: "Cyril Gerlad S",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Raymund Raj",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galupar",
      INSTRUCTOR_FIRST_NAME: "Vince Nauriss",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jumao-As",
      INSTRUCTOR_FIRST_NAME: "Rovine Sarah Nichole",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masion",
      INSTRUCTOR_FIRST_NAME: "Thryzza Mae",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vinagrera",
      INSTRUCTOR_FIRST_NAME: "Azenith",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Layaoen",
      INSTRUCTOR_FIRST_NAME: "Francis Craig",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Najera",
      INSTRUCTOR_FIRST_NAME: "Maria Crisfel D",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andrion",
      INSTRUCTOR_FIRST_NAME: "Aileen Althea",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Divinagracia",
      INSTRUCTOR_FIRST_NAME: "Justine Kaye",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moreno",
      INSTRUCTOR_FIRST_NAME: "Nicole",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alvarez",
      INSTRUCTOR_FIRST_NAME: "Aellen Ruth",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barreto",
      INSTRUCTOR_FIRST_NAME: "Xavier Lance",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Clamor",
      INSTRUCTOR_FIRST_NAME: "Giancarlo Dominic P",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "CULANAG",
      INSTRUCTOR_FIRST_NAME: "ZANGIE LOU",
      COURSE_NAME: "Training Course (Ultra)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zaspa",
      INSTRUCTOR_FIRST_NAME: "Anfernee Gerald M.",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andrade",
      INSTRUCTOR_FIRST_NAME: "Ira Asaliah",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anino",
      INSTRUCTOR_FIRST_NAME: "Leonel Mari",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suico",
      INSTRUCTOR_FIRST_NAME: "Christian Lee",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañamo",
      INSTRUCTOR_FIRST_NAME: "Kyle Vincent",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Integration",
      INSTRUCTOR_FIRST_NAME: "SIS",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monton",
      INSTRUCTOR_FIRST_NAME: "Frances Angela",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lee",
      INSTRUCTOR_FIRST_NAME: "Julliane Pia Eliza",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzaga",
      INSTRUCTOR_FIRST_NAME: "Jade Brylle",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tepoot",
      INSTRUCTOR_FIRST_NAME: "Saturnino",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Ronald",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu",
      INSTRUCTOR_FIRST_NAME: "Anthony Marc",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cadiente",
      INSTRUCTOR_FIRST_NAME: "Francis Noah",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Martinez",
      INSTRUCTOR_FIRST_NAME: "Irene Nichole",
      COURSE_NAME: "The Entrepreneurial Mind",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serna",
      INSTRUCTOR_FIRST_NAME: "Joshua",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student38",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumapac",
      INSTRUCTOR_FIRST_NAME: "Venice Julienne",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bañas",
      INSTRUCTOR_FIRST_NAME: "Thea Jean",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sagaral_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alejado",
      INSTRUCTOR_FIRST_NAME: "Quimberly Zoe",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navaluna",
      INSTRUCTOR_FIRST_NAME: "Kyle Harvey C.",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salvatierra",
      INSTRUCTOR_FIRST_NAME: "Aeron James",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bucag",
      INSTRUCTOR_FIRST_NAME: "Brend Bross Brian B",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Consul",
      INSTRUCTOR_FIRST_NAME: "Rg Russell",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bitac",
      INSTRUCTOR_FIRST_NAME: "Shania Quisha",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vergara",
      INSTRUCTOR_FIRST_NAME: "Justin Nomel",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinco III",
      INSTRUCTOR_FIRST_NAME: "Felix",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "ELIPIO",
      INSTRUCTOR_FIRST_NAME: "THEA MARGARETTE R.",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almonte",
      INSTRUCTOR_FIRST_NAME: "Nathan Frederick Manuel",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pineda",
      INSTRUCTOR_FIRST_NAME: "Salve Milagros Nicole",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyta",
      INSTRUCTOR_FIRST_NAME: "Marielle Zam Angel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nomananap",
      INSTRUCTOR_FIRST_NAME: "Neil",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amil",
      INSTRUCTOR_FIRST_NAME: "Ahmed Ramsan",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Selina",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navarro",
      INSTRUCTOR_FIRST_NAME: "Angel Aby",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tanawan",
      INSTRUCTOR_FIRST_NAME: "Divine Kenyth",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Medina",
      INSTRUCTOR_FIRST_NAME: "Mc John Irvin C",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Melanie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Javines",
      INSTRUCTOR_FIRST_NAME: "Kienth Justine",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Christian Joshua",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magpantay",
      INSTRUCTOR_FIRST_NAME: "Bianca",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quiñonez",
      INSTRUCTOR_FIRST_NAME: "Kate Jusmin L",
      COURSE_NAME: "English 7",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orillan",
      INSTRUCTOR_FIRST_NAME: "Khloe",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tugonon",
      INSTRUCTOR_FIRST_NAME: "Rolf Cred M",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mariano",
      INSTRUCTOR_FIRST_NAME: "Allyzah",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abrantes",
      INSTRUCTOR_FIRST_NAME: "Genica Grace",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galupar",
      INSTRUCTOR_FIRST_NAME: "Kyle Adrian",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galiza",
      INSTRUCTOR_FIRST_NAME: "Syd Clarresse",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jadraque",
      INSTRUCTOR_FIRST_NAME: "Danika Marielle",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zablan",
      INSTRUCTOR_FIRST_NAME: "Denmark",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paulino",
      INSTRUCTOR_FIRST_NAME: "Franz Joseph",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Soriano",
      INSTRUCTOR_FIRST_NAME: "Francisco Juan A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibra",
      INSTRUCTOR_FIRST_NAME: "Allen Glem B",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carorocan",
      INSTRUCTOR_FIRST_NAME: "Joshua Rafael Lorenzo Q",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Baldonado",
      INSTRUCTOR_FIRST_NAME: "Nold X Tian L",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Kristine S",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Margate",
      INSTRUCTOR_FIRST_NAME: "Sky Karol Isaac",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mora",
      INSTRUCTOR_FIRST_NAME: "Art Ediphine",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salud",
      INSTRUCTOR_FIRST_NAME: "Marieanne Kate Zofia A",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacifico",
      INSTRUCTOR_FIRST_NAME: "Esteban Jose M",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "MARFIEL",
      INSTRUCTOR_FIRST_NAME: "CUTTLEA",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tinio",
      INSTRUCTOR_FIRST_NAME: "Tom Philip",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dailisan",
      INSTRUCTOR_FIRST_NAME: "Perseus Rex",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Braganza",
      INSTRUCTOR_FIRST_NAME: "Randolph Andres E",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Galsim",
      INSTRUCTOR_FIRST_NAME: "Gabriel Angelo",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balderama",
      INSTRUCTOR_FIRST_NAME: "Aaron Raven B",
      COURSE_NAME: "Operations Research 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Onipa",
      INSTRUCTOR_FIRST_NAME: "Stephen Jay",
      COURSE_NAME: "Architecture Orientation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Veras",
      INSTRUCTOR_FIRST_NAME: "Randail Sept Ampere",
      COURSE_NAME: "POWER SYSTEM PROTECTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Michael Keanu D",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Son",
      INSTRUCTOR_FIRST_NAME: "Ken L",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortega",
      INSTRUCTOR_FIRST_NAME: "Francine Mae",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santillan",
      INSTRUCTOR_FIRST_NAME: "Sebastian",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oliveros",
      INSTRUCTOR_FIRST_NAME: "Kenneth John",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Legaspi",
      INSTRUCTOR_FIRST_NAME: "Lorenzo Nikolai",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montecillo",
      INSTRUCTOR_FIRST_NAME: "Desirey Anne",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Raper",
      INSTRUCTOR_FIRST_NAME: "Julieza Jane Bella",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paras",
      INSTRUCTOR_FIRST_NAME: "Peter Gabriel",
      COURSE_NAME: "Thermodynamics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabucido",
      INSTRUCTOR_FIRST_NAME: "Ryz Clyd",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bernales",
      INSTRUCTOR_FIRST_NAME: "Ysha Gale",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "TAYABAN",
      INSTRUCTOR_FIRST_NAME: "JAY-R",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendez",
      INSTRUCTOR_FIRST_NAME: "Keesha",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padilla",
      INSTRUCTOR_FIRST_NAME: "Mc-Twins L.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacal",
      INSTRUCTOR_FIRST_NAME: "Mohammad Hakeem",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Sarah Yzabelle",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gregorio",
      INSTRUCTOR_FIRST_NAME: "Allu Joy A",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anghag",
      INSTRUCTOR_FIRST_NAME: "Richard",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Enriquez",
      INSTRUCTOR_FIRST_NAME: "Jason Charles",
      COURSE_NAME: "Automata and Language Theory",
    },
    {
      INSTRUCTOR_LAST_NAME: "Wong",
      INSTRUCTOR_FIRST_NAME: "David Paul M.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabido",
      INSTRUCTOR_FIRST_NAME: "Gabriella Mae",
      COURSE_NAME: "Mechanics of Deformable Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ordinaria",
      INSTRUCTOR_FIRST_NAME: "Kaye",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agbulos",
      INSTRUCTOR_FIRST_NAME: "Carshena",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magalona",
      INSTRUCTOR_FIRST_NAME: "Cedric Alfonso Niño",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vasquez",
      INSTRUCTOR_FIRST_NAME: "Jose Miguel B.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cañonio",
      INSTRUCTOR_FIRST_NAME: "Elijah Josh",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cantuba",
      INSTRUCTOR_FIRST_NAME: "Patrizia Hermione",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Matalam",
      INSTRUCTOR_FIRST_NAME: "Arhod Jones S",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fajardo",
      INSTRUCTOR_FIRST_NAME: "Jenny Cassandra",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Limcatson",
      INSTRUCTOR_FIRST_NAME: "Marbeth",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bermundo",
      INSTRUCTOR_FIRST_NAME: "John Wilbert",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mclaughlin",
      INSTRUCTOR_FIRST_NAME: "Joanna Paulette",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mitmug",
      INSTRUCTOR_FIRST_NAME: "Saajid Ali",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Armentano",
      INSTRUCTOR_FIRST_NAME: "Don Jason",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrer_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Hailey",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biong",
      INSTRUCTOR_FIRST_NAME: "John Phillip P.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibarra",
      INSTRUCTOR_FIRST_NAME: "Joseph Byran",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catotal",
      INSTRUCTOR_FIRST_NAME: "Mikhail Rachid",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramirez",
      INSTRUCTOR_FIRST_NAME: "Matthew Nathaniel",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Kyle William",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Plaza",
      INSTRUCTOR_FIRST_NAME: "Woodzer",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dumanon",
      INSTRUCTOR_FIRST_NAME: "Carl",
      COURSE_NAME: "Engineering Utilities 1: Basic Mechanical Engineering",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rebosura",
      INSTRUCTOR_FIRST_NAME: "Oswell Jairo A",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Esguerra",
      INSTRUCTOR_FIRST_NAME: "Charles Joseph",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillon",
      INSTRUCTOR_FIRST_NAME: "John Matthew",
      COURSE_NAME: "Game Design: Art Production (Non-Programming)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dazon",
      INSTRUCTOR_FIRST_NAME: "Luis Paolo",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barber",
      INSTRUCTOR_FIRST_NAME: "Justin Reynold",
      COURSE_NAME: "Operating Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gellangarin",
      INSTRUCTOR_FIRST_NAME: "Kenshee",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bucag",
      INSTRUCTOR_FIRST_NAME: "Raydyn Jove D",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tirol",
      INSTRUCTOR_FIRST_NAME: "Fil Archie T",
      COURSE_NAME: "Social Entrepreneurship",
    },
    {
      INSTRUCTOR_LAST_NAME: "PLASABAS_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ROGER JAMES P.",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student8",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sandoval",
      INSTRUCTOR_FIRST_NAME: "Mary Grace",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delgado",
      INSTRUCTOR_FIRST_NAME: "Clarisse Lucy Aleana",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montilla",
      INSTRUCTOR_FIRST_NAME: "Kyle Daven C",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salarde",
      INSTRUCTOR_FIRST_NAME: "Rexmond Kristoffer",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gutierrez",
      INSTRUCTOR_FIRST_NAME: "Michelle",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Noble",
      INSTRUCTOR_FIRST_NAME: "Ken Therese",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Socorro",
      INSTRUCTOR_FIRST_NAME: "Vynce Dite D",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Querequincia",
      INSTRUCTOR_FIRST_NAME: "Mark II",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labor",
      INSTRUCTOR_FIRST_NAME: "Denise",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ordanza",
      INSTRUCTOR_FIRST_NAME: "Dioandre S",
      COURSE_NAME: "PHYSIOLOGICAL PSYCHOLOGY",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Julia Patricia",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabaling",
      INSTRUCTOR_FIRST_NAME: "Charlene Kaye",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacus",
      INSTRUCTOR_FIRST_NAME: "Vianney C",
      COURSE_NAME: "Chemistry for Engineers - A191",
    },
    {
      INSTRUCTOR_LAST_NAME: "Castillo",
      INSTRUCTOR_FIRST_NAME: "Alyssa Mae Katherine",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rasheed",
      INSTRUCTOR_FIRST_NAME: "Sittie Shyllee",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amorado",
      INSTRUCTOR_FIRST_NAME: "Paulo Miguel",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tinamesan",
      INSTRUCTOR_FIRST_NAME: "Kc Jean",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Rochelle Faye",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alconcel",
      INSTRUCTOR_FIRST_NAME: "Athan Paul",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suelto",
      INSTRUCTOR_FIRST_NAME: "Paolo Miguel",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gecale",
      INSTRUCTOR_FIRST_NAME: "Lyandrew G",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dante",
      INSTRUCTOR_FIRST_NAME: "Blete Mae",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estillore",
      INSTRUCTOR_FIRST_NAME: "Michael Dave",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parreño",
      INSTRUCTOR_FIRST_NAME: "Mill Fredd",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Basillote",
      INSTRUCTOR_FIRST_NAME: "Rexie Faith",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moreno",
      INSTRUCTOR_FIRST_NAME: "Leila Nichole S.",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suarez",
      INSTRUCTOR_FIRST_NAME: "Mondel Ben E",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Florin",
      INSTRUCTOR_FIRST_NAME: "Dave Dranzel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Watanabe",
      INSTRUCTOR_FIRST_NAME: "Ali Bin Irshad L",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ke",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Desierto",
      INSTRUCTOR_FIRST_NAME: "Froy Andrie",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marites_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Tabanao",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "CALAMBA",
      INSTRUCTOR_FIRST_NAME: "MICHAEL",
      COURSE_NAME: "English 10",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gustilo",
      INSTRUCTOR_FIRST_NAME: "Suie",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Basio",
      INSTRUCTOR_FIRST_NAME: "Keith F",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rodriquez Jr._PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Rodrigo",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Borja",
      INSTRUCTOR_FIRST_NAME: "Erinne Heather",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Talimongan",
      INSTRUCTOR_FIRST_NAME: "Dianne",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santiago",
      INSTRUCTOR_FIRST_NAME: "Lance Aeron",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Herrera",
      INSTRUCTOR_FIRST_NAME: "John Michael C",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacalos",
      INSTRUCTOR_FIRST_NAME: "Mary Jane",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siloterio_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Philip Centene",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Requillo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Emmy Grace",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sayud",
      INSTRUCTOR_FIRST_NAME: "Faye Louise D",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Provido",
      INSTRUCTOR_FIRST_NAME: "Jemima Ruth",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zaballero",
      INSTRUCTOR_FIRST_NAME: "Paula Irene",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Denila",
      INSTRUCTOR_FIRST_NAME: "Josch Gabryle",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Macas",
      INSTRUCTOR_FIRST_NAME: "Angelica",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cordova",
      INSTRUCTOR_FIRST_NAME: "Castor Ray",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramon",
      INSTRUCTOR_FIRST_NAME: "Jade Nicole Marie",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dacula",
      INSTRUCTOR_FIRST_NAME: "Sharifa Firdausa",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inocente",
      INSTRUCTOR_FIRST_NAME: "John Marcus",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monfort",
      INSTRUCTOR_FIRST_NAME: "Pascual Jason Jr. M.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fajardo",
      INSTRUCTOR_FIRST_NAME: "Lixa Mae",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cadungog",
      INSTRUCTOR_FIRST_NAME: "Edison Adriel",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alberca",
      INSTRUCTOR_FIRST_NAME: "Adriel Joshua",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madrid",
      INSTRUCTOR_FIRST_NAME: "Pamela Mae",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ibrahim",
      INSTRUCTOR_FIRST_NAME: "Sittie Rayza",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gallardo",
      INSTRUCTOR_FIRST_NAME: "Armani Rydell",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilapil",
      INSTRUCTOR_FIRST_NAME: "Edgar Jude V",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Feril",
      INSTRUCTOR_FIRST_NAME: "Miguel Ryan",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Labasantos",
      INSTRUCTOR_FIRST_NAME: "Revie Jan",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sucayan",
      INSTRUCTOR_FIRST_NAME: "Jon Rey",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Florentino",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Wryl",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garay",
      INSTRUCTOR_FIRST_NAME: "Kiefer Niño",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Serrano",
      INSTRUCTOR_FIRST_NAME: "Emmanuel Miguel Von",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "LAGUNDAY",
      INSTRUCTOR_FIRST_NAME: "ALBERT",
      COURSE_NAME: "Statics for Rigid Bodies - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benadera",
      INSTRUCTOR_FIRST_NAME: "Joseph Andrei",
      COURSE_NAME: "English for Academic and Professional Purposes - Summer",
    },
    {
      INSTRUCTOR_LAST_NAME: "RALLA",
      INSTRUCTOR_FIRST_NAME: "PATRICK JAYSON",
      COURSE_NAME: "Training Course (Ultra)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hapitan",
      INSTRUCTOR_FIRST_NAME: "Clarice Sahara",
      COURSE_NAME:
        "Building Technology 5: Alternative Building Construction Systems (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Santos",
      INSTRUCTOR_FIRST_NAME: "Ruvic",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Puso",
      INSTRUCTOR_FIRST_NAME: "Hannah",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Utod",
      INSTRUCTOR_FIRST_NAME: "Carlos Jordan",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Orlanes",
      INSTRUCTOR_FIRST_NAME: "Kaye R",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Usop",
      INSTRUCTOR_FIRST_NAME: "Yana",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chang",
      INSTRUCTOR_FIRST_NAME: "Cian Alserg Z",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magan",
      INSTRUCTOR_FIRST_NAME: "Noel Jansil",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Donaldo",
      INSTRUCTOR_FIRST_NAME: "Dence Son A",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "GUELOS_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "FRENCH IAN",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dahlgren",
      INSTRUCTOR_FIRST_NAME: "Niño Erik",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madayag",
      INSTRUCTOR_FIRST_NAME: "Lorraine Faye",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "ALDABA_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "LINDY PAUL S.",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caberos",
      INSTRUCTOR_FIRST_NAME: "Christian Jay",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quintua",
      INSTRUCTOR_FIRST_NAME: "Randy Kurt",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hadji Usop",
      INSTRUCTOR_FIRST_NAME: "Al-fasheer",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuares",
      INSTRUCTOR_FIRST_NAME: "Ches Joshua",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuenca",
      INSTRUCTOR_FIRST_NAME: "Khent Heinrich",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moreno",
      INSTRUCTOR_FIRST_NAME: "Psalm Angel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mariano",
      INSTRUCTOR_FIRST_NAME: "Lieanne",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumen",
      INSTRUCTOR_FIRST_NAME: "John Rey",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Castro",
      INSTRUCTOR_FIRST_NAME: "Justin Kyle",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabroquez",
      INSTRUCTOR_FIRST_NAME: "Benz Bernadette",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopena",
      INSTRUCTOR_FIRST_NAME: "Kurt Vincent",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sobrabas",
      INSTRUCTOR_FIRST_NAME: "Luke Jervis",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hauac",
      INSTRUCTOR_FIRST_NAME: "Derek Antonio",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "LONGAKIT_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JERA",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obenza",
      INSTRUCTOR_FIRST_NAME: "Jeremiah",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabilogan",
      INSTRUCTOR_FIRST_NAME: "Gwyneth",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brion",
      INSTRUCTOR_FIRST_NAME: "Dianne Uriel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Regis",
      INSTRUCTOR_FIRST_NAME: "Jose Sebastian",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gingatan",
      INSTRUCTOR_FIRST_NAME: "Alyanna T",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Adimoha",
      INSTRUCTOR_FIRST_NAME: "Chinyere",
      COURSE_NAME:
        "Computer Applications for MEchanical Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Mary Doniz",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valguna",
      INSTRUCTOR_FIRST_NAME: "Emmanuelle Faith",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gio",
      INSTRUCTOR_FIRST_NAME: "Rhon Jasper",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ko",
      INSTRUCTOR_FIRST_NAME: "Kenn William",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Vermont",
      INSTRUCTOR_FIRST_NAME: "Rover C",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jimeno",
      INSTRUCTOR_FIRST_NAME: "Angela Gabrielle",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabian",
      INSTRUCTOR_FIRST_NAME: "Brein Joseph",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Markus",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elula",
      INSTRUCTOR_FIRST_NAME: "Christian John",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amatorio",
      INSTRUCTOR_FIRST_NAME: "Arnie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jarabe",
      INSTRUCTOR_FIRST_NAME: "Marc Luis",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cifra",
      INSTRUCTOR_FIRST_NAME: "Joshua Emmanuel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saavedra_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Gerald",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ersan",
      INSTRUCTOR_FIRST_NAME: "Gefer Ian",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "BERSAMIN_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "RONETTE",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lingaya_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Arjan",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gambong",
      INSTRUCTOR_FIRST_NAME: "Carl Eugene",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alcazar",
      INSTRUCTOR_FIRST_NAME: "Kyla Angela",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caasi",
      INSTRUCTOR_FIRST_NAME: "Abztract Fedi Hynze",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Druz Ali",
      INSTRUCTOR_FIRST_NAME: "Pendrus",
      COURSE_NAME: "Writing for Academic Studies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ajoc",
      INSTRUCTOR_FIRST_NAME: "Jeasanette Gayle P",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estinozo",
      INSTRUCTOR_FIRST_NAME: "Dennis Jose Christian",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Getizo",
      INSTRUCTOR_FIRST_NAME: "Athena Marie V",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "ANG",
      INSTRUCTOR_FIRST_NAME: "ANITA",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flares",
      INSTRUCTOR_FIRST_NAME: "Kensler Jay",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maghanoy",
      INSTRUCTOR_FIRST_NAME: "Mica Shaine",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ba-Aco",
      INSTRUCTOR_FIRST_NAME: "Mary Dymphna G",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elman",
      INSTRUCTOR_FIRST_NAME: "Jhonna Mae",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ortiz",
      INSTRUCTOR_FIRST_NAME: "Bryan Selwyn",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Nhezianna",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gador",
      INSTRUCTOR_FIRST_NAME: "Lexzar Gabriel",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dizon",
      INSTRUCTOR_FIRST_NAME: "Sean Godfrey",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paña_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Janyssa Mariae",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Muñoz",
      INSTRUCTOR_FIRST_NAME: "Paolo Antonio",
      COURSE_NAME: "CHEMISTRY FOR ENGINEERS",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Ocampo",
      INSTRUCTOR_FIRST_NAME: "Myffer",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Leon",
      INSTRUCTOR_FIRST_NAME: "Mikaela Andrea",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Brillantes",
      INSTRUCTOR_FIRST_NAME: "Yvonne Irene",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Novo",
      INSTRUCTOR_FIRST_NAME: "Mark Noah C",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pahamotang",
      INSTRUCTOR_FIRST_NAME: "Trisha Mae",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabingo",
      INSTRUCTOR_FIRST_NAME: "Kiana Marie",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Faigal",
      INSTRUCTOR_FIRST_NAME: "Jeanette Karen",
      COURSE_NAME: "Mathematics in The Modern World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Padriquela",
      INSTRUCTOR_FIRST_NAME: "Clent Rowell",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Latagan",
      INSTRUCTOR_FIRST_NAME: "Fritz Gerald",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chua",
      INSTRUCTOR_FIRST_NAME: "Jan Remuel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palma",
      INSTRUCTOR_FIRST_NAME: "Louver John",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alfonso",
      INSTRUCTOR_FIRST_NAME: "Patricia Mae",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lazaro",
      INSTRUCTOR_FIRST_NAME: "Jef Armand",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Masamayor",
      INSTRUCTOR_FIRST_NAME: "Gabriel Kreighton",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Badal",
      INSTRUCTOR_FIRST_NAME: "Bai Yashleiyah Hope",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bargamento",
      INSTRUCTOR_FIRST_NAME: "Matthew Ray",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quinagon",
      INSTRUCTOR_FIRST_NAME: "Ramon Russell",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Reyes",
      INSTRUCTOR_FIRST_NAME: "Kylene S",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bacaling",
      INSTRUCTOR_FIRST_NAME: "Andre Miguel",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Go",
      INSTRUCTOR_FIRST_NAME: "Peter Kim",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paquit",
      INSTRUCTOR_FIRST_NAME: "Jovanna Marie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suhian",
      INSTRUCTOR_FIRST_NAME: "Princess Rachel May",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ramos",
      INSTRUCTOR_FIRST_NAME: "James Benedict",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chio",
      INSTRUCTOR_FIRST_NAME: "Jameel",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maraguinot",
      INSTRUCTOR_FIRST_NAME: "Jakob Hans",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Banluta",
      INSTRUCTOR_FIRST_NAME: "Eloisa Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Demeterio",
      INSTRUCTOR_FIRST_NAME: "Lexie Keith",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "YPARRAGUIRRE_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "FLORA MAE C.",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mustapha",
      INSTRUCTOR_FIRST_NAME: "Ferdauza Jane",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nitor",
      INSTRUCTOR_FIRST_NAME: "Justin",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Saycon",
      INSTRUCTOR_FIRST_NAME: "Mark Anthony",
      COURSE_NAME: "Computer-Aided Calculations (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Demegillo",
      INSTRUCTOR_FIRST_NAME: "Antoinette Margaux",
      COURSE_NAME: "HyFlex Learning Workshop",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampoloquio",
      INSTRUCTOR_FIRST_NAME: "Zarah Marie",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tom",
      INSTRUCTOR_FIRST_NAME: "Ausmon Cyrus I.",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "de Castro",
      INSTRUCTOR_FIRST_NAME: "Dahlie Amor",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rabor",
      INSTRUCTOR_FIRST_NAME: "Juzel Kaye",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navarrete",
      INSTRUCTOR_FIRST_NAME: "Ezekiel James",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corciega",
      INSTRUCTOR_FIRST_NAME: "Hans",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rojas",
      INSTRUCTOR_FIRST_NAME: "Pauline Mae",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "REYES",
      INSTRUCTOR_FIRST_NAME: "JUAN MIGUEL",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Napal",
      INSTRUCTOR_FIRST_NAME: "Adrian Bens John",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Morata",
      INSTRUCTOR_FIRST_NAME: "Josh Alec",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pinugu",
      INSTRUCTOR_FIRST_NAME: "Jasmin Nadja",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Talamo",
      INSTRUCTOR_FIRST_NAME: "Ian Kenneth",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gloria",
      INSTRUCTOR_FIRST_NAME: "Brian Dwight",
      COURSE_NAME: "System Analysis and Design (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuizon",
      INSTRUCTOR_FIRST_NAME: "John Henry",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Matthew Lorenzo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fong",
      INSTRUCTOR_FIRST_NAME: "Franz Dominic",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manlapid",
      INSTRUCTOR_FIRST_NAME: "Kate Leanne",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kanazawa",
      INSTRUCTOR_FIRST_NAME: "Miko",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Zapanta",
      INSTRUCTOR_FIRST_NAME: "Lovely Heart",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
    {
      INSTRUCTOR_LAST_NAME: "LOYOLA",
      INSTRUCTOR_FIRST_NAME: "MARIA CRISELDA",
      COURSE_NAME: "Indigenous Creative Crafts",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilare",
      INSTRUCTOR_FIRST_NAME: "Cym Lester",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Marquez",
      INSTRUCTOR_FIRST_NAME: "Kyrie Alyssa",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Benigian",
      INSTRUCTOR_FIRST_NAME: "Renier",
      COURSE_NAME: "Elements and Principles of Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doromal",
      INSTRUCTOR_FIRST_NAME: "Kimberly",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanglay",
      INSTRUCTOR_FIRST_NAME: "John Paul",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boddie",
      INSTRUCTOR_FIRST_NAME: "Taipan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lucagbo",
      INSTRUCTOR_FIRST_NAME: "Alethea Mae",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bubutan",
      INSTRUCTOR_FIRST_NAME: "Keren Ruth",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Librado",
      INSTRUCTOR_FIRST_NAME: "Mary Grace",
      COURSE_NAME: "Numerical MEthods",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amatong",
      INSTRUCTOR_FIRST_NAME: "Bianca Nicole",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Lovelle Shayne",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tungal",
      INSTRUCTOR_FIRST_NAME: "Chealse",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "AMAYA",
      INSTRUCTOR_FIRST_NAME: "PETER BENJAMIN",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Delgado",
      INSTRUCTOR_FIRST_NAME: "Alex Jr. C",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boholst",
      INSTRUCTOR_FIRST_NAME: "Hannah Joy",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carcallas",
      INSTRUCTOR_FIRST_NAME: "Nicole Kaye",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ajias",
      INSTRUCTOR_FIRST_NAME: "Jasper",
      COURSE_NAME: "Discrete Structures 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perandos",
      INSTRUCTOR_FIRST_NAME: "Thea S",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Renoy",
      INSTRUCTOR_FIRST_NAME: "Dave John B",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "NI SISA",
      INSTRUCTOR_FIRST_NAME: "CRISPIN",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Buagas",
      INSTRUCTOR_FIRST_NAME: "Kristine",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ampig",
      INSTRUCTOR_FIRST_NAME: "Kenshee Aleu C",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maristela",
      INSTRUCTOR_FIRST_NAME: "Jan Vieva D",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mendones",
      INSTRUCTOR_FIRST_NAME: "Sherwin",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Usman",
      INSTRUCTOR_FIRST_NAME: "Mohammad",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pamitalan",
      INSTRUCTOR_FIRST_NAME: "Ray Gabriel C",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Perez",
      INSTRUCTOR_FIRST_NAME: "Darah Musikka",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Malubay",
      INSTRUCTOR_FIRST_NAME: "Ralph David",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caalaman",
      INSTRUCTOR_FIRST_NAME: "Yuan Rafael B",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cataraja",
      INSTRUCTOR_FIRST_NAME: "Lanz Leonardo",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Divino",
      INSTRUCTOR_FIRST_NAME: "John Derrick",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gartalia",
      INSTRUCTOR_FIRST_NAME: "Maria Kristina",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abadia",
      INSTRUCTOR_FIRST_NAME: "Marc Joshua",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Joshua Ryan G",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salado",
      INSTRUCTOR_FIRST_NAME: "Audrey Thea",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dela Cruz",
      INSTRUCTOR_FIRST_NAME: "Mary Celine",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Murray",
      INSTRUCTOR_FIRST_NAME: "Irene Alexandra",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fabiaña",
      INSTRUCTOR_FIRST_NAME: "Jose Miguel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "account",
      INSTRUCTOR_FIRST_NAME: "student2",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Joshua Charlzon M",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abueva",
      INSTRUCTOR_FIRST_NAME: "Adonis",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Miguel",
      INSTRUCTOR_FIRST_NAME: "Joshua Vincent",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lavalle",
      INSTRUCTOR_FIRST_NAME: "Rico",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Glase",
      INSTRUCTOR_FIRST_NAME: "Krystal Claire",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Parreñas",
      INSTRUCTOR_FIRST_NAME: "Maxinne Beatrice M.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinsuat",
      INSTRUCTOR_FIRST_NAME: "Datu Rommel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Kenneth P",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sinaking",
      INSTRUCTOR_FIRST_NAME: "Lloyd",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lu_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Joses Gabriel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Clark Justin T",
      COURSE_NAME: "FUNDAMENTALS IN FILM AND VIDEO PRODUCTION",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuntapay",
      INSTRUCTOR_FIRST_NAME: "Jhoanna Cane",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monteverde",
      INSTRUCTOR_FIRST_NAME: "Tomas",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Manalo",
      INSTRUCTOR_FIRST_NAME: "Mark John C",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alforque",
      INSTRUCTOR_FIRST_NAME: "Trisha Shaila",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Jamito",
      INSTRUCTOR_FIRST_NAME: "Marienne Aldyanna",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bulawan",
      INSTRUCTOR_FIRST_NAME: "Kirk Louise",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Allaga Jr._PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Joel",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang-ug",
      INSTRUCTOR_FIRST_NAME: "Pete Andre",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Crieta",
      INSTRUCTOR_FIRST_NAME: "Benoa Rogue",
      COURSE_NAME: "IT Infrastucture and Network Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Javaid",
      INSTRUCTOR_FIRST_NAME: "Nona Mae",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Caalim",
      INSTRUCTOR_FIRST_NAME: "Marc Aaron A.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aplasca",
      INSTRUCTOR_FIRST_NAME: "Kyzha Shanley",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asentista",
      INSTRUCTOR_FIRST_NAME: "Brian Alfie",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sundungan",
      INSTRUCTOR_FIRST_NAME: "Norjen Hannah O",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Almacin Jr.",
      INSTRUCTOR_FIRST_NAME: "Dennis",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alcantara",
      INSTRUCTOR_FIRST_NAME: "Lance Gabriel",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Te",
      INSTRUCTOR_FIRST_NAME: "Marie Christiene",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "LIM",
      INSTRUCTOR_FIRST_NAME: "VICTOR KIM",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Anghag",
      INSTRUCTOR_FIRST_NAME: "Lanz Laurence",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gomez",
      INSTRUCTOR_FIRST_NAME: "Maria Athena",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mato",
      INSTRUCTOR_FIRST_NAME: "Via Almira",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Obero",
      INSTRUCTOR_FIRST_NAME: "Ameia Kyle",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Angeles",
      INSTRUCTOR_FIRST_NAME: "April Dianne",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Andales",
      INSTRUCTOR_FIRST_NAME: "Jade Bernard C",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suelto",
      INSTRUCTOR_FIRST_NAME: "Leeam Elijah",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "CENTENO",
      INSTRUCTOR_FIRST_NAME: "RAFFY",
      COURSE_NAME: "Statics for Rigid Bodies - Module 1 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Rhealene Shane",
      COURSE_NAME: "Business Ventures in Multimedia",
    },
    {
      INSTRUCTOR_LAST_NAME: "MENDOZA",
      INSTRUCTOR_FIRST_NAME: "MARIA ALETH S.",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lapined",
      INSTRUCTOR_FIRST_NAME: "Austin Felart",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dimalanta",
      INSTRUCTOR_FIRST_NAME: "Sean Allen Edward",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Estomo",
      INSTRUCTOR_FIRST_NAME: "Charles Clarence Dominic",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sabio",
      INSTRUCTOR_FIRST_NAME: "Justyn Deandre",
      COURSE_NAME: "College Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lariba",
      INSTRUCTOR_FIRST_NAME: "Lou Marianne P.",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barbarona",
      INSTRUCTOR_FIRST_NAME: "John Jeric",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lavalle",
      INSTRUCTOR_FIRST_NAME: "Carl Japheth",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bisquera",
      INSTRUCTOR_FIRST_NAME: "Franco Nicolo P",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Diaz",
      INSTRUCTOR_FIRST_NAME: "Mykalyn",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sevilla",
      INSTRUCTOR_FIRST_NAME: "Alcid Rae",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Carbo",
      INSTRUCTOR_FIRST_NAME: "Marc Angelo",
      COURSE_NAME: "Innovation Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alitao",
      INSTRUCTOR_FIRST_NAME: "Charlene Rose",
      COURSE_NAME: "Human Computer Interaction",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quitalig",
      INSTRUCTOR_FIRST_NAME: "Roland",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albinda",
      INSTRUCTOR_FIRST_NAME: "James Albert",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Margarse",
      INSTRUCTOR_FIRST_NAME: "Kristine Jane",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Aliyah Cristina A",
      COURSE_NAME: "Information Systems",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sañano",
      INSTRUCTOR_FIRST_NAME: "Miguel",
      COURSE_NAME: "Thesis/Capstone Project 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Albarillo",
      INSTRUCTOR_FIRST_NAME: "Francis Kyle",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Seng",
      INSTRUCTOR_FIRST_NAME: "Leanne",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Intia",
      INSTRUCTOR_FIRST_NAME: "Jake",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ewag",
      INSTRUCTOR_FIRST_NAME: "Jerome Keefe",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amistad",
      INSTRUCTOR_FIRST_NAME: "Aldeya",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Magdamo",
      INSTRUCTOR_FIRST_NAME: "Joshua Aldrich",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Leo Neil",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabania",
      INSTRUCTOR_FIRST_NAME: "Anikka Francine",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Constantino",
      INSTRUCTOR_FIRST_NAME: "Clear Denn",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yandug_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jenalyn Shigella",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "CASAS",
      INSTRUCTOR_FIRST_NAME: "JOAN",
      COURSE_NAME: "Statics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ang",
      INSTRUCTOR_FIRST_NAME: "Brigette Rose",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pilapil",
      INSTRUCTOR_FIRST_NAME: "Gian Rafael M",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Robin",
      INSTRUCTOR_FIRST_NAME: "Bezalel John M",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Austero_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Clint",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "MAGLOYUAN_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "NEIL P.",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "Azura",
      INSTRUCTOR_FIRST_NAME: "Jean Pauline",
      COURSE_NAME: "Philippine Literature",
    },
    {
      INSTRUCTOR_LAST_NAME: "SEGURITAN",
      INSTRUCTOR_FIRST_NAME: "BEN JAY-ME G.",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yandug",
      INSTRUCTOR_FIRST_NAME: "Jenalyn Shigella",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paredes",
      INSTRUCTOR_FIRST_NAME: "James Brendan",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Comayas",
      INSTRUCTOR_FIRST_NAME: "Ej Andreau",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Oclaret_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Bernard Jay",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maestrecampo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Dodjie",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lo",
      INSTRUCTOR_FIRST_NAME: "Robin Nicholas",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aquino",
      INSTRUCTOR_FIRST_NAME: "Angelina Amadea",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yap",
      INSTRUCTOR_FIRST_NAME: "Andrei Joaquin",
      COURSE_NAME: "Algorithms and Complexity",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cuyos",
      INSTRUCTOR_FIRST_NAME: "Peter Paul C",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Polinar",
      INSTRUCTOR_FIRST_NAME: "Rijane Thea",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Abpet",
      INSTRUCTOR_FIRST_NAME: "Abdul Adzis",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dublico",
      INSTRUCTOR_FIRST_NAME: "Nicole Angela",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student39",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Francisco",
      INSTRUCTOR_FIRST_NAME: "Danica Shein F",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Los Reyes",
      INSTRUCTOR_FIRST_NAME: "Fercy Ann",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dagohoy",
      INSTRUCTOR_FIRST_NAME: "Margarita Simone Barbara S",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Javier",
      INSTRUCTOR_FIRST_NAME: "Abe Jaylil",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gorre",
      INSTRUCTOR_FIRST_NAME: "Kenneth Jeams",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Goc-Ong",
      INSTRUCTOR_FIRST_NAME: "Josh Marco",
      COURSE_NAME: "Computer Programming Concepts 2 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Montebon",
      INSTRUCTOR_FIRST_NAME: "Jeremy Carl",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Boiser",
      INSTRUCTOR_FIRST_NAME: "Princess Jonna",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nepomuceno",
      INSTRUCTOR_FIRST_NAME: "Gabrielle Andrea",
      COURSE_NAME: "Microeconomics Theory and Practice",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Guzman",
      INSTRUCTOR_FIRST_NAME: "Shania Mae",
      COURSE_NAME: "Application Development and Emerging Technologies (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Garcia",
      INSTRUCTOR_FIRST_NAME: "Niña Pauleen",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valencia",
      INSTRUCTOR_FIRST_NAME: "Vianca Frances",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Tricia",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dalumpines",
      INSTRUCTOR_FIRST_NAME: "Mel",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nengasca",
      INSTRUCTOR_FIRST_NAME: "Jayson",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "De Guzman",
      INSTRUCTOR_FIRST_NAME: "Sheena Kyle",
      COURSE_NAME: "Risk Analysis and Management",
    },
    {
      INSTRUCTOR_LAST_NAME: "Besinga",
      INSTRUCTOR_FIRST_NAME: "Jason Nathaniel L",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pangan",
      INSTRUCTOR_FIRST_NAME: "Camila Faith",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suico",
      INSTRUCTOR_FIRST_NAME: "Gabriel Angelo",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Ray Dionisio",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nogodula",
      INSTRUCTOR_FIRST_NAME: "J-Vie",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gavino",
      INSTRUCTOR_FIRST_NAME: "Katherine",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Asuncion Jr.",
      INSTRUCTOR_FIRST_NAME: "Rodan",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mata",
      INSTRUCTOR_FIRST_NAME: "Charles John Brynt",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balio",
      INSTRUCTOR_FIRST_NAME: "Alliah Angel",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Patalinghug",
      INSTRUCTOR_FIRST_NAME: "Miguel",
      COURSE_NAME: "Engineering Drawing 1(Module 1)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Angadan",
      INSTRUCTOR_FIRST_NAME: "Jephunneh",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valentin",
      INSTRUCTOR_FIRST_NAME: "Jhon Louis G",
      COURSE_NAME: "Internal Review and Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Kamada",
      INSTRUCTOR_FIRST_NAME: "Tanjiro",
      COURSE_NAME: "Science, Technology, and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barondon",
      INSTRUCTOR_FIRST_NAME: "Abdul Muid",
      COURSE_NAME: "Receptive Communication Skills",
    },
    {
      INSTRUCTOR_LAST_NAME: "Felicitas",
      INSTRUCTOR_FIRST_NAME: "Elan Gabriel",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Burinaga",
      INSTRUCTOR_FIRST_NAME: "Jenelyn",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quizo",
      INSTRUCTOR_FIRST_NAME: "Nicole Samantha",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inoc",
      INSTRUCTOR_FIRST_NAME: "Dale Derick",
      COURSE_NAME: "Life Coaching Series 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Segundo",
      INSTRUCTOR_FIRST_NAME: "Jeneth",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Mante",
      INSTRUCTOR_FIRST_NAME: "Sarah Jane",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sonan",
      INSTRUCTOR_FIRST_NAME: "Dann Gil",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Paduran",
      INSTRUCTOR_FIRST_NAME: "Zaira May Sabthia",
      COURSE_NAME: "Mathematics for Engineers (Module 2)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Navarro",
      INSTRUCTOR_FIRST_NAME: "Jay Bryan",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uriarte",
      INSTRUCTOR_FIRST_NAME: "Jomarie",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dolino",
      INSTRUCTOR_FIRST_NAME: "Irish Jayne Marie",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Coching",
      INSTRUCTOR_FIRST_NAME: "Johann",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sebio",
      INSTRUCTOR_FIRST_NAME: "Ramon P",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lopez",
      INSTRUCTOR_FIRST_NAME: "Nicolo Alessandro Luis",
      COURSE_NAME: "Philippine Indigenous Communities",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arellano",
      INSTRUCTOR_FIRST_NAME: "Mark Anthony",
      COURSE_NAME: "Engineering Economy",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dawn",
      INSTRUCTOR_FIRST_NAME: "Tricia",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdez",
      INSTRUCTOR_FIRST_NAME: "Justin Merck",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ocampo",
      INSTRUCTOR_FIRST_NAME: "Paolo Gabriel",
      COURSE_NAME: "Movement Enhancement",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gasang",
      INSTRUCTOR_FIRST_NAME: "Lana Andrea",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Eleazar_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Elisa",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Barillo",
      INSTRUCTOR_FIRST_NAME: "Jersey",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sanidad",
      INSTRUCTOR_FIRST_NAME: "Alfred Matthew G",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espanto",
      INSTRUCTOR_FIRST_NAME: "Ariel Benjamine",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gerodiaz",
      INSTRUCTOR_FIRST_NAME: "Christina Grace",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Colina",
      INSTRUCTOR_FIRST_NAME: "Drazen Andre",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pacis",
      INSTRUCTOR_FIRST_NAME: "Michael",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Revamonte",
      INSTRUCTOR_FIRST_NAME: "Kurt Kyle",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzales",
      INSTRUCTOR_FIRST_NAME: "Zarina Danielle S",
      COURSE_NAME: "Advanced Engineering Mathematics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Palma",
      INSTRUCTOR_FIRST_NAME: "Brylle Andrew",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lucena",
      INSTRUCTOR_FIRST_NAME: "Raul Keanu A",
      COURSE_NAME: "Differential and Integral Calculus",
    },
    {
      INSTRUCTOR_LAST_NAME: "Maiorana",
      INSTRUCTOR_FIRST_NAME: "Vince Anthony",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Inato",
      INSTRUCTOR_FIRST_NAME: "Jaden William",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "STUDENT",
      INSTRUCTOR_FIRST_NAME: "ALEKS",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lemen",
      INSTRUCTOR_FIRST_NAME: "Marcelo Alberto",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "MANUEL",
      INSTRUCTOR_FIRST_NAME: "RUSTRIA",
      COURSE_NAME: "Gender and Society",
    },
    {
      INSTRUCTOR_LAST_NAME: "Moraga",
      INSTRUCTOR_FIRST_NAME: "Keith Gary",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Balon",
      INSTRUCTOR_FIRST_NAME: "Kezia Gwyneth",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lagmay",
      INSTRUCTOR_FIRST_NAME: "Charlotte Ville",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Burias",
      INSTRUCTOR_FIRST_NAME: "Haifa Mulan",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yhuan",
      INSTRUCTOR_FIRST_NAME: "John Carlo",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Quizo",
      INSTRUCTOR_FIRST_NAME: "Nicole Samantha S.",
      COURSE_NAME: "Chemistry for Engineers - Module 3 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alano_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Jaimie Lynn",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Doydoy",
      INSTRUCTOR_FIRST_NAME: "Nikki Trixia",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "DEL CORRO_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "JOSEF MIKA-EL",
      COURSE_NAME: "Programming Logic and Design (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Provido",
      INSTRUCTOR_FIRST_NAME: "Leah Mae",
      COURSE_NAME: "The Contemporary World",
    },
    {
      INSTRUCTOR_LAST_NAME: "Apellanes",
      INSTRUCTOR_FIRST_NAME: "Adrian Lloyd",
      COURSE_NAME: "Engineering Calculus 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Ferrazzini",
      INSTRUCTOR_FIRST_NAME: "Alexander Manuel Dean",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Chiong",
      INSTRUCTOR_FIRST_NAME: "Adrian Blair",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aclera",
      INSTRUCTOR_FIRST_NAME: "Cyril",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Corona",
      INSTRUCTOR_FIRST_NAME: "Eclesiastes",
      COURSE_NAME:
        "Computer-Aided Design and Drafting for Architecture 1 (Paired)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Senato",
      INSTRUCTOR_FIRST_NAME: "Carmela Paula",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Arnilla",
      INSTRUCTOR_FIRST_NAME: "Jasper Marie",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Amil",
      INSTRUCTOR_FIRST_NAME: "Muhammad Jawad",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gonzaga",
      INSTRUCTOR_FIRST_NAME: "Stacey Andrew",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Dolor",
      INSTRUCTOR_FIRST_NAME: "Julianne Maureen",
      COURSE_NAME: "Purposive Communication",
    },
    {
      INSTRUCTOR_LAST_NAME: "Alcano",
      INSTRUCTOR_FIRST_NAME: "Leeren Joshua",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student32",
      INSTRUCTOR_FIRST_NAME: "Dummy",
      COURSE_NAME: "Business Law and Taxation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tan",
      INSTRUCTOR_FIRST_NAME: "Jeremy Stimson",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tabat",
      INSTRUCTOR_FIRST_NAME: "Rhena Winzel",
      COURSE_NAME: "Understanding The Self",
    },
    {
      INSTRUCTOR_LAST_NAME: "Elizan",
      INSTRUCTOR_FIRST_NAME: "Julius Caesar",
      COURSE_NAME: "Dynamics of Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valdevieso",
      INSTRUCTOR_FIRST_NAME: "Lyka Andrea",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Casas",
      INSTRUCTOR_FIRST_NAME: "Mark Danielle",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Espina",
      INSTRUCTOR_FIRST_NAME: "Anilou",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sarmiento",
      INSTRUCTOR_FIRST_NAME: "Roxanne",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rendon",
      INSTRUCTOR_FIRST_NAME: "Judy Jane",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Custodio",
      INSTRUCTOR_FIRST_NAME: "Luther",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Catubig",
      INSTRUCTOR_FIRST_NAME: "Christian Ley",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Rivera",
      INSTRUCTOR_FIRST_NAME: "Kamille April",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Yoshida",
      INSTRUCTOR_FIRST_NAME: "Kojiro",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Franco",
      INSTRUCTOR_FIRST_NAME: "Walros Joseph",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lupiba",
      INSTRUCTOR_FIRST_NAME: "Teofilo Q.",
      COURSE_NAME: "Facilities Planning and Design Principles",
    },
    {
      INSTRUCTOR_LAST_NAME: "Uy",
      INSTRUCTOR_FIRST_NAME: "Allen Ace",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sisi",
      INSTRUCTOR_FIRST_NAME: "Paola Jessica",
      COURSE_NAME: "IE Capstone Project 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sorbito",
      INSTRUCTOR_FIRST_NAME: "Philip Angelo",
      COURSE_NAME: "DIFFERENTIAL AND INTEGRAL CALCULUS",
    },
    {
      INSTRUCTOR_LAST_NAME: "Madjid",
      INSTRUCTOR_FIRST_NAME: "Denver Jay",
      COURSE_NAME: "Drawing 2 - Module 2 Completion",
    },
    {
      INSTRUCTOR_LAST_NAME: "Agata",
      INSTRUCTOR_FIRST_NAME: "Taichi Niño",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Flores",
      INSTRUCTOR_FIRST_NAME: "Vinz Daniel",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Suarez",
      INSTRUCTOR_FIRST_NAME: "Denise Marie A",
      COURSE_NAME: "The Life and Works of Jose Rizal",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fuego",
      INSTRUCTOR_FIRST_NAME: "Louis Celso",
      COURSE_NAME: "Fitness Exercises",
    },
    {
      INSTRUCTOR_LAST_NAME: "Natividad",
      INSTRUCTOR_FIRST_NAME: "James Dave",
      COURSE_NAME: "Practical Research 1 (Qualitative)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Biton",
      INSTRUCTOR_FIRST_NAME: "Patrick",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Recorte",
      INSTRUCTOR_FIRST_NAME: "Jayson",
      COURSE_NAME: "Art Appreciation",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lim",
      INSTRUCTOR_FIRST_NAME: "Francine Angelei",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Hao",
      INSTRUCTOR_FIRST_NAME: "Austin Kim",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pangan",
      INSTRUCTOR_FIRST_NAME: "Neal Alphonse",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gelbolingo",
      INSTRUCTOR_FIRST_NAME: "Jorgie Michaella",
      COURSE_NAME: "CSA Success Coaching",
    },
    {
      INSTRUCTOR_LAST_NAME: "Aguilar",
      INSTRUCTOR_FIRST_NAME: "Shannen",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bersamin",
      INSTRUCTOR_FIRST_NAME: "Charles Edryan",
      COURSE_NAME: "Ethics",
    },
    {
      INSTRUCTOR_LAST_NAME: "Siapno",
      INSTRUCTOR_FIRST_NAME: "Gabriel",
      COURSE_NAME: "Art Appreciation (Module 3)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Pamintuan",
      INSTRUCTOR_FIRST_NAME: "Kristopher Rey",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nengasca",
      INSTRUCTOR_FIRST_NAME: "Gabrielle Ma. Angelie",
      COURSE_NAME: "Physics for Engineers (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Sameon",
      INSTRUCTOR_FIRST_NAME: "Cy",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Escoza",
      INSTRUCTOR_FIRST_NAME: "Keenan",
      COURSE_NAME: "Physical Activity Towards Health and Fitness 1",
    },
    {
      INSTRUCTOR_LAST_NAME: "Teoxon",
      INSTRUCTOR_FIRST_NAME: "Paul Adrie",
      COURSE_NAME: "Physics for Engineers",
    },
    {
      INSTRUCTOR_LAST_NAME: "Trasmil",
      INSTRUCTOR_FIRST_NAME: "Aila Shean L",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tacsanan",
      INSTRUCTOR_FIRST_NAME: "Alma Rose",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Calo",
      INSTRUCTOR_FIRST_NAME: "Mar Jason",
      COURSE_NAME: "Engineering Data Analysis",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cabahug",
      INSTRUCTOR_FIRST_NAME: "Joshua Victor",
      COURSE_NAME: "3D MODELING",
    },
    {
      INSTRUCTOR_LAST_NAME: "Callo_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Ailene",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gambito",
      INSTRUCTOR_FIRST_NAME: "Samantha Nicole",
      COURSE_NAME: "Statics for Rigid Bodies",
    },
    {
      INSTRUCTOR_LAST_NAME: "Fernandez",
      INSTRUCTOR_FIRST_NAME: "Elizabeth",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Gabriel_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Kathleen",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Monteverde",
      INSTRUCTOR_FIRST_NAME: "Christian Ivan",
      COURSE_NAME: "Computer-Aided Drafting (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Valerie Ira_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "Balmoris",
      COURSE_NAME: "Logic and Critical Thinking",
    },
    {
      INSTRUCTOR_LAST_NAME: "Salgado",
      INSTRUCTOR_FIRST_NAME: "Erika Valerie",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "DIZON_PreviewUser",
      INSTRUCTOR_FIRST_NAME: "ENA MARIE O.",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Tizon",
      INSTRUCTOR_FIRST_NAME: "Ivan Gel",
      COURSE_NAME: "Engineering Calculus 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Nepomuceno",
      INSTRUCTOR_FIRST_NAME: "Joseph Vungest",
      COURSE_NAME: "Readings in Philippine History",
    },
    {
      INSTRUCTOR_LAST_NAME: "Cacar",
      INSTRUCTOR_FIRST_NAME: "Rulyn Marie",
      COURSE_NAME: "Life Coaching Series 2",
    },
    {
      INSTRUCTOR_LAST_NAME: "Najos",
      INSTRUCTOR_FIRST_NAME: "Ellyza",
      COURSE_NAME: "Life Coaching Series 3",
    },
    {
      INSTRUCTOR_LAST_NAME: "Student",
      INSTRUCTOR_FIRST_NAME: "Tom",
      COURSE_NAME: "History of Graphic Design",
    },
    {
      INSTRUCTOR_LAST_NAME: "Bautista",
      INSTRUCTOR_FIRST_NAME: "Louie Andrew",
      COURSE_NAME: "Numerical MEthods (Laboratory)",
    },
    {
      INSTRUCTOR_LAST_NAME: "Lumanas",
      INSTRUCTOR_FIRST_NAME: "Richwnwyn Lanz Manuel",
      COURSE_NAME: "Engineering Mathematics Exit Exam",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const filteredData = data.filter(
    (professor) =>
      professor.INSTRUCTOR_LAST_NAME.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professor.INSTRUCTOR_FIRST_NAME.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const uniqueInstructors = Array.from(
    new Set(filteredData.map((professor) => professor.INSTRUCTOR_FIRST_NAME + professor.INSTRUCTOR_LAST_NAME))
  ).map((instructorName) => ({
    name: instructorName,
    courses: filteredData
      .filter(
        (professor) =>
          professor.INSTRUCTOR_FIRST_NAME + professor.INSTRUCTOR_LAST_NAME === instructorName
      )
      .map((professor) => professor.COURSE_NAME),
  }));

  const handleShowCourses = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleCloseDialog = () => {
    setSelectedInstructor(null);
  };

  return (
    <div>
      <h1>Professor Table</h1>
      <TextField
        label="Search for a professor"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Instructor Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uniqueInstructors.slice(0, 10).map((instructor, index) => (
              <TableRow key={index}>
                <TableCell>{instructor.name}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleShowCourses(instructor)}>
                    Show Courses
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={selectedInstructor !== null} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>{`Courses for ${selectedInstructor ? selectedInstructor.name : ''}`}</DialogTitle>
        <DialogContent>
          {selectedInstructor &&
            selectedInstructor.courses.map((course, index) => (
              <div key={index}>{course}</div>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfessorTable;
