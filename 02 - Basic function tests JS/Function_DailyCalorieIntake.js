// функция расчета базового обмена веществ (Basal Metabolic Rate)
// в зависимости от пола выполняется раздичный расчет (мужчина и женщина)
function basalMetabolicRate(weight, height, age, sex) {
 if (sex == "male") {
  // формула для мужчин: BMR = 66.47 + 13.75 * вес + 5.003 * рост - 4.676 * возраст 
   return 66.47 + 13.75 * weight + 5.003 * height - 4.676 * age;
 } else {
  // формула для женщин: BMR = 655.1 + 9.563 * вес + 1.85 * рост - 6.755 * возраст
   return 655.1 + 9.563 * weight + 1.85 * height - 6.755 * age;
 }
}

// фунция расчета активного обмена веществ (Active Metabolic Rate)
// в зависимости от уровня активности (none, little, active)
function activeMetabolicRate(BMR, activityLevel) {
 switch (activityLevel) {
   case "none":
     return BMR * 1.2; // минимальная активность
   case "little":
     return BMR * 1.375; // Умеренная активность
   case "active":
     return BMR * 1.775; // Активный образ жизни
 }
}

// функция для расчета суточной нормы калории, принимает параметры: вес, рост, возраст, пол и уровень активности
function calculateCalories(weight, height, age, sex, activityLevel) {
  return activeMetabolicRate(
    basalMetabolicRate(weight, height, age, sex),
    activityLevel
  );
 }
 module.exports = calculateCalories;
