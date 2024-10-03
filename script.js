// Función para obtener el signo zodiacal occidental
function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Acuario";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Piscis";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Tauro";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Géminis";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Cáncer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Escorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Sagitario";
    } else {
        return "Capricornio";
    }
}

// Función para obtener el signo zodiacal chino
function getChineseZodiac(year) {
    const chineseZodiac = [
        "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente",
        "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Cerdo"
    ];
    return chineseZodiac[(year - 4) % 12];
}

// Función para obtener la descripción de la personalidad según el signo zodiacal occidental
function getZodiacPersonality(sign) {
    const personalityDescriptions = {
        "Aries": {
            behavior: "Impulsivo, valiente y enérgico.",
            fidelity: "Fiel cuando está verdaderamente enamorado.",
            luck: "Tiene buena suerte en los desafíos y la competencia."
        },
        "Tauro": {
            behavior: "Paciente, estable y determinado.",
            fidelity: "Extremadamente leal, valora la estabilidad.",
            luck: "La buena suerte llega a través del trabajo duro y la perseverancia."
        },
        "Géminis": {
            behavior: "Curioso, adaptable y comunicativo.",
            fidelity: "Puede ser inconstante, pero fiel si encuentra a la persona correcta.",
            luck: "La buena suerte le sonríe en situaciones sociales y nuevas experiencias."
        },
        "Cáncer": {
            behavior: "Emocional, protector y sensible.",
            fidelity: "Muy leal, pero puede ser posesivo.",
            luck: "La buena suerte está ligada a su hogar y familia."
        },
        "Leo": {
            behavior: "Orgulloso, generoso y dominante.",
            fidelity: "Fiel y protector con sus seres queridos.",
            luck: "Tiene buena suerte en posiciones de liderazgo y reconocimiento."
        },
        "Virgo": {
            behavior: "Meticuloso, práctico y analítico.",
            fidelity: "Fiel y confiable, busca relaciones estables.",
            luck: "La buena suerte surge de su capacidad para organizar y planificar."
        },
        "Libra": {
            behavior: "Diplomático, encantador y equilibrado.",
            fidelity: "Busca armonía en las relaciones, fiel si encuentra equilibrio.",
            luck: "La buena suerte llega en situaciones donde prevalece la justicia."
        },
        "Escorpio": {
            behavior: "Intenso, apasionado y enigmático.",
            fidelity: "Extremadamente leal, pero requiere compromiso total.",
            luck: "La buena suerte le acompaña en situaciones donde puede controlar el resultado."
        },
        "Sagitario": {
            behavior: "Aventurero, optimista y sincero.",
            fidelity: "Fiel, pero valora su libertad.",
            luck: "La buena suerte se encuentra en los viajes y nuevas experiencias."
        },
        "Capricornio": {
            behavior: "Ambicioso, disciplinado y prudente.",
            fidelity: "Muy leal, pero puede ser distante emocionalmente.",
            luck: "La buena suerte llega a través del trabajo duro y la planificación a largo plazo."
        },
        "Acuario": {
            behavior: "Independiente, innovador y humanitario.",
            fidelity: "Fiel, pero necesita espacio para ser él mismo.",
            luck: "La buena suerte está en sus ideas innovadoras y su capacidad para conectar con otros."
        },
        "Piscis": {
            behavior: "Soñador, compasivo y artístico.",
            fidelity: "Fiel, pero puede perderse en sus propios mundos.",
            luck: "La buena suerte viene de su intuición y empatía."
        }
    };

    return personalityDescriptions[sign];
}

