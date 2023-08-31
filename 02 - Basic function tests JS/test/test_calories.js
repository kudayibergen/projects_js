const chai = require('chai');
const expect = chai.expect;
const calculateCalories = require('../Function_DailyCalorieIntake.js'); 

describe('calculateCalories', function() {
  // вычисляем калории для мужчины по параметрам: вес, рост, возраст, пол, уровень активности "нет"
  it('should calculate calories for a male with no activity', function() {
    const result = calculateCalories(70, 175, 30, 'male', 'none');
    // Ожидаемый результат: примерно 2078.44 калорий.
    expect(result).to.be.closeTo(2078.44, 0.01);
  });

  // Вычисляем калории для женщины с параметрами: вес 60 кг, рост 160 см, возраст 25 лет, пол "женщина", уровень активности "мало"
  it('should calculate calories for a female with little activity', function() {
    const result = calculateCalories(60, 160, 25, 'female', 'little');
    // Ожидаемый результат: примерно 1893.39 калорий
    expect(result).to.be.closeTo(1893.39, 0.01);
  });

  // Вычисляем калории для мужчины с параметрами: вес 80 кг, рост 180 см, возраст 28 лет, пол "мужчина", уровень активности "активно"
  it('should calculate calories for a male with active activity', function() {
    const result = calculateCalories(80, 180, 28, 'male', 'active');
    // Ожидаемый результат: примерно 3269.97 калорий.
    expect(result).to.be.closeTo(3269.97, 0.01);
  });
});