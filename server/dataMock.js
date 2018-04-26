/* eslint max-len: 0 */

const jobList = [
  {
    id: 1,
    image: 'https://place.cat/c/100/100',
    company: 'Deutcshe Bahn AG',
    title: 'Projektleiter Konstruktiver Ingenieurbau (w/m)'
  },
  {
    id: 2,
    image: 'https://place.cat/c/100/100',
    company: 'DSB-DeutschAkademie Sprachschule Berlin GmbH',
    title: 'Direkteinsteiger / Absolvent als Elektroingenieur ' +
    'für die Qualifizierung zum Bauüberwacher Oberleitung/50 Hz' +
    ' am Standort Berlin (w/m)'
  },
  {
    id: 3,
    image: 'https://place.cat/c/100/100',
    company: 'DRK Berlin Südwest gGmbH',
    title: 'Projektmitarbeiter — z. B. Sozialarbeiter / Sozialpädagoge oder ' +
    'Quereinsteiger (m/w) für unser Projekt Wohnraumvermittlung in Vollzeit'
  }
]

const jobDescriptions = {
  1: {
    title: 'Projektleiter Konstruktiver Ingenieurbau (w/m)',
    html: `<p><strong>HeyJobs ist die automatisierte Revolution im Recruiting – dafür suchen wir Dich als Customer Success Manager (w/m/divers) B2B in Vollzeit!</strong></p>
<p><strong>UNSER ANGEBOT:</strong></p>
<ul>
<li>Ein erfolgreiches Start-Up mit 40 Mitarbeitern aus 10 Nationen</li>
<li>Ein innovatives Produkt, was das Leben von Tausenden verbessert</li>
<li>Eine schöne und sehr gut angebundenes Office direkt am Kreuzberger Paul-Lincke-Ufer</li>
<li>Die Zusammenarbeit in einem hochqualifizierten, motivierten und internationalen Team</li>
<li>Eine umfassende Einarbeitung und Produktschulung</li>
<li>Regelmäßige Workshops und Feedbackgespräche mit deinem Vorgesetzten und deinen Kollegen, die dich auf persönlicher und professioneller Ebene voranbringen</li>
<li>Spaß und Wohlfühlen – z. B. mit Tischtennis, regelmäßigen onsite und offsite Teamevents, unserem wöchentlichen Team Lunch und vielem mehr</li>
<li>Kostenfreie Getränke, frisches Obst sowie allerlei Snacks</li>
<li>Bist du neugierig wie die Unternehmenskultur bei HeyJobs ist? Dann schau Dir gerne unsere Kununu(4,9/5) oder Glassdoor (5/5) Bewertungen an!</li>
</ul>
<p><strong>DEINE ROLLE:</strong></p>
<ul>
<li>Als Teil eines schnell wachsenden Teams nimmst du aktiv an der Gestaltung und Weiterentwicklung unseres Kundenservices teil</li>
<li>Du bist verantwortlich für das Onboarding unserer Kunden, leistest proaktiv Unterstützung und sorgst somit für eine einmalige und sehr gute Customer Experience</li>
<li>Du bist Ansprechpartner für unsere B2B-Kunden und kümmerst dich um die Bearbeitung der eingehenden Anfragen</li>
<li>Du unterstützt unsere Kunden bei der Erstellung der Jobanzeigen und bist verantwortlich für die Optimierung hinsichtlich des Inhaltes und der Auffindbarkeit</li>
<li>Du leitest proaktiv Feedback unserer B2B-Kunden an das Produktmanagement weiter</li>
<li>Du pflegst in Zusammenarbeit mit Sales unser CRM-System und hältst unsere Kundendaten stets aktuell</li>
</ul>
<p><strong>DEINE FÄHIGKEITEN:</strong></p>
<ul>
<li>Du konntest bereits erste Erfahrung im Umgang mit Kunden sammeln – Customer Support, Relationship Management oder in einer vergleichbaren kundenorientierten Tätigkeit</li>
<li>Du hast eine abgeschlossene Ausbildung und erste Berufserfahrung oder ein abgeschlossenes Studium</li>
<li>Du hast Freude am täglichen Umgang mit unseren Kunden und überzeugst mit hohen kommunikativen Fähigkeiten</li>
<li>Du bist ein Organisationstalent und behältst auch in schwierigen Situationen einen klaren Kopf</li>
<li>Erfahrungen in einem technisch orientierten StartUp/ Unternehmen sind von Vorteil</li>
<li>Du sprichst Deutsch fließend, Englisch ist ein Plus</li>
<li>Deine Arbeitszeiten: 40 Stunden die Woche (ca. 9.00 – 18.00 Uhr)</li>
<li>Dein Gehalt: 2400€ brutto/Monat</li>
</ul>
<p><strong>ÜBER HEYJOBS:</strong></p>
<p>Es herrscht Vollbeschäftigung in Deutschland und Unternehmen suchen händeringend nach Personal. Mit dem HeyJobs Performance Marketing lösen wir dieses Problem. Durch daten- und technologiebetriebenes Online Marketing finden wir die richtigen Bewerber für die offenen Positionen unserer Kunden. Unsere Vision ist es, Recruiting komplett zu automatisieren. Wir haben 4 Millionen € von Investoren erhalten, um diese Vision zu verwirklichen.</p>
<p><strong>Hast du Lust Unternehmen zu helfen Ihr Nr. 1 Problem zu lösen? Dann bist du bei uns richtig!</strong></p>`
  },
  2: {
    title: 'Direkteinsteiger / Absolvent als Elektroingenieur ' +
    'für die Qualifizierung zum Bauüberwacher Oberleitung/50 Hz' +
    ' am Standort Berlin (w/m)',
    html: `<p><strong>HeyJobs ist die automatisierte Revolution im Recruiting – dafür suchen wir Dich als Customer Success Manager (w/m/divers) B2B in Vollzeit!</strong></p>
<p><strong>UNSER ANGEBOT:</strong></p>
<ul>
<li>Ein erfolgreiches Start-Up mit 40 Mitarbeitern aus 10 Nationen</li>
<li>Ein innovatives Produkt, was das Leben von Tausenden verbessert</li>
<li>Eine schöne und sehr gut angebundenes Office direkt am Kreuzberger Paul-Lincke-Ufer</li>
<li>Die Zusammenarbeit in einem hochqualifizierten, motivierten und internationalen Team</li>
<li>Eine umfassende Einarbeitung und Produktschulung</li>
<li>Regelmäßige Workshops und Feedbackgespräche mit deinem Vorgesetzten und deinen Kollegen, die dich auf persönlicher und professioneller Ebene voranbringen</li>
<li>Spaß und Wohlfühlen – z. B. mit Tischtennis, regelmäßigen onsite und offsite Teamevents, unserem wöchentlichen Team Lunch und vielem mehr</li>
<li>Kostenfreie Getränke, frisches Obst sowie allerlei Snacks</li>
<li>Bist du neugierig wie die Unternehmenskultur bei HeyJobs ist? Dann schau Dir gerne unsere Kununu(4,9/5) oder Glassdoor (5/5) Bewertungen an!</li>
</ul>
<p><strong>DEINE ROLLE:</strong></p>
<ul>
<li>Als Teil eines schnell wachsenden Teams nimmst du aktiv an der Gestaltung und Weiterentwicklung unseres Kundenservices teil</li>
<li>Du bist verantwortlich für das Onboarding unserer Kunden, leistest proaktiv Unterstützung und sorgst somit für eine einmalige und sehr gute Customer Experience</li>
<li>Du bist Ansprechpartner für unsere B2B-Kunden und kümmerst dich um die Bearbeitung der eingehenden Anfragen</li>
<li>Du unterstützt unsere Kunden bei der Erstellung der Jobanzeigen und bist verantwortlich für die Optimierung hinsichtlich des Inhaltes und der Auffindbarkeit</li>
<li>Du leitest proaktiv Feedback unserer B2B-Kunden an das Produktmanagement weiter</li>
<li>Du pflegst in Zusammenarbeit mit Sales unser CRM-System und hältst unsere Kundendaten stets aktuell</li>
</ul>
<p><strong>DEINE FÄHIGKEITEN:</strong></p>
<ul>
<li>Du konntest bereits erste Erfahrung im Umgang mit Kunden sammeln – Customer Support, Relationship Management oder in einer vergleichbaren kundenorientierten Tätigkeit</li>
<li>Du hast eine abgeschlossene Ausbildung und erste Berufserfahrung oder ein abgeschlossenes Studium</li>
<li>Du hast Freude am täglichen Umgang mit unseren Kunden und überzeugst mit hohen kommunikativen Fähigkeiten</li>
<li>Du bist ein Organisationstalent und behältst auch in schwierigen Situationen einen klaren Kopf</li>
<li>Erfahrungen in einem technisch orientierten StartUp/ Unternehmen sind von Vorteil</li>
<li>Du sprichst Deutsch fließend, Englisch ist ein Plus</li>
<li>Deine Arbeitszeiten: 40 Stunden die Woche (ca. 9.00 – 18.00 Uhr)</li>
<li>Dein Gehalt: 2400€ brutto/Monat</li>
</ul>
<p><strong>ÜBER HEYJOBS:</strong></p>
<p>Es herrscht Vollbeschäftigung in Deutschland und Unternehmen suchen händeringend nach Personal. Mit dem HeyJobs Performance Marketing lösen wir dieses Problem. Durch daten- und technologiebetriebenes Online Marketing finden wir die richtigen Bewerber für die offenen Positionen unserer Kunden. Unsere Vision ist es, Recruiting komplett zu automatisieren. Wir haben 4 Millionen € von Investoren erhalten, um diese Vision zu verwirklichen.</p>
<p><strong>Hast du Lust Unternehmen zu helfen Ihr Nr. 1 Problem zu lösen? Dann bist du bei uns richtig!</strong></p>`
  },
  3: {
    title: 'Projektmitarbeiter — z. B. Sozialarbeiter / Sozialpädagoge oder ' +
    'Quereinsteiger (m/w) für unser Projekt Wohnraumvermittlung in Vollzeit',
    html: `<p><strong>HeyJobs ist die automatisierte Revolution im Recruiting – dafür suchen wir Dich als Customer Success Manager (w/m/divers) B2B in Vollzeit!</strong></p>
<p><strong>UNSER ANGEBOT:</strong></p>
<ul>
<li>Ein erfolgreiches Start-Up mit 40 Mitarbeitern aus 10 Nationen</li>
<li>Ein innovatives Produkt, was das Leben von Tausenden verbessert</li>
<li>Eine schöne und sehr gut angebundenes Office direkt am Kreuzberger Paul-Lincke-Ufer</li>
<li>Die Zusammenarbeit in einem hochqualifizierten, motivierten und internationalen Team</li>
<li>Eine umfassende Einarbeitung und Produktschulung</li>
<li>Regelmäßige Workshops und Feedbackgespräche mit deinem Vorgesetzten und deinen Kollegen, die dich auf persönlicher und professioneller Ebene voranbringen</li>
<li>Spaß und Wohlfühlen – z. B. mit Tischtennis, regelmäßigen onsite und offsite Teamevents, unserem wöchentlichen Team Lunch und vielem mehr</li>
<li>Kostenfreie Getränke, frisches Obst sowie allerlei Snacks</li>
<li>Bist du neugierig wie die Unternehmenskultur bei HeyJobs ist? Dann schau Dir gerne unsere Kununu(4,9/5) oder Glassdoor (5/5) Bewertungen an!</li>
</ul>
<p><strong>DEINE ROLLE:</strong></p>
<ul>
<li>Als Teil eines schnell wachsenden Teams nimmst du aktiv an der Gestaltung und Weiterentwicklung unseres Kundenservices teil</li>
<li>Du bist verantwortlich für das Onboarding unserer Kunden, leistest proaktiv Unterstützung und sorgst somit für eine einmalige und sehr gute Customer Experience</li>
<li>Du bist Ansprechpartner für unsere B2B-Kunden und kümmerst dich um die Bearbeitung der eingehenden Anfragen</li>
<li>Du unterstützt unsere Kunden bei der Erstellung der Jobanzeigen und bist verantwortlich für die Optimierung hinsichtlich des Inhaltes und der Auffindbarkeit</li>
<li>Du leitest proaktiv Feedback unserer B2B-Kunden an das Produktmanagement weiter</li>
<li>Du pflegst in Zusammenarbeit mit Sales unser CRM-System und hältst unsere Kundendaten stets aktuell</li>
</ul>
<p><strong>DEINE FÄHIGKEITEN:</strong></p>
<ul>
<li>Du konntest bereits erste Erfahrung im Umgang mit Kunden sammeln – Customer Support, Relationship Management oder in einer vergleichbaren kundenorientierten Tätigkeit</li>
<li>Du hast eine abgeschlossene Ausbildung und erste Berufserfahrung oder ein abgeschlossenes Studium</li>
<li>Du hast Freude am täglichen Umgang mit unseren Kunden und überzeugst mit hohen kommunikativen Fähigkeiten</li>
<li>Du bist ein Organisationstalent und behältst auch in schwierigen Situationen einen klaren Kopf</li>
<li>Erfahrungen in einem technisch orientierten StartUp/ Unternehmen sind von Vorteil</li>
<li>Du sprichst Deutsch fließend, Englisch ist ein Plus</li>
<li>Deine Arbeitszeiten: 40 Stunden die Woche (ca. 9.00 – 18.00 Uhr)</li>
<li>Dein Gehalt: 2400€ brutto/Monat</li>
</ul>
<p><strong>ÜBER HEYJOBS:</strong></p>
<p>Es herrscht Vollbeschäftigung in Deutschland und Unternehmen suchen händeringend nach Personal. Mit dem HeyJobs Performance Marketing lösen wir dieses Problem. Durch daten- und technologiebetriebenes Online Marketing finden wir die richtigen Bewerber für die offenen Positionen unserer Kunden. Unsere Vision ist es, Recruiting komplett zu automatisieren. Wir haben 4 Millionen € von Investoren erhalten, um diese Vision zu verwirklichen.</p>
<p><strong>Hast du Lust Unternehmen zu helfen Ihr Nr. 1 Problem zu lösen? Dann bist du bei uns richtig!</strong></p>`
  }
}

module.exports = { jobList, jobDescriptions }
