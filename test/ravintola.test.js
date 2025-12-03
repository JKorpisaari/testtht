import { describe, it, expect } from 'vitest';
import ravintola from '../teht/ravintola';

describe('Ravintolan testaus', () => {
  it('laskee oikein', () => {
    expect(ravintola.laskeLasku(true, true, false)).toBe(14);
  });

  it('palauttaa arvon annetusta taulukosta (juomat)', () => {
    const testiArvoTaulukosta = ravintola.palautaTaulukonSatunnainenArvo(ravintola.juomat);
    expect(ravintola.juomat).toContain(testiArvoTaulukosta);
  });
});
