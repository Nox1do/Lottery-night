const datos = [
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "IDAHO MIDDAY (IDH-MD)",
        "NOMBRE CORTO": "IDH-MD",
        "HORA RD": "4:59:00 PM",
        "HORA SISTEMA": "3:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "CALIFORNIA MIDDAY (CA-MD)",
        "NOMBRE CORTO": "CA-MD",
        "HORA RD": "5:00:00 PM",
        "HORA SISTEMA": "4:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "OREGON 1PM (OR-1PM)",
        "NOMBRE CORTO": "OR-1PM",
        "HORA RD": "5:00:00 PM",
        "HORA SISTEMA": "4:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ANGUILLA 5PM (ANG-5PM)",
        "NOMBRE CORTO": "ANG-5PM",
        "HORA RD": "5:00:00 PM",
        "HORA SISTEMA": "4:00:00 PM"
    },
    {
        "LOCALIDAD": "HONDURAS",
        "NOMBRE LARGO(NOMBRE CORTO)": "LA DIARIA 03PM (LD03)",
        "NOMBRE CORTO": "LD03",
        "HORA RD": "5:00:00 PM",
        "HORA SISTEMA": "4:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "LOTEDOM (LOTEDOM)",
        "NOMBRE CORTO": "LOTEDOM",
        "HORA RD": "5:55:00 PM",
        "HORA SISTEMA": "4:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ANGUILLA 6PM (ANGUILLA-6PM)",
        "NOMBRE CORTO": "ANGUILLA-6PM",
        "HORA RD": "6:00:00 PM",
        "HORA SISTEMA": "5:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP PRIPM-SUERTEPM (SP PRPM-SUPM)",
        "NOMBRE CORTO": "SP PRPM-SUPM",
        "HORA RD": "6:00:00 PM",
        "HORA SISTEMA": "5:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "LA SUERTE PM (SUERTE-PM)",
        "NOMBRE CORTO": "SUERTE-PM",
        "HORA RD": "6:00:00 PM",
        "HORA SISTEMA": "5:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP SUERTEPM-ANGUILLA6PM (SP SUERTPM-ANG6PM)",
        "NOMBRE CORTO": "SP SUERTPM-ANG6PM",
        "HORA RD": "6:00:00 PM",
        "HORA SISTEMA": "5:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP SUERTPM-KING PM (SP-STPM-KINGPM)",
        "NOMBRE CORTO": "SP-STPM-KINGPM",
        "HORA RD": "6:00:00 PM",
        "HORA SISTEMA": "5:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ANGUILLA 7PM (ANG-7PM)",
        "NOMBRE CORTO": "ANG-7PM",
        "HORA RD": "7:00:00 PM",
        "HORA SISTEMA": "6:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "KING LOTTERY PM (KING-PM)",
        "NOMBRE CORTO": "KING-PM",
        "HORA RD": "7:30:00 PM",
        "HORA SISTEMA": "6:30:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP KINGPM-PRIPM (SP-KLPM-PRIPM)",
        "NOMBRE CORTO": "SP-KLPM-PRIPM",
        "HORA RD": "7:30:00 PM",
        "HORA SISTEMA": "6:30:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP KINGPM-LOTEKA (SP KINGPM-LOTEKA)",
        "NOMBRE CORTO": "SP KINGPM-LOTEKA",
        "HORA RD": "7:30:00 PM",
        "HORA SISTEMA": "6:30:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "LOTEKA (LTK)",
        "NOMBRE CORTO": "LTK",
        "HORA RD": "7:55:00 PM",
        "HORA SISTEMA": "6:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP LTK-NYPM (LTK-NYPM)",
        "NOMBRE CORTO": "LTK-NYPM",
        "HORA RD": "7:55:00 PM",
        "HORA SISTEMA": "6:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP LOTEK-NAC (SP LK-NC)",
        "NOMBRE CORTO": "SP LK-NC",
        "HORA RD": "7:55:00 PM",
        "HORA SISTEMA": "6:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP LOTEK-QUIN (SP LK-QP)",
        "NOMBRE CORTO": "SP LK-QP",
        "HORA RD": "7:55:00 PM",
        "HORA SISTEMA": "6:55:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MAINE EVENING (ME-EVEN)",
        "NOMBRE CORTO": "ME-EVEN",
        "HORA RD": "7:55:00 PM",
        "HORA SISTEMA": "6:55:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NEW HAMPSHIRE PM (NH-PM)",
        "NOMBRE CORTO": "NH-PM",
        "HORA RD": "7:55:00 PM",
        "HORA SISTEMA": "6:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP LOTEKA-PRIPM (SP LOTEKA-PRIPM)",
        "NOMBRE CORTO": "SP LOTEKA-PRIPM",
        "HORA RD": "7:55:00 PM",
        "HORA SISTEMA": "6:55:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "GEORGIA EVENING (GE-EV)",
        "NOMBRE CORTO": "GE-EV",
        "HORA RD": "7:59:00 PM",
        "HORA SISTEMA": "6:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "GEORGIA EVENING MARIAGE PALE (GE-EV-MR)",
        "NOMBRE CORTO": "GE-EV-MR",
        "HORA RD": "7:59:00 PM",
        "HORA SISTEMA": "6:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "PENNSYLV PM (PA-PM)",
        "NOMBRE CORTO": "PA-PM",
        "HORA RD": "7:59:00 PM",
        "HORA SISTEMA": "6:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "PENNSYLV PM MARIAGE  (PA-PM-MR)",
        "NOMBRE CORTO": "PA-PM-MR",
        "HORA RD": "7:59:00 PM",
        "HORA SISTEMA": "6:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "RHODE ISLAND EVENING (RHOD-EVEN)",
        "NOMBRE CORTO": "RHOD-EVEN",
        "HORA RD": "7:59:00 PM",
        "HORA SISTEMA": "6:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SOUTH C EVENING (SC-EVENING)",
        "NOMBRE CORTO": "SC-EVENING",
        "HORA RD": "7:59:00 PM",
        "HORA SISTEMA": "6:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "PUERTO RICO PM (PR-PM)",
        "NOMBRE CORTO": "PR-PM",
        "HORA RD": "8:00:00 PM",
        "HORA SISTEMA": "7:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "TEXAS-EVENING (TX-EVEN)",
        "NOMBRE CORTO": "TX-EVEN",
        "HORA RD": "8:00:00 PM",
        "HORA SISTEMA": "7:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "OREGON 4PM (OR-4PM)",
        "NOMBRE CORTO": "OR-4PM",
        "HORA RD": "8:00:00 PM",
        "HORA SISTEMA": "7:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ANGUILLA 8PM (ANG-8PM)",
        "NOMBRE CORTO": "ANG-8PM",
        "HORA RD": "8:00:00 PM",
        "HORA SISTEMA": "7:00:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "LA PRIMERA NOCHE (LPM-PM)",
        "NOMBRE CORTO": "LPM-PM",
        "HORA RD": "8:00:00 PM",
        "HORA SISTEMA": "7:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "TENNESSEE EVENING (TN-EVEN)",
        "NOMBRE CORTO": "TN-EVEN",
        "HORA RD": "8:28:00 PM",
        "HORA SISTEMA": "7:28:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MICHIGAN NIGHT (MICH-NIGHT)",
        "NOMBRE CORTO": "MICH-NIGHT",
        "HORA RD": "8:29:00 PM",
        "HORA SISTEMA": "7:29:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "OHIO EVENING (OHIO-EVEN)",
        "NOMBRE CORTO": "OHIO-EVEN",
        "HORA RD": "8:29:00 PM",
        "HORA SISTEMA": "7:29:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "WASHINGTON D.C EVENING (DC-EVEN)",
        "NOMBRE CORTO": "DC-EVEN",
        "HORA RD": "8:50:00 PM",
        "HORA SISTEMA": "7:50:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "S.PALE NOCHE (SPN)",
        "NOMBRE CORTO": "SPN",
        "HORA RD": "8:50:00 PM",
        "HORA SISTEMA": "7:50:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP NYPM-NAC (SP NYPM-NC)",
        "NOMBRE CORTO": "SP NYPM-NC",
        "HORA RD": "8:50:00 PM",
        "HORA SISTEMA": "7:50:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NACIONAL (LTN)",
        "NOMBRE CORTO": "LTN",
        "HORA RD": "8:55:00 PM",
        "HORA SISTEMA": "7:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "QUINIELA PALE (QPL)",
        "NOMBRE CORTO": "QPL",
        "HORA RD": "8:55:00 PM",
        "HORA SISTEMA": "7:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP NYPM-QUIN (SP NYPM-QP)",
        "NOMBRE CORTO": "SP NYPM-QP",
        "HORA RD": "8:55:00 PM",
        "HORA SISTEMA": "7:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP QPALE-ANGUILLA9PM (SP QPALE-ANG9PM)",
        "NOMBRE CORTO": "SP QPALE-ANG9PM",
        "HORA RD": "8:55:00 PM",
        "HORA SISTEMA": "7:55:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP NAC-ANGUILLA9PM (SP NAC-ANG9PM)",
        "NOMBRE CORTO": "SP NAC-ANG9PM",
        "HORA RD": "8:55:00 PM",
        "HORA SISTEMA": "7:55:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MARYLAND PM (MD-PM)",
        "NOMBRE CORTO": "MD-PM",
        "HORA RD": "8:56:00 PM",
        "HORA SISTEMA": "7:56:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "DELAWARE PM (DE-PM)",
        "NOMBRE CORTO": "DE-PM",
        "HORA RD": "8:57:00 PM",
        "HORA SISTEMA": "7:57:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ARKANSAS EVENING (AR-EVEN)",
        "NOMBRE CORTO": "AR-EVEN",
        "HORA RD": "8:59:00 PM",
        "HORA SISTEMA": "7:59:00 PM"
    },
    {
        "LOCALIDAD": "DOMINICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ANGUILLA 9PM (ANGUILLA-9PM)",
        "NOMBRE CORTO": "ANGUILLA-9PM",
        "HORA RD": "9:00:00 PM",
        "HORA SISTEMA": "8:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MASS EV P3B (MA-EV-P3B)",
        "NOMBRE CORTO": "MA-EV-P3B",
        "HORA RD": "10:00:00 PM",
        "HORA SISTEMA": "9:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MASS EV P3F (MA-EV-P3F)",
        "NOMBRE CORTO": "MA-EV-P3F",
        "HORA RD": "10:00:00 PM",
        "HORA SISTEMA": "9:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MASSACHUSETTS EVENING (MA-EVEN)",
        "NOMBRE CORTO": "MA-EVEN",
        "HORA RD": "10:00:00 PM",
        "HORA SISTEMA": "9:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "CALIFORNIA EVENING (CA-EVEN)",
        "NOMBRE CORTO": "CA-EVEN",
        "HORA RD": "10:30:00 PM",
        "HORA SISTEMA": "9:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "COLORADO EVENING (CO-EVE)",
        "NOMBRE CORTO": "CO-EVE",
        "HORA RD": "10:30:00 PM",
        "HORA SISTEMA": "9:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "FLORIDA PM (FL-PM)",
        "NOMBRE CORTO": "FL-PM",
        "HORA RD": "10:45:00 PM",
        "HORA SISTEMA": "9:45:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "FLORIDA PM MARIAGE PALE (FL-PM-MR)",
        "NOMBRE CORTO": "FL-PM-MR",
        "HORA RD": "10:45:00 PM",
        "HORA SISTEMA": "9:45:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "FL PICK 2 PM (FLPK2PM)",
        "NOMBRE CORTO": "FLPK2PM",
        "HORA RD": "10:45:00 PM",
        "HORA SISTEMA": "9:45:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "FL PICK5 PM (FLPK5PM)",
        "NOMBRE CORTO": "FLPK5PM",
        "HORA RD": "10:45:00 PM",
        "HORA SISTEMA": "9:45:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "SP NYPM-FLPM (NYPM-FLPM)",
        "NOMBRE CORTO": "NYPM-FLPM",
        "HORA RD": "10:45:00 PM",
        "HORA SISTEMA": "9:45:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MISSOURI EVENING (MO-EVEN)",
        "NOMBRE CORTO": "MO-EVEN",
        "HORA RD": "10:59:00 PM",
        "HORA SISTEMA": "9:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "IDAHO NIGHT (IDH-NG)",
        "NOMBRE CORTO": "IDH-NG",
        "HORA RD": "10:59:00 PM",
        "HORA SISTEMA": "9:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "WISCONSIN EVENING (WISC-EVEN)",
        "NOMBRE CORTO": "WISC-EVEN",
        "HORA RD": "11:00:00 PM",
        "HORA SISTEMA": "10:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ARIZONA (AZ)",
        "NOMBRE CORTO": "AZ",
        "HORA RD": "11:00:00 PM",
        "HORA SISTEMA": "10:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "OREGON 7PM (OR-7PM)",
        "NOMBRE CORTO": "OR-7PM",
        "HORA RD": "11:00:00 PM",
        "HORA SISTEMA": "10:00:00 PM"
    },
    {
        "LOCALIDAD": "HONDURAS",
        "NOMBRE LARGO(NOMBRE CORTO)": "LA DIARIA 09PM (LD09)",
        "NOMBRE CORTO": "LD09",
        "HORA RD": "11:00:00 PM",
        "HORA SISTEMA": "10:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "KANSAS EVENING (KS-EVEN)",
        "NOMBRE CORTO": "KS-EVEN",
        "HORA RD": "11:10:00 PM",
        "HORA SISTEMA": "10:10:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "ILLINOIS EVENING (ILLINOIS-EVEN)",
        "NOMBRE CORTO": "ILLINOIS-EVEN",
        "HORA RD": "11:20:00 PM",
        "HORA SISTEMA": "10:20:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "CONNECT PM (CT-PM)",
        "NOMBRE CORTO": "CT-PM",
        "HORA RD": "11:29:00 PM",
        "HORA SISTEMA": "10:29:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "CONNECT PM MARIAGE PALE (CT-PM-MR)",
        "NOMBRE CORTO": "CT-PM-MR",
        "HORA RD": "11:29:00 PM",
        "HORA SISTEMA": "10:29:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "EXTRA (EXTRA)",
        "NOMBRE CORTO": "EXTRA",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "EXTRA MARIAGE PALE (EXTRA-MR)",
        "NOMBRE CORTO": "EXTRA-MR",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "LA MINI (LA-MINI)",
        "NOMBRE CORTO": "LA-MINI",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "MISSISSIPPI EVENING (MISS-EVEN)",
        "NOMBRE CORTO": "MISS-EVEN",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NEW YORK PM (NY-PM)",
        "NOMBRE CORTO": "NY-PM",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NEW YORK PM MARIAGE PALE (NY-PM-MR)",
        "NOMBRE CORTO": "NY-PM-MR",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "VENEZUELA PM (VLA-PM)",
        "NOMBRE CORTO": "VLA-PM",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "EXTRA NIGHT (EX - NG)",
        "NOMBRE CORTO": "EX - NG",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NY-BK PM (NYBK-PM)",
        "NOMBRE CORTO": "NYBK-PM",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NY-BP PM (NYBP-PM)",
        "NOMBRE CORTO": "NYBP-PM",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NY-FP PM (NYFP-PM)",
        "NOMBRE CORTO": "NYFP-PM",
        "HORA RD": "11:30:00 PM",
        "HORA SISTEMA": "10:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NEW JERSEY PM (NJ-PM)",
        "NOMBRE CORTO": "NJ-PM",
        "HORA RD": "11:57:00 PM",
        "HORA SISTEMA": "10:57:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NEW JERSEY PM MARIAGE PALE (NJ-PM-MR)",
        "NOMBRE CORTO": "NJ-PM-MR",
        "HORA RD": "11:57:00 PM",
        "HORA SISTEMA": "10:57:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "LOUISIANA EVENING (LOUI-EVEN)",
        "NOMBRE CORTO": "LOUI-EVEN",
        "HORA RD": "11:59:00 PM",
        "HORA SISTEMA": "10:59:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "INDIANA EVENING (IN-EVEN)",
        "NOMBRE CORTO": "IN-EVEN",
        "HORA RD": "12:00:00 AM",
        "HORA SISTEMA": "11:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "IOWA EVENING (IOWA-EVEN)",
        "NOMBRE CORTO": "IOWA-EVEN",
        "HORA RD": "12:00:00 AM",
        "HORA SISTEMA": "11:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "KENTUCKY EVENING (KNT-EVEN)",
        "NOMBRE CORTO": "KNT-EVEN",
        "HORA RD": "12:00:00 AM",
        "HORA SISTEMA": "11:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "VIRGINIA NIGHT (VIRG-NIGHT)",
        "NOMBRE CORTO": "VIRG-NIGHT",
        "HORA RD": "12:00:00 AM",
        "HORA SISTEMA": "11:00:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "TEXAS NIGHT (TX-NIGHT)",
        "NOMBRE CORTO": "TX-NIGHT",
        "HORA RD": "12:12:00 AM",
        "HORA SISTEMA": "11:12:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NORTH CAROLINA PM (NC-PM)",
        "NOMBRE CORTO": "NC-PM",
        "HORA RD": "12:22:00 AM",
        "HORA SISTEMA": "11:22:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "WASHINGTON D.C NIGHT (DC-NG)",
        "NOMBRE CORTO": "DC-NG",
        "HORA RD": "12:30:00 AM",
        "HORA SISTEMA": "11:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "NEW MEXICO EVENING (NM-EVEN)",
        "NOMBRE CORTO": "NM-EVEN",
        "HORA RD": "12:30:00 AM",
        "HORA SISTEMA": "11:30:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "GEORGIA NIGHT (GE-NT)",
        "NOMBRE CORTO": "GE-NT",
        "HORA RD": "12:34:00 AM",
        "HORA SISTEMA": "11:34:00 PM"
    },
    {
        "LOCALIDAD": "AMERICANA",
        "NOMBRE LARGO(NOMBRE CORTO)": "GEORGIA NIGHT MARIAGE PALE (GE-NT-MR)",
        "NOMBRE CORTO": "GE-NT-MR",
        "HORA RD": "12:34:00 AM",
        "HORA SISTEMA": "11:34:00 PM"
    },
    {
        "LOCALIDAD": "VIRTUAL",
        "NOMBRE LARGO(NOMBRE CORTO)": "PREMIERLOTTO 07PM (PREMIER03PM)",
        "NOMBRE CORTO": "PREMIER03PM",
        "HORA RD": "8:00:00 PM",
        "HORA SISTEMA": "7:00:00 PM"
    },
    {
        "LOCALIDAD": "VIRTUAL",
        "NOMBRE LARGO(NOMBRE CORTO)": "PREMIERLOTTO 08PM (PREMIER08PM)",
        "NOMBRE CORTO": "PREMIER08PM",
        "HORA RD": "9:00:00 PM",
        "HORA SISTEMA": "8:00:00 PM"
    },
    {
        "LOCALIDAD": "VIRTUAL",
        "NOMBRE LARGO(NOMBRE CORTO)": "BRAZIL 07PM (BRAZIL07PM)",
        "NOMBRE CORTO": "BRAZIL07PM",
        "HORA RD": "8:00:00 PM",
        "HORA SISTEMA": "7:00:00 PM"
    },
    {
        "LOCALIDAD": "VIRTUAL",
        "NOMBRE LARGO(NOMBRE CORTO)": "BRAZIL 08PM (BRAZIL08PM)",
        "NOMBRE CORTO": "BRAZIL08PM",
        "HORA RD": "9:00:00 PM",
        "HORA SISTEMA": "8:00:00 PM"
    }
]

