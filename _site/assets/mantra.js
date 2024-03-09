var clicks = 0;

function count() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function resetcnt() {
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
  };
  