// Función para obtener la descripción de la personalidad según el signo zodiacal chino
function getChineseZodiacPersonality(chineseSign) {
    const chinesePersonalityDescriptions = {
        "Rata": {
            behavior: "Astuto, adaptable y curioso.",
            fidelity: "Fiel, pero puede ser posesivo.",
            luck: "La buena suerte viene en situaciones que requieren ingenio."
        },
        "Buey": {
            behavior: "Fuerte, confiable y trabajador.",
            fidelity: "Extremadamente leal, valora la tradición.",
            luck: "La buena suerte llega a través de la perseverancia y la paciencia."
        },
        "Tigre": {
            behavior: "Valiente, impulsivo y competitivo.",
            fidelity: "Fiel, pero necesita emoción constante.",
            luck: "La buena suerte está en situaciones que requieren valentía."
        },
        "Conejo": {
            behavior: "Gentil, elegante y diplomático.",
            fidelity: "Leal, busca armonía y paz.",
            luck: "La buena suerte se encuentra en ambientes tranquilos y seguros."
        },
        "Dragón": {
            behavior: "Ambicioso, enérgico y magnético.",
            fidelity: "Muy leal, pero necesita admiración.",
            luck: "La buena suerte le acompaña en la búsqueda de poder y éxito."
        },
        "Serpiente": {
            behavior: "Sabio, intuitivo y reservado.",
            fidelity: "Fiel, pero en sus propios términos.",
            luck: "La buena suerte surge de su capacidad para leer entre líneas."
        },
        "Caballo": {
            behavior: "Independiente, dinámico y entusiasta.",
            fidelity: "Fiel, pero necesita libertad.",
            luck: "La buena suerte le sigue en aventuras y cambios."
        },
        "Cabra": {
            behavior: "Creativo, compasivo y tímido.",
            fidelity: "Leal, pero puede ser emocionalmente dependiente.",
            luck: "La buena suerte llega en situaciones artísticas y tranquilas."
        },
        "Mono": {
            behavior: "Ingenioso, divertido y flexible.",
            fidelity: "Fiel, pero puede ser travieso.",
            luck: "La buena suerte viene en situaciones donde se requiere creatividad."
        },
        "Gallo": {
            behavior: "Valiente, preciso y orgulloso.",
            fidelity: "Extremadamente leal, pero puede ser exigente.",
            luck: "La buena suerte le acompaña en situaciones donde puede brillar."
        },
        "Perro": {
            behavior: "Leal, sincero y protector.",
            fidelity: "Muy leal, valora la honestidad.",
            luck: "La buena suerte está en situaciones que requieren confianza."
        },
        "Cerdo": {
            behavior: "Generoso, honesto y indulgente.",
            fidelity: "Fiel, busca relaciones plenas.",
            luck: "La buena suerte surge de su naturaleza generosa."
        }
    };

    return chinesePersonalityDescriptions[chineseSign];
}

