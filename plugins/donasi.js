let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL Axiata [081803522862]
│ • Indosat [0856-9174-8501]
│ • Gopay [081803522862]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281803522862
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa XL axiata"
3.)Dan terus masukkan nomor kami 081803522862 / 0856-9174-8501
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
