const { join } = require('path')
const { readdirSync, existsSync, mkdirSync } = require('fs')

const {render} = require('svgexport')

const vectorDir = join(__dirname, '..', 'vector')
const rasterDir = join(__dirname, '..', 'raster')

try {
    if (!existsSync(rasterDir)) mkdirSync(rasterDir)

    const dataFiles = []

    readdirSync(vectorDir).forEach(imageFile => {
        const extention = imageFile.split('.').pop()
        const fileName = imageFile.split('.').shift()

        if (extention === 'svg') dataFiles.push({
                input: [join(vectorDir, imageFile)],
                output: [join(rasterDir, `${fileName}.png`)]
            })
    })

    render(dataFiles, () => {})
} catch (e) {throw e}
