import { describe, expect, it } from 'vitest';
const Laskin = require('../teht/laskin.js');

describe('Laskimen testaus', function () {
  const laskin = Laskin;

  it('Tarkistetaan, että plusLasku-funktio palauttaa oikean summan 1 + 5', function () {
    const checkSumma = laskin.plusLasku(1, 5);
    expect(checkSumma).toBe(6);
  });

  it('Tarkistetaan, että miinusLasku-funktio palauttaa oikean erotuksen 5 - 2', function () {
    const checkSumma = laskin.miinusLasku(5, 2);
    expect(checkSumma).toBe(3);
  });
});



