const mongoose = require('mongoose');

const customizerSchema = new mongoose.Schema({
	ThemeType: {
		ThemeSelect: {
			type: String,
			default: ""
		}
	},
	CustomizerTitle: {
		bgColor: {
			type: String,
			default: "#ffff"
		},
		ftColor: {
			type: String,
			default: "#ffff"
		},
		font: {
			type: String,
			default: ""
		},
		fontSize: {
			type: String,
			default: ""
		},
		fontSizeMobile: {
			type: String,
			default: ""
		},
		ftColorMobile: {
			type: String,
			default: "#2D2D2D"
		},
		dividerColor: {
			type: String,
			default: "#2D2D2D"
		},
		dividerThickness: {
			type: String,
			default: ""
		}
	},
	LayersPanel: {
		LayerPanelPos: {
			type: String,
			default: ""
		},
		LaPnbgColor: {
			type: String,
			default: "#ffff"
		},
		LaPnbrdColor: {
			type: String,
			default: "#ffff"
		},
		borderThickness: {
			type: String,
			default: ""
		},
		errorClr: {
			type: String,
			default: "#ffff"
		}
	},
	LayersList: {
		LayerFtClr: {
			type: String,
			default: "#ffff"
		},
		LayerFntSize: {
			type: String,
			default: ""
		},
		LayerFntFmly: {
			type: String,
			default: ""
		},
		LayerDscFntClr: {
			type: String,
			default: "#ffff"
		},
		LayerDscFntSize: {
			type: String,
			default: ""
		},
		LayerDscFntFmly: {
			type: String,
			default: ""
		},
		LayerDivClr: {
			type: String,
			default: "#ffff"
		},
		LayerDivThick: {
			type: String,
			default: ""
		}
	},
	LayersSettings: {
		LayerSetBrdClr: {
			type: String,
			default: "#ffff"
		},
		LayerSetSelBrdClr: {
			type: String,
			default: "#ffff"
		},
		LayerSetBrdThick: {
			type: String,
			default: ""
		},
		LayerSetSelBrdThick: {
			type: String,
			default: ""
		},
		LayerSetFtClr: {
			type: String,
			default: "#ffff"
		},
		LayerSetFtSize: {
			type: String,
			default: ""
		},
		LayerSetFtFmly: {
			type: String,
			default: ""
		},
		LayerSetPopUpBkgClr: {
			type: String,
			default: "#ffff"
		},
		LayerSetPopUpBkgRound: {
			type: String,
			default: ""
		},
		LayerSetDescFtClr: {
			type: String,
			default: "#ffff"
		},
		LayerSetDescFtSize: {
			type: String,
			default: ""
		},
		LayerSetDescFtFmly: {
			type: String,
			default: ""
		}
	},
	ThumbnailButtonList: {
		ThumbnailRounding: {
			type: String,
			default: ""
		},
		ThumbnailColoumn: {
			type: String,
			default: ""
		},
		ThumbnailWidth: {
			type: String,
			default: ""
		},
		ThumbnailHeight: {
			type: String,
			default: ""
		},
		ThumbnailVerticalMargin: {
			type: String,
			default: ""
		},
		ThumbnailRoundMob: {
			type: String,
			default: ""
		},
		ThumbnailWidthMob: {
			type: String,
			default: ""
		},
		ThumbnailHeightMob: {
			type: String,
			default: ""
		},
		ThumbnailMargintMob: {
			type: String,
			default: ""
		}
	},
	InputTextDropDown: {
		InputTxtBgClr: {
			type: String,
			default: "#ffff"
		},
		InputTxtHeight: {
			type: String,
			default: ""
		},
		InputTxtRoundings: {
			type: String,
			default: ""
		},
		InputTxtBrdClr: {
			type: String,
			default: "#ffff"
		},
		InputTxtFontFmly: {
			type: String,
			default: ""
		},
		InputTextFontClr: {
			type: String,
			default: "#ffff"
		},
		InputTextFontSize: {
			type: String,
			default: ""
		},
		InputTextDrpDownMenuBgClr: {
			type: String,
			default: "#ffff"
		},
		InputTextDrpDownHovOpClr: {
			type: String,
			default: "#ffff"
		},
		InputTextDrpDownSelcOpClr: {
			type: String,
			default: "#ffff"
		},
		InputTextDrpDownMenuFtClr: {
			type: String,
			default: "#ffff"
		}
	},
	FileUpload: {
		FileUploadBgClr: {
			type: String,
			default: "#ffffff"
		},
		FileUploadBrdClr: {
			type: String,
			default: "#cccccc"
		},
		FileUploadRound: {
			type: String,
			default: "5px"
		},
		FileUploadFtClr: {
			type: String,
			default: "#333333"
		},
		FileUploadLinkClr: {
			type: String,
			default: "#007bff"
		},
		FileUploadFontSize: {
			type: String,
			default: "14px"
		},
		FileUploadImgRound: {
			type: String,
			default: "5px"
		},
		FileUploadRemoveIptBgClr: {
			type: String,
			default: "#ffffff"
		},
		FileUploadRemoveIptHovBgClr: {
			type: String,
			default: "#f0f0f0"
		},
		FileUploadRemoveIptIconBgClr: {
			type: String,
			default: "#333333"
		}
	},
	PrintReady: {
		PrintReadyEditionClr: {
			type: String,
			default: "#ff0000"
		},
		PrintReadyEditionIcClr: {
			type: String,
			default: "#ffffff"
		},
		PrintReadyEditionDPIIndTxtClr: {
			type: String,
			default: "#333333"
		},
		LowQualityTextClr: {
			type: String,
			default: "#ff0000"
		},
		LowQualityMsgBkgClr: {
			type: String,
			default: "#ffffcc"
		},
		LowQualityMsgTextClr: {
			type: String,
			default: "#333333"
		},
		HighQualClr: {
			type: String,
			default: "#008000"
		}
	},
	Customizer: {
		LoadingIconClr: {
			type: String,
			default: "#009688"
		},
		BkgClr: {
			type: String,
			default: "#f0f0f0"
		}
	},
	StepTitle: {
		BkgColor: {
			type: String,
			default: "#f0f0f0"
		},
		SwitchStepsArrow: {
			type: String,
			default: "#009688"
		}
	},
	SummaryTitle: {
		FontFamily: {
			type: String,
			default: "Arial, sans-serif"
		},
		FontColor: {
			type: String,
			default: "#333333"
		},
		FontSize: {
			type: String,
			default: "18px"
		}
	},
	AddToCart: {
		BorderClr: {
			type: String,
			default: "#cccccc"
		},
		BorderThickness: {
			type: String,
			default: "1px"
		},
		Rounding: {
			type: String,
			default: "5px"
		},
		FontFamily: {
			type: String,
			default: "Arial, sans-serif"
		},
		FontColor: {
			type: String,
			default: "#ffffff"
		},
		BackgroundClr: {
			type: String,
			default: "#007bff"
		},
		HoverBkgColor: {
			type: String,
			default: "#0056b3"
		},
		FontSize: {
			type: String,
			default: "16px"
		}
	},
	ConfirmBtn: {
		FontClr: {
			type: String,
			default: "#ffffff"
		},
		BackgroundClr: {
			type: String,
			default: "#28a745"
		}
	},
	Price: {
		PricePosition: {
			type: String,
			default: "right"
		},
		PriceFont: {
			type: String,
			default: "Arial, sans-serif"
		},
		FontSize: {
			type: String,
			default: "16px"
		},
		FontSizeMb: {
			type: String,
			default: "14px"
		},
		FontColour: {
			type: String,
			default: "#007bff"
		},
		ShowExtraPrice: {
			type: String,
			default: "true"
		},
		ExtraPriceFontClr: {
			type: String,
			default: "#ff0000"
		},
		ExtraPriceBrClr: {
			type: String,
			default: "#cccccc"
		},
		ExtraPriceBgClr: {
			type: String,
			default: "#ffffff"
		}
	},
	SwitchViewArrows: {
		Color: {
			type: String,
			default: "#007bff"
		}
	},
	SwitchViewDots: {
		colour: {
			type: String,
			default: "#007bff"
		},
		SelectColour: {
			type: String,
			default: "#333333"
		}
	},
	zoom: {
		ZoomClr: {
			type: String,
			default: "#007bff"
		}
	},
	ShareButton: {
		DisplayShrBtn: {
			type: String,
			default: "true"
		},
		IconOrTxtButton: {
			type: String,
			default: "icon"
		},
		ShrBtnClr: {
			type: String,
			default: "#007bff"
		},
		TextBtnRnd: {
			type: String,
			default: "5px"
		},
		TextBtnLnth: {
			type: String,
			default: "100px"
		}
	},
	DescriptionMobile: {
		DescMbClr: {
			type: String,
			default: "#333333"
		},
		DescMbBkgClr: {
			type: String,
			default: "#ffffff"
		},
		DescMbFontFmly: {
			type: String,
			default: "Arial, sans-serif"
		},
		DescMbFontSize: {
			type: String,
			default: "14px"
		}
	},
	OutOfStock: {
		badgeIconClr: {
			type: String,
			default: "#ffffff"
		},
		badgeBkgClr: {
			type: String,
			default: "#ff0000"
		},
		badgeBrWidth: {
			type: String,
			default: "1px"
		},
		badgeBrClr: {
			type: String,
			default: "#ffffff"
		},
		BannerTextClr: {
			type: String,
			default: "#ffffff"
		},
		BannerBgClr: {
			type: String,
			default: "#ff0000"
		}
	}
});

const Customizer = mongoose.model('Customizer', customizerSchema);

module.exports = Customizer;
