/**
 * Membuat URL WhatsApp 'wa.me' yang sudah di-encode
 * @param {string} phone - Nomor telepon (format 628xxxx)
 * @param {string} message - Pesan teks yang ingin dikirim
 * @returns {string} URL lengkap
 */
export function makeWhatsAppLink(phone, message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}