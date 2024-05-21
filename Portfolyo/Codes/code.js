document.addEventListener('DOMContentLoaded', function() {
    const harfLabel = document.getElementById('harfLabel');
    const metin = harfLabel.textContent.trim(); // Etiketin içeriğini al ve boşlukları temizle
    harfLabel.textContent = ''; // Etiketin içeriğini temizle

    // Her bir harfi span içine alarak etikete ekle
    for (let i = 0; i < metin.length; i++) {
        const span = document.createElement('span');
        span.textContent = metin[i];
        harfLabel.appendChild(span);
    }

    // Harfleri animasyonlu şekilde görünür hale getir
    const harfSpanleri = document.querySelectorAll('.harf-label span');
    harfSpanleri.forEach(function(harfSpan, index) {
        setTimeout(function() {
            harfSpan.classList.add('harf-goster');
        }, index * 100); // Her bir harf için animasyon gecikmesi
    });
});
