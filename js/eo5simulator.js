document.addEventListener("DOMContentLoaded", () => {
  simulator = new eo5Simulator();
});

class eo5Simulator extends Simulator {
  get defaultClass() {
    return "Shaman - Blood";
  }

  get levelCaps() {
    return [99, 109, 119, 130];
  }

  get retireBonuses() {
    return { "30-59": 3, "60-69": 4, "70-89": 5, "90-119": 6, "120-129": 7, "130": 10 }
  }

  get secondaryPenalty() {
    return 1;
  }

  get treeColumns() {
    return 4;
  }

  get secondaryLabel() {
    return "Race Skills";
  }

  get secondaryUsesClassPool() {
    return false;
  }

  get secondaryPointBonus() {
    return 0;
  }
}
