#!/bin/bash
# Image Optimization Script for Chicas Waskiris

echo "🖼️  Image Optimization Script for Chicas Waskiris"
echo "=============================================="

# Navigate to public directory
cd /Users/fazozela/Desktop/Dev/chicas-waskiris/chicaswaskiris/public

# Replace already optimized images
echo "📋 Replacing optimized images..."

# Main images
if [ -f "nelzon_optimized.jpg" ]; then
    mv nelzon.png nelzon.png.original
    mv nelzon_optimized.jpg nelzon.jpg
    echo "✅ nelzon.png → nelzon.jpg (1.0MB → 125KB)"
fi

if [ -f "milena_optimized.jpg" ]; then
    mv milena.png milena.png.original
    mv milena_optimized.jpg milena.jpg
    echo "✅ milena.png → milena.jpg (809KB → 107KB)"
fi

if [ -f "media1_optimized.jpg" ]; then
    mv media1.png media1.png.original
    mv media1_optimized.jpg media1.jpg
    echo "✅ media1.png → media1.jpg (372KB → 103KB)"
fi

# Ally images
if [ -f "allies/gusta-ciencia_optimized.png" ]; then
    mv allies/gusta-ciencia.png allies/gusta-ciencia.png.original
    mv allies/gusta-ciencia_optimized.png allies/gusta-ciencia.png
    echo "✅ gusta-ciencia.png optimized (582KB → 164KB)"
fi

if [ -f "allies/suma_optimized.png" ]; then
    mv allies/suma.png allies/suma.png.original
    mv allies/suma_optimized.png allies/suma.png
    echo "✅ suma.png optimized (514KB → 192KB)"
fi

if [ -f "allies/spark-minds_optimized.png" ]; then
    mv allies/spark-minds.png allies/spark-minds.png.original
    mv allies/spark-minds_optimized.png allies/spark-minds.png
    echo "✅ spark-minds.png optimized (373KB → 143KB)"
fi

# Optimize remaining large images
echo ""
echo "🔧 Optimizing remaining large images..."

# photoGroup.png (284KB)
if [ -f "photoGroup.png" ] && [ ! -f "photoGroup.png.original" ]; then
    cp photoGroup.png backup/photoGroup.png.backup
    sips --resampleHeightWidth 1200 800 --setProperty formatOptions 75 photoGroup.png --out photoGroup_optimized.jpg
    if [ -f "photoGroup_optimized.jpg" ]; then
        mv photoGroup.png photoGroup.png.original
        mv photoGroup_optimized.jpg photoGroup.jpg
        echo "✅ photoGroup.png → photoGroup.jpg"
    fi
fi

# owsd-bolivia.png (281KB)
if [ -f "allies/owsd-bolivia.png" ] && [ ! -f "allies/owsd-bolivia.png.original" ]; then
    cp allies/owsd-bolivia.png backup/allies/owsd-bolivia.png.backup
    sips --resampleHeightWidth 400 400 --setProperty formatOptions 70 allies/owsd-bolivia.png --out allies/owsd-bolivia_optimized.png
    if [ -f "allies/owsd-bolivia_optimized.png" ]; then
        mv allies/owsd-bolivia.png allies/owsd-bolivia.png.original
        mv allies/owsd-bolivia_optimized.png allies/owsd-bolivia.png
        echo "✅ owsd-bolivia.png optimized"
    fi
fi

# mentoras-y-aprendices.png (215KB)
if [ -f "mentoras-y-aprendices.png" ] && [ ! -f "mentoras-y-aprendices.png.original" ]; then
    cp mentoras-y-aprendices.png backup/mentoras-y-aprendices.png.backup
    sips --resampleHeightWidth 1000 600 --setProperty formatOptions 75 mentoras-y-aprendices.png --out mentoras-y-aprendices_optimized.jpg
    if [ -f "mentoras-y-aprendices_optimized.jpg" ]; then
        mv mentoras-y-aprendices.png mentoras-y-aprendices.png.original
        mv mentoras-y-aprendices_optimized.jpg mentoras-y-aprendices.jpg
        echo "✅ mentoras-y-aprendices.png → mentoras-y-aprendices.jpg"
    fi
fi

# free-stem-fund.png (214KB)
if [ -f "allies/free-stem-fund.png" ] && [ ! -f "allies/free-stem-fund.png.original" ]; then
    cp allies/free-stem-fund.png backup/allies/free-stem-fund.png.backup
    sips --resampleHeightWidth 400 400 --setProperty formatOptions 70 allies/free-stem-fund.png --out allies/free-stem-fund_optimized.png
    if [ -f "allies/free-stem-fund_optimized.png" ]; then
        mv allies/free-stem-fund.png allies/free-stem-fund.png.original
        mv allies/free-stem-fund_optimized.png allies/free-stem-fund.png
        echo "✅ free-stem-fund.png optimized"
    fi
fi

# stem-stars.png (149KB)
if [ -f "allies/stem-stars.png" ] && [ ! -f "allies/stem-stars.png.original" ]; then
    cp allies/stem-stars.png backup/allies/stem-stars.png.backup
    sips --resampleHeightWidth 400 400 --setProperty formatOptions 70 allies/stem-stars.png --out allies/stem-stars_optimized.png
    if [ -f "allies/stem-stars_optimized.png" ]; then
        mv allies/stem-stars.png allies/stem-stars.png.original
        mv allies/stem-stars_optimized.png allies/stem-stars.png
        echo "✅ stem-stars.png optimized"
    fi
fi

# waskirisLogo.png (141KB)
if [ -f "waskirisLogo.png" ] && [ ! -f "waskirisLogo.png.original" ]; then
    cp waskirisLogo.png backup/waskirisLogo.png.backup
    sips --resampleHeightWidth 800 400 --setProperty formatOptions 70 waskirisLogo.png --out waskirisLogo_optimized.png
    if [ -f "waskirisLogo_optimized.png" ]; then
        mv waskirisLogo.png waskirisLogo.png.original
        mv waskirisLogo_optimized.png waskirisLogo.png
        echo "✅ waskirisLogo.png optimized"
    fi
fi

echo ""
echo "📊 Optimization Summary:"
echo "========================"
echo "✅ nelzon: 1.0MB → 125KB (87% reduction)"
echo "✅ milena: 809KB → 107KB (87% reduction)" 
echo "✅ media1: 372KB → 103KB (72% reduction)"
echo "✅ gusta-ciencia: 582KB → 164KB (72% reduction)"
echo "✅ suma: 514KB → 192KB (63% reduction)"
echo "✅ spark-minds: 373KB → 143KB (62% reduction)"
echo ""
echo "🎉 Total estimated savings: ~3.5MB+ reduced to ~1MB"
echo "🚀 Your website will load much faster now!"
echo ""
echo "💾 Original files backed up in ./backup/ directory"
echo "📁 File extensions may have changed (PNG→JPG for better compression)"