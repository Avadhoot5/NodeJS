const { URL } = require('../model/urlShort');

const handleShortUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({error: 'Please provide an URL'});
    }
    const { nanoid } = await import('nanoid');
    const shortID = nanoid(8);
    const urlDone = await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []
    })
    if (urlDone) {
        return res.status(200).json({id: shortID});
    }
}

const handleRedirect = async (req, res) => {
    const shortId = req.params.id;
    try {
        const entry = await URL.findOneAndUpdate(
            {
                shortId,
            }, {
                $push: {
                    visitHistory: {
                        timestamp: Date.now()
                    }
                }
            }
        );
        if (entry) {
            res.redirect(entry.redirectURL);
        } else {
            return res.status(400).json({error: 'no such ID found'});
        }
    } catch (error) {
        return res.status(400).json({error: 'no such ID found'});
    }
}

const handleAnalytics = async (req, res) => {
    const shortId = req.params.id;
    try {
        const entry = await URL.findOne({shortId});
        if (entry) {
            return res.status(200).json({
                'totalClicks': entry.visitHistory.length,
                'analytics': entry.visitHistory
            })
        }
    } catch (error) {
        return res.status(400).json({error: 'no such ID found'});
    }
}

module.exports = {
    handleShortUrl,
    handleRedirect,
    handleAnalytics
}