function rand(min, max) {
  if (min === max) return min;
  (min > max) [min, max] = [max, min];

  return Math.floor(Math.random() * (max - min + 1) + min);
}