let currentTimezone = -4; // Valor inicial para RD

function actualizarReloj() {
    const ahora = new Date();
    // Ajustar la hora según la zona horaria seleccionada
    const horaAjustada = new Date(ahora.getTime() + (ahora.getTimezoneOffset() * 60000) + (currentTimezone * 3600000));
    
    let horas = horaAjustada.getHours();
    const minutos = horaAjustada.getMinutes().toString().padStart(2, '0');
    const segundos = horaAjustada.getSeconds().toString().padStart(2, '0');
    const meridiem = horas >= 12 ? 'PM' : 'AM';
    
    // Convertir a formato 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Si es 0, convertir a 12
    horas = horas.toString().padStart(2, '0');
    
    document.getElementById('digital-clock').textContent = `${horas}:${minutos}:${segundos} ${meridiem}`;
}

function cargarDatos() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    const estadosGuardados = JSON.parse(localStorage.getItem('estadosLoteria')) || {};
    const notificacionesEnviadas = JSON.parse(localStorage.getItem('notificacionesEnviar')) || {};

    datos.sort((a, b) => {
        return new Date('1970/01/01 ' + a['HORA SISTEMA']) - new Date('1970/01/01 ' + b['HORA SISTEMA']);
    });

    datos.forEach(item => {
        const row = document.createElement('tr');
        row.classList.add('lottery-row', item.LOCALIDAD.toLowerCase());
        
        let estado = determinarEstado(item['HORA SISTEMA'], item['HORA RD']);
        
        // Restaurar el estado desde localStorage si existe
        if (estadosGuardados[item['NOMBRE CORTO']]) {
            const estadoTexto = estadosGuardados[item['NOMBRE CORTO']];
            estado = {
                text: estadoTexto,
                class: `estado-${estadoTexto.toLowerCase()}`,
                icon: estadoTexto === 'Finalizado' ? 'bi-check-circle-fill' : estadoTexto === 'Próximo' ? 'bi-clock-history' : 'bi-clock-fill'
            };
        }
        
        row.innerHTML = `
            <td>
                <span class="badge badge-${item.LOCALIDAD.toLowerCase()}">
                    ${item.LOCALIDAD}
                </span>
            </td>
            <td>
                <div class="lottery-info">
                    <span class="lottery-name">${item['NOMBRE LARGO(NOMBRE CORTO)'].split('(')[0].trim()}</span>
                </div>
            </td>
            <td>
                <span class="lottery-code">${item['NOMBRE CORTO']}</span>
            </td>
            <td>
                <div class="time time-rd">
                    <i class="bi bi-clock"></i>
                    ${formatearHora(item['HORA RD'])}
                </div>
            </td>
            <td>
                <div class="time time-sistema">
                    <i class="bi bi-clock-history"></i>
                    ${formatearHora(item['HORA SISTEMA'])}
                </div>
            </td>
            <td class="estado-column" 
                data-hora-sistema="${item['HORA SISTEMA']}"
                data-hora-rd="${item['HORA RD']}">
                <span class="estado-badge ${estado.class}">
                    <i class="bi ${estado.icon}"></i>
                    ${estado.text}
                </span>
            </td>
        `;
        
        // Aplicar color de fondo según el estado
        if (estado.text === 'Finalizado') {
            row.style.backgroundColor = 'rgba(34, 197, 94, 0.1)'; // Verde transparente
        } else if (estado.text === 'Próximo') {
            row.style.backgroundColor = 'rgba(250, 204, 21, 0.1)'; // Amarillo transparente
            // Verificar si ya se envió una notificación para esta lotería
            if (!notificacionesEnviadas[item['NOMBRE CORTO']]) {
                enviarNotificacion(item['NOMBRE LARGO(NOMBRE CORTO)'].split('(')[0].trim());
                notificacionesEnviadas[item['NOMBRE CORTO']] = true;
                localStorage.setItem('notificacionesEnviar', JSON.stringify(notificacionesEnviadas));
            }
        } else if (estado.text === 'En cola') {
            row.style.backgroundColor = 'rgba(156, 163, 175, 0.1)';
        }

        const estadoColumn = row.querySelector('.estado-column');
        estadoColumn.addEventListener('click', function() {
            toggleEstado(this);
        });
        
        tableBody.appendChild(row);
    });

    localStorage.setItem('notificacionesEnviar', JSON.stringify(notificacionesEnviadas));

    actualizarContadores();
    setInterval(actualizarEstados, 60000);

    actualizarEstiloHorarios();
}

