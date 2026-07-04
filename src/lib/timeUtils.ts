/**
 * Format countdown time in milliseconds to MM:SS or HH:MM:SS format.
 */
export function formatTime(timeInMilliseconds: number, forceHours = false): string {
  const totalSeconds = Math.floor(timeInMilliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (forceHours || hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format stopwatch time in milliseconds to MM:SS.CC or HH:MM:SS.CC format.
 */
export function formatStopwatchTime(timeInMilliseconds: number): string {
  const totalCentiseconds = Math.floor(timeInMilliseconds / 10);
  const hours = Math.floor(totalCentiseconds / 360000);
  const minutes = Math.floor((totalCentiseconds % 360000) / 6000);
  const seconds = Math.floor((totalCentiseconds % 6000) / 100);
  const centiseconds = totalCentiseconds % 100;
  const fractional = centiseconds.toString().padStart(2, '0');

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${fractional}`;
  }

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${fractional}`;
}

/**
 * Convert minutes to seconds
 */
export function minutesToSeconds(minutes: number): number {
  return minutes * 60;
}

/**
 * Parse time input string (e.g., "5:30" or "90") to seconds
 */
export function parseTimeInput(input: string): number {
  const trimmed = input.trim();
  
  // If it contains a colon, treat as MM:SS format
  if (trimmed.includes(':')) {
    const parts = trimmed.split(':');
    if (parts.length === 2) {
      const minutes = parseInt(parts[0], 10) || 0;
      const seconds = parseInt(parts[1], 10) || 0;
      return minutes * 60 + seconds;
    }
    if (parts.length === 3) {
      const hours = parseInt(parts[0], 10) || 0;
      const minutes = parseInt(parts[1], 10) || 0;
      const seconds = parseInt(parts[2], 10) || 0;
      return hours * 3600 + minutes * 60 + seconds;
    }
  }
  
  // Otherwise treat as minutes
  const minutes = parseInt(trimmed, 10) || 0;
  return minutes * 60;
}

/**
 * Create audio notification sound
 */
export function playNotificationSound(): void {
  try {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800; // 800Hz frequency
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (error) {
    console.warn('Could not play notification sound:', error);
  }
}