// Función para evaluar la compatibilidad 
function evaluateCompatibility(zodiac1, zodiac2, chineseZodiac1, chineseZodiac2) {
    const compatibilityDescriptions = {
        "Muy alta": {
            love: `En el ámbito amoroso, ${zodiac1} y ${zodiac2} forman una pareja excepcionalmente armoniosa. 
            La energía impulsiva y apasionada de ${zodiac1} se complementa a la perfección con la estabilidad y la comprensión que aporta ${zodiac2}. 
            Ambos comparten un deseo profundo de lealtad y compromiso, lo que crea una base sólida para una relación duradera. 
            La combinación de la intuición de ${zodiac1} con la sensibilidad de ${zodiac2} genera una conexión emocional intensa y un respeto mutuo que refuerza su amor.`,
            work: `En el entorno laboral, ${zodiac1} y ${zodiac2} se entienden de manera casi intuitiva. 
            ${zodiac1}, con su determinación y visión creativa, inspira a ${zodiac2}, que aporta su enfoque meticuloso y práctico a la ecuación. 
            Juntos, pueden afrontar cualquier desafío profesional con una mezcla perfecta de innovación y estructura, haciendo que los proyectos fluyan de manera eficiente y exitosa.`,
            friendship: `En la amistad, ${zodiac1} y ${zodiac2} disfrutan de una conexión profunda basada en la admiración mutua. 
            La naturaleza sociable y comunicativa de ${zodiac1} encuentra un eco perfecto en la empatía y el apoyo constante de ${zodiac2}. 
            Esta combinación crea una amistad rica en experiencias compartidas, donde ambos se sienten comprendidos y valorados, lo que solidifica una relación que perdurará en el tiempo.`
        },
        "Alta": {
            love: `La relación amorosa entre ${zodiac1} y ${zodiac2} está marcada por una fuerte atracción y una química innegable. 
            ${zodiac1} se siente atraído por la confianza y el magnetismo de ${zodiac2}, mientras que ${zodiac2} aprecia la energía vibrante y la espontaneidad de ${zodiac1}. 
            Aunque pueden surgir diferencias, estas sirven más como un estímulo para el crecimiento personal y de la relación, en lugar de ser obstáculos. 
            El respeto mutuo y el deseo de entenderse son clave para mantener una relación amorosa sólida.`,
            work: `Trabajar juntos puede ser extremadamente productivo para ${zodiac1} y ${zodiac2}. 
            ${zodiac1} aporta dinamismo e ideas innovadoras, mientras que ${zodiac2} ofrece una perspectiva equilibrada y cuidadosa. 
            Aunque a veces puedan tener enfoques diferentes, esta diversidad en el pensamiento es lo que les permite cubrir todas las bases y encontrar soluciones creativas a los problemas.`,
            friendship: `La amistad entre ${zodiac1} y ${zodiac2} es rica en aprendizaje mutuo y experiencias compartidas. 
            ${zodiac1} valora la lealtad y el apoyo de ${zodiac2}, mientras que ${zodiac2} disfruta de la alegría y el entusiasmo que ${zodiac1} trae a su vida. 
            Aunque puedan tener diferencias en sus enfoques, estas solo fortalecen su vínculo, ya que ambos están dispuestos a aprender el uno del otro.`
        },
        "Moderada": {
            love: `La relación amorosa entre ${zodiac1} y ${zodiac2} puede ser desafiante, pero no imposible. 
            ${zodiac1} puede encontrar en ${zodiac2} un compañero estable y confiable, pero debe aprender a apreciar la calma y la seguridad que ${zodiac2} ofrece. 
            Por otro lado, ${zodiac2} debe estar dispuesto a adaptarse a la naturaleza más dinámica y espontánea de ${zodiac1}. 
            Si ambos están dispuestos a comprometerse y aceptar sus diferencias, pueden construir una relación basada en el respeto y la comprensión.`,
            work: `En el ámbito laboral, ${zodiac1} y ${zodiac2} pueden tener dificultades para sincronizar sus estilos de trabajo. 
            ${zodiac1} tiende a ser más rápido y orientado a la acción, mientras que ${zodiac2} prefiere un enfoque más metódico y reflexivo. 
            Sin embargo, si logran encontrar un terreno común, pueden complementar sus habilidades y ofrecer soluciones más completas y bien pensadas.`,
            friendship: `La amistad entre ${zodiac1} y ${zodiac2} puede ser compleja, pero enriquecedora. 
            ${zodiac1} disfruta de la energía y la vitalidad, mientras que ${zodiac2} prefiere la estabilidad y la tranquilidad. 
            Si ambos pueden apreciar las cualidades del otro y encontrar formas de equilibrar sus diferencias, su amistad puede evolucionar hacia una relación sólida y duradera.`
        },
        "Baja": {
            love: `En el amor, ${zodiac1} y ${zodiac2} pueden enfrentarse a muchos desafíos. 
            ${zodiac1} busca emoción y cambio constante, mientras que ${zodiac2} valora la estabilidad y la predictibilidad. 
            Estas diferencias fundamentales pueden llevar a malentendidos y tensiones en la relación. 
            Sin embargo, con esfuerzo y una comunicación abierta, es posible superar las dificultades, aunque requerirá paciencia y compromiso de ambas partes.`,
            work: `Trabajar juntos puede ser una prueba para ${zodiac1} y ${zodiac2}. 
            Sus enfoques opuestos hacia el trabajo pueden generar conflictos, ya que ${zodiac1} podría sentirse frustrado por el ritmo más lento de ${zodiac2}, mientras que ${zodiac2} puede encontrar a ${zodiac1} demasiado impulsivo. 
            Si ambos están dispuestos a adaptarse y aprender el uno del otro, pueden encontrar una manera de colaborar eficazmente, aunque no será fácil.`,
            friendship: `La amistad entre ${zodiac1} y ${zodiac2} puede ser complicada. 
            ${zodiac1} podría sentir que ${zodiac2} es demasiado serio o lento, mientras que ${zodiac2} puede ver a ${zodiac1} como inestable o impredecible. 
            Si logran superar estas primeras impresiones y encontrar intereses comunes, su amistad podría crecer, pero requerirá esfuerzo y comprensión mutua.`
        }
    };

    let compatibilityScore = 0;

    // Comparar los signos occidentales
    if ((zodiac1 === "Aries" && zodiac2 === "Leo") || (zodiac1 === "Leo" && zodiac2 === "Aries")) {
        compatibilityScore += 3;
    } else if ((zodiac1 === "Géminis" && zodiac2 === "Libra") || (zodiac1 === "Libra" && zodiac2 === "Géminis")) {
        compatibilityScore += 3;
    } else {
        compatibilityScore += 1;
    }

    // Comparar los signos chinos
    if ((chineseZodiac1 === "Rata" && chineseZodiac2 === "Buey") || (chineseZodiac1 === "Buey" && chineseZodiac2 === "Rata")) {
        compatibilityScore += 3;
    } else if ((chineseZodiac1 === "Tigre" && chineseZodiac2 === "Caballo") || (chineseZodiac1 === "Caballo" && chineseZodiac2 === "Tigre")) {
        compatibilityScore += 3;
    } else {
        compatibilityScore += 1;
    }

    let compatibilityLevel = "Baja";
    if (compatibilityScore >= 5) {
        compatibilityLevel = "Muy alta";
    } else if (compatibilityScore >= 3) {
        compatibilityLevel = "Alta";
    } else if (compatibilityScore >= 2) {
        compatibilityLevel = "Moderada";
    }

    return {
        level: compatibilityLevel,
        article: `
            <strong>Compatibilidad en el amor:</strong> ${compatibilityDescriptions[compatibilityLevel].love}<br>
            <strong>Compatibilidad en el trabajo:</strong> ${compatibilityDescriptions[compatibilityLevel].work}<br>
            <strong>Compatibilidad en la amistad:</strong> ${compatibilityDescriptions[compatibilityLevel].friendship}
        `
    };
}