function determinarEstado(horaSistema, horaRD) {
    const now = new Date();
    // Usar la hora correspondiente según la zona horaria actual
    const horaComparar = currentTimezone === -4 ? horaRD : horaSistema;
    
    const [hora, periodo] = horaComparar.split(' ');
    const [hh, mm] = hora.split(':');
    
    let horaObjetivo = new Date();
    horaObjetivo.setHours(
        periodo === 'PM' ? (hh === '12' ? 12 : parseInt(hh) + 12) : (hh === '12' ? 0 : parseInt(hh)),
        parseInt(mm),
        0
    );

    // Ajustar la hora actual según la zona horaria seleccionada
    const horaActual = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (currentTimezone * 3600000));
    
    const diferenciaMinutos = (horaObjetivo - horaActual) / 60000;

    if (diferenciaMinutos <= 0) {
        if (diferenciaMinutos > -10) {
            return {
                text: 'Próximo',
                class: 'estado-proximo',
                icon: 'bi-clock-history'
            };
        } else {
            return {
                text: 'Pendiente',
                class: 'estado-pendiente',
                icon: 'bi-clock-fill'
            };
        }
    } else if (diferenciaMinutos <= 2) {
        return {
            text: 'Próximo',
            class: 'estado-proximo',
            icon: 'bi-clock-history'
        };
    } else {
        return {
            text: 'En cola',
            class: 'estado-en-cola',
            icon: 'bi-hourglass-split'
        };
    }
}

