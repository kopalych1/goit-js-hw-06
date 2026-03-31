const profile = {
  username: 'Jacob',
  playTime: 300,
  changeUsername(newName) {
    if (typeof newName !== 'string')
      throw new TypeError(`Expected string, got: ${typeof newName}`);
    this.username = newName;
  },
  updatePlayTime(hours) {
    if (typeof hours !== 'number' || isNaN(hours))
      throw new TypeError(`Expected number, got: ${typeof hours}`);

    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log('----- TASK 3 -----');

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

console.log('');