// Función para calcular la compatibilidad 
function calculateCompatibility() {
    const dob1 = new Date(document.getElementById("dob1").value);
    const dob2 = new Date(document.getElementById("dob2").value);

    if (!dob1 || !dob2) {
        alert("Por favor, selecciona ambas fechas.");
        return;
    }

    const zodiac1 = getZodiacSign(dob1);
    const zodiac2 = getZodiacSign(dob2);
    const chineseZodiac1 = getChineseZodiac(dob1.getFullYear());
    const chineseZodiac2 = getChineseZodiac(dob2.getFullYear());

    const personality1 = getZodiacPersonality(zodiac1);
    const personality2 = getZodiacPersonality(zodiac2);
    const chinesePersonality1 = getChineseZodiacPersonality(chineseZodiac1);
    const chinesePersonality2 = getChineseZodiacPersonality(chineseZodiac2);

    const compatibility = evaluateCompatibility(zodiac1, zodiac2, chineseZodiac1, chineseZodiac2);

    document.getElementById("result").innerHTML = `
        <h3>Compatibilidad Detallada</h3>
        <p><strong>Persona 1:</strong> ${zodiac1} (${chineseZodiac1})</p>
        <p><strong>Persona 2:</strong> ${zodiac2} (${chineseZodiac2})</p>

        <h4>Personalidad de ${zodiac1}:</h4>
        <p><strong>Comportamiento:</strong> ${personality1.behavior}</p>
        <p><strong>Fidelidad:</strong> ${personality1.fidelity}</p>
        <p><strong>Buena Suerte:</strong> ${personality1.luck}</p>

        <h4>Personalidad de ${zodiac2}:</h4>
        <p><strong>Comportamiento:</strong> ${personality2.behavior}</p>
        <p><strong>Fidelidad:</strong> ${personality2.fidelity}</p>
        <p><strong>Buena Suerte:</strong> ${personality2.luck}</p>

        <h4>Personalidad de ${chineseZodiac1}:</h4>
        <p><strong>Comportamiento:</strong> ${chinesePersonality1.behavior}</p>
        <p><strong>Fidelidad:</strong> ${chinesePersonality1.fidelity}</p>
        <p><strong>Buena Suerte:</strong> ${chinesePersonality1.luck}</p>

        <h4>Personalidad de ${chineseZodiac2}:</h4>
        <p><strong>Comportamiento:</strong> ${chinesePersonality2.behavior}</p>
        <p><strong>Fidelidad:</strong> ${chinesePersonality2.fidelity}</p>
        <p><strong>Buena Suerte:</strong> ${chinesePersonality2.luck}</p>

        <h4>Compatibilidad:</h4>
        <p>${compatibility.article}</p>
    `;
}
function clearFields() {
    document.getElementById("birthdate1").value = "";
    document.getElementById("birthdate2").value = "";
    document.getElementById("result").innerHTML = "";
}