function toggleEstado(estadoColumn) {
    const isGridView = estadoColumn.closest('.lottery-card') !== null;
    const estadoBadge = estadoColumn.querySelector('.estado-badge');
    const container = isGridView ? estadoColumn.closest('.lottery-card') : estadoColumn.closest('tr');
    const nombreCorto = container.querySelector('.lottery-code').textContent;
    let nuevoEstado;

    if (estadoBadge.classList.contains('estado-pendiente') || estadoBadge.classList.contains('estado-proximo')) {
        estadoBadge.classList.remove('estado-pendiente', 'estado-proximo');
        estadoBadge.classList.add('estado-finalizado');
        estadoBadge.innerHTML = '<i class="bi bi-check-circle-fill"></i> Finalizado';
        container.style.backgroundColor = 'rgba(34, 197, 94, 0.1)'; // Verde transparente
        nuevoEstado = 'Finalizado';
        
        // Remover notificación enviada si existe
        const notificacionesEnviadas = JSON.parse(localStorage.getItem('notificacionesEnviar')) || {};
        if (notificacionesEnviadas[nombreCorto]) {
            delete notificacionesEnviadas[nombreCorto];
            localStorage.setItem('notificacionesEnviar', JSON.stringify(notificacionesEnviadas));
        }
    } else if (estadoBadge.classList.contains('estado-finalizado')) {
        estadoBadge.classList.remove('estado-finalizado');
        estadoBadge.classList.add('estado-pendiente');
        estadoBadge.innerHTML = '<i class="bi bi-clock-fill"></i> Pendiente';
        container.style.backgroundColor = '';
        nuevoEstado = 'Pendiente';
    }

    // Guardar el nuevo estado en localStorage
    const estadosGuardados = JSON.parse(localStorage.getItem('estadosLoteria')) || {};
    estadosGuardados[nombreCorto] = nuevoEstado;
    localStorage.setItem('estadosLoteria', JSON.stringify(estadosGuardados));

    // Actualizar la otra vista si está disponible
    const otherView = isGridView ? 
        document.querySelector(`tr .lottery-code[textContent="${nombreCorto}"]`)?.closest('tr') : 
        document.querySelector(`.lottery-card .lottery-code[textContent="${nombreCorto}"]`)?.closest('.lottery-card');
    
    if (otherView) {
        const otherBadge = otherView.querySelector('.estado-badge');
        otherBadge.className = `estado-badge estado-${nuevoEstado.toLowerCase()}`;
        otherBadge.innerHTML = `<i class="bi ${nuevoEstado === 'Finalizado' ? 'bi-check-circle-fill' : 'bi-clock-fill'}"></i> ${nuevoEstado}`;
        otherView.style.backgroundColor = nuevoEstado === 'Finalizado' ? 'rgba(34, 197, 94, 0.1)' : '';
    }
}

