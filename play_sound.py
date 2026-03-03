"""
Plays a chime sound every time the script runs.
Generates the chime WAV file on first run using only the standard library.
Plays it using macOS's built-in afplay (no pip installs required).
"""

import math
import struct
import subprocess
import wave
from pathlib import Path

CHIME_FILE = Path(__file__).parent / "chime.wav"

# Chime parameters
SAMPLE_RATE = 44100
DURATION = 1.8      # seconds
FREQUENCIES = [659.3, 880.0, 1108.7]  # E5, A5, C#6 — a bright major chord
DECAY = 4.0         # higher = faster fade-out


def generate_chime(path: Path) -> None:
    """Generate a chime WAV file with a decaying sine wave blend."""
    n_samples = int(SAMPLE_RATE * DURATION)
    samples = []

    for i in range(n_samples):
        t = i / SAMPLE_RATE
        envelope = math.exp(-DECAY * t)
        value = sum(math.sin(2 * math.pi * f * t) for f in FREQUENCIES)
        value /= len(FREQUENCIES)   # normalize
        sample = int(value * envelope * 32767)
        samples.append(max(-32768, min(32767, sample)))

    with wave.open(str(path), "w") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)          # 16-bit
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(struct.pack(f"<{len(samples)}h", *samples))

    print(f"Chime generated: {path}")


def play_chime(path: Path) -> None:
    """Play a WAV file using macOS afplay."""
    subprocess.run(["afplay", str(path)], check=True)


if __name__ == "__main__":
    if not CHIME_FILE.exists():
        generate_chime(CHIME_FILE)

    play_chime(CHIME_FILE)
