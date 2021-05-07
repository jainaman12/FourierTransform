function dft(x) {
  const X = [];
  const N = x.length;
  for (let k = 0; k < N; k++) {
    let real = 0;
    let img = 0;
    for (let n = 0; n < N; n++) {
      const phi = (TWO_PI * k * n) / N;
      real += x[n] * cos(phi);
      img -= x[n] * sin(phi);
    }
    real = real / N;
    img = img / N;

    let freq = k;
    let amp = sqrt(real * real + img * img);
    let phase = atan2(img, real);

    X[k] = { real, img, freq, amp, phase };
  }
  return X;
}