function actualizarEstados() {
    const estadoColumns = document.querySelectorAll('.estado-column');
    const estadosGuardados = JSON.parse(localStorage.getItem('estadosLoteria')) || {};
    const notificacionesEnviadas = JSON.parse(localStorage.getItem('notificacionesEnviar')) || {};

    estadoColumns.forEach(column => {
        const row = column.parentElement;
        const nombreCorto = row.querySelector('.lottery-code').textContent;
        const horaSistema = column.dataset.horaSistema;
        const horaRD = column.dataset.horaRd;

        // Verificar si el estado está guardado como "Finalizado"
        if (estadosGuardados[nombreCorto] === 'Finalizado') {
            column.querySelector('.estado-badge').className = 'estado-badge estado-finalizado';
            column.querySelector('.estado-badge').innerHTML = '<i class="bi bi-check-circle-fill"></i> Finalizado';
            row.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
            return;
        }

        const estado = determinarEstado(horaSistema, horaRD);
        const estadoBadge = column.querySelector('.estado-badge');
        
        estadoBadge.className = `estado-badge ${estado.class}`;
        estadoBadge.innerHTML = `<i class="bi ${estado.icon}"></i> ${estado.text}`;
        
        if (estado.text === 'Finalizado') {
            row.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
        } else if (estado.text === 'Próximo') {
            row.style.backgroundColor = 'rgba(250, 204, 21, 0.1)';
            // Verificar si ya se envió una notificación para esta lotería
            if (!notificacionesEnviadas[nombreCorto]) {
                enviarNotificacion(row.querySelector('.lottery-name').textContent);
                notificacionesEnviadas[nombreCorto] = true;
                localStorage.setItem('notificacionesEnviar', JSON.stringify(notificacionesEnviadas));
            }
        } else if (estado.text === 'En cola') {
            row.style.backgroundColor = 'rgba(156, 163, 175, 0.1)';
        } else {
            row.style.backgroundColor = '';
        }
    });

    // Actualizar contadores si es necesario
    actualizarContadores();
}

