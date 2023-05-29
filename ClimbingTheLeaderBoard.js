function ClimbingLeaderBoard(ranked, player) {
  let uniqueRank = [];
  let finalRank = [];

  // filtering repeating number from ranked leader board
  for (let i = 0; i < ranked.length; i++) {
    if (!uniqueRank.includes(ranked[i])) {
      uniqueRank.push(ranked[i]);
    }
  }
  // supposing rank check be leader board
  let rankCheck = [...uniqueRank];
  for (let j = 0; j < player.length; j++) {
    // if our unique rank includes player[i] elements
    // then pushing that number index of unique rank to final Rank
    if (uniqueRank.includes(player[j])) {
      finalRank.push(uniqueRank.indexOf(player[j]) + 1);
    } else {
      // if not includes then inserting that player[j] element to rank check
      rankCheck.push(player[j]);
      // after including sorting that array in ascending order to gei index number of player[k]
      let sortedUpdateRnk = rankCheck.sort((a, b) => b - a);
      finalRank.push(sortedUpdateRnk.indexOf(player[j]) + 1);
    }
  }
  // finally you can get your all climbing the leader board
  console.log(finalRank);
  return finalRank;
}

const ranked = [100, 100, 50, 40, 40, 20, 10];
const player = [5, 25, 50, 120];
const result = ClimbingLeaderBoard(ranked, player);
