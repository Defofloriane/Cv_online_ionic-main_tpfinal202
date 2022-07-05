export class Cv {
  id: string = '';
  noms: string;
  prenoms: string;
  adresse: string;
  nationalite: string;
  dateNaissance: string;
  lieuNaissance: string;
  contacts: Contact[] = [];
  occupation: string;
  photo: string;
  email: Emails;
  comptes: Compte[] = [];
  formation: Formation[] = [];
  experiences: Experience[] = [];
  competences: Competences[] = [];
  langues: Langues[] = [];
  loisirs: Loisirs[] = [];
  profile: string;
}

export class Formation {
  id: number;
  diplome: string;
  structure: string;
  lieu: string;
  dateDebut: string;
  dateFin: string;
  description: string;
  constructor(
    id: number,
    diplome: string,
    structure: string,
    lieu: string,
    dateDebut: string,
    dateFin: string,
    description: string
  ) {
    this.id = id;
    this.diplome = diplome;
    this.structure = structure;
    this.lieu = lieu;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.description = description;
  }
}
export class Experience {
  constructor(
    public id: number,
    public poste: string,
    public entreprise: string,
    public ville: string,
    public dateDebut: string,
    public dateFin: string,
    public description: string
  ) {}
}
export class Competences {
  constructor(
    public id: number,
    public nom: string,
    public niveau: string,
    public categirie: string
  ) {}
}
export class Langues {
  id: number;
  nom: string;
  niveau: string;
  constructor(id: number, nom: string, niveau: string) {
    this.id = id;
    this.nom = nom;
    this.niveau = niveau;
  }
}

export class Loisirs {
  id: number;
  nom: string;
  constructor(id: number, nom: string) {
    this.id = id;
    this.nom = nom;
  }
}
export class Emails {
  id: number;
  email: string;
  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }
}

export class Compte {
  id: number;
  nom: string;
  lien: string;
  constructor(id: number, nom: string, lien: string) {
    this.id = id;
    this.nom = nom;
    this.lien = lien;
  }
}

export class Contact {
  id: number;
  contact: string;
  constructor(id: number, numero: string) {
    this.id = id;
    this.contact = numero;
  }
}