function actualizarContadores() {
    const total = datos.length;
    const americana = datos.filter(item => item.LOCALIDAD === 'AMERICANA').length;
    const dominicana = datos.filter(item => item.LOCALIDAD === 'DOMINICANA').length;
    const honduras = datos.filter(item => item.LOCALIDAD === 'HONDURAS').length;
    const virtual = datos.filter(item => item.LOCALIDAD === 'VIRTUAL').length;

    document.getElementById('count-all').textContent = total;
    document.getElementById('count-americana').textContent = americana;
    document.getElementById('count-dominicana').textContent = dominicana;
    document.getElementById('count-honduras').textContent = honduras;
    document.getElementById('count-virtual').textContent = virtual;
}

function formatearHora(hora) {
    const [time, meridiem] = hora.split(' ');
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes} ${meridiem}`;
}

// Función para solicitar permisos de notificación
function solicitarPermisosNotificacion() {
    const notificationBanner = document.getElementById('notification-banner');
    
    if (!('Notification' in window)) {
        console.warn('Este navegador no soporta notificaciones.');
        return;
    }

    if (Notification.permission === 'denied') {
        notificationBanner.style.display = 'block';
        return;
    }

    if (Notification.permission === 'default') {
        notificationBanner.style.display = 'block';
        
        document.getElementById('enable-notifications').addEventListener('click', () => {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    notificationBanner.style.display = 'none';
                } else {
                    console.warn('El usuario denegó las notificaciones.');
                }
            });
        });
    }
}

// Función para enviar una notificación
function enviarNotificacion(nombreLoteria) {
    if (!('Notification' in window)) {
        return;
    }

    if (Notification.permission === 'denied' || Notification.permission === 'default') {
        document.getElementById('notification-banner').style.display = 'block';
        return;
    }

    if (Notification.permission === 'granted') {
        new Notification('Loterías Noche', {
            body: `La lotería "${nombreLoteria}" está próxima a sortear.`,
            icon: 'favicon.ico'
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Recuperar la vista guardada
    const savedView = localStorage.getItem('selectedView') || 'table';
    
    // Aplicar la vista guardada
    const tableContainer = document.querySelector('.table-container');
    const gridContainer = document.querySelector('.grid-container');
    const viewButtons = document.querySelectorAll('.btn-view');
    
    viewButtons.forEach(btn => {
        if (btn.dataset.view === savedView) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (savedView === 'table') {
        tableContainer.style.display = '';
        gridContainer.style.display = 'none';
    } else {
        tableContainer.style.display = 'none';
        gridContainer.style.display = 'grid';
        cargarVistaGrid();
    }

    cargarDatos();
    actualizarReloj();
    setInterval(actualizarReloj, 1000);
    solicitarPermisosNotificacion();

    // Modificar el event listener de los botones de vista
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-view').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const viewType = btn.dataset.view;
            const tableContainer = document.querySelector('.table-container');
            const gridContainer = document.querySelector('.grid-container');
            
            // Guardar la preferencia de vista
            localStorage.setItem('selectedView', viewType);
            
            if (viewType === 'table') {
                tableContainer.style.display = '';
                gridContainer.style.display = 'none';
            } else {
                tableContainer.style.display = 'none';
                gridContainer.style.display = 'grid';
                cargarVistaGrid();
            }
        });
    });

    // Filtros
    document.querySelectorAll('.filter-item').forEach(filter => {
        filter.addEventListener('click', (e) => {
            const filterType = filter.dataset.filter;
            
            // Actualizar estado activo
            document.querySelectorAll('.filter-item').forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // Filtrar tabla
            const rows = document.querySelectorAll('.lottery-row');
            rows.forEach(row => {
                if (filterType === 'all') {
                    row.style.display = '';
                } else {
                    row.style.display = row.classList.contains(filterType) ? '' : 'none';
                }
            });
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.lottery-row');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    document.getElementById('timezone-toggle').addEventListener('click', () => {
        currentTimezone = currentTimezone === -4 ? -5 : -4;
        const btn = document.getElementById('timezone-toggle');
        btn.innerHTML = `<i class="bi bi-globe"></i> GMT${currentTimezone}`;
        
        // Actualizar inmediatamente el reloj y los estilos de horarios
        actualizarReloj();
        actualizarEstiloHorarios();
        actualizarEstados(); // Para actualizar los estados según la nueva zona horaria
    });

    // **Cambiar el intervalo de actualización de estados a cada segundo**
    setInterval(actualizarEstados, 1000); // Actualizar estados cada 1 segundo

});

function cargarVistaGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';
    
    const estadosGuardados = JSON.parse(localStorage.getItem('estadosLoteria')) || {};
    const notificacionesEnviadas = JSON.parse(localStorage.getItem('notificacionesEnviar')) || {};
    
    datos.forEach(item => {
        let estado = determinarEstado(item['HORA SISTEMA'], item['HORA RD']);
        
        // Restaurar el estado desde localStorage si existe
        if (estadosGuardados[item['NOMBRE CORTO']]) {
            const estadoTexto = estadosGuardados[item['NOMBRE CORTO']];
            estado = {
                text: estadoTexto,
                class: `estado-${estadoTexto.toLowerCase()}`,
                icon: estadoTexto === 'Finalizado' ? 'bi-check-circle-fill' : estadoTexto === 'Próximo' ? 'bi-clock-history' : 'bi-clock-fill'
            };
        }

        const card = document.createElement('div');
        card.className = `lottery-card ${item.LOCALIDAD.toLowerCase()}`;
        
        // Aplicar color de fondo según el estado
        if (estado.text === 'Finalizado') {
            card.style.backgroundColor = 'rgba(34, 197, 94, 0.05)';
        } else if (estado.text === 'Próximo') {
            card.style.backgroundColor = 'rgba(250, 204, 21, 0.05)';
            // Verificar si ya se envió una notificación para esta lotería
            if (!notificacionesEnviadas[item['NOMBRE CORTO']]) {
                enviarNotificacion(item['NOMBRE LARGO(NOMBRE CORTO)'].split('(')[0].trim());
                notificacionesEnviadas[item['NOMBRE CORTO']] = true;
                localStorage.setItem('notificacionesEnviar', JSON.stringify(notificacionesEnviadas));
            }
        } else if (estado.text === 'En cola') {
            card.style.backgroundColor = 'rgba(156, 163, 175, 0.05)';
        }

        card.innerHTML = `
            <div class="card-header">
                <div class="card-header-left">
                    <span class="badge badge-${item.LOCALIDAD.toLowerCase()}">${item.LOCALIDAD}</span>
                    <span class="lottery-code">${item['NOMBRE CORTO']}</span>
                </div>
                <span class="estado-badge ${estado.class}" data-hora-sistema="${item['HORA SISTEMA']}">
                    <i class="bi ${estado.icon}"></i>
                    ${estado.text}
                </span>
            </div>
            <div class="card-body">
                <h3>${item['NOMBRE LARGO(NOMBRE CORTO)'].split('(')[0].trim()}</h3>
                <div class="time-info">
                    <div class="time time-rd">
                        <i class="bi bi-clock"></i>
                        <span>RD: ${formatearHora(item['HORA RD'])}</span>
                    </div>
                    <div class="time time-sistema">
                        <i class="bi bi-clock-history"></i>
                        <span>Sistema: ${formatearHora(item['HORA SISTEMA'])}</span>
                    </div>
                </div>
            </div>
        `;

        // Agregar evento click al estado
        const estadoBadge = card.querySelector('.estado-badge');
        estadoBadge.addEventListener('click', function() {
            toggleEstado(card);
        });
        
        gridContainer.appendChild(card);
    });

    actualizarEstiloHorarios();
}

// Agregar función para actualizar el estilo de las columnas de horario
function actualizarEstiloHorarios() {
    // Obtener todas las celdas de tiempo tanto en la vista tabla como en la vista grid
    const tiempoRDElements = document.querySelectorAll('.time-rd');
    const tiempoSistemaElements = document.querySelectorAll('.time-sistema');
    
    // Aplicar estilos según la zona horaria actual
    tiempoRDElements.forEach(el => {
        el.style.color = currentTimezone === -4 ? '#f97316' : '#374151'; // naranja si está activo, gris si no
        el.style.fontWeight = currentTimezone === -4 ? '600' : '400';
    });
    
    tiempoSistemaElements.forEach(el => {
        el.style.color = currentTimezone === -5 ? '#f97316' : '#374151';
        el.style.fontWeight = currentTimezone === -5 ? '600' : '400';
    });
} 