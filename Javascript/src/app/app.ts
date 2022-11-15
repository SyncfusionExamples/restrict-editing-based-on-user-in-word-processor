
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { TitleBar } from './title-bar';
import { ColorPicker, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';


/**
 * Default document editor sample
 */


let hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';

let container: DocumentEditorContainer = new DocumentEditorContainer({ enableToolbar: true, height: '700px' });
DocumentEditorContainer.Inject(Toolbar);
container.serviceUrl = hostUrl + 'api/documenteditor/';
container.appendTo('#container');
container.showPropertiesPane = false;
container.documentEditor.currentUser = 'engineer@mycompany.com';
let titleBar: TitleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.documentEditor, true);
let data: any = {
    "sections": [
        {
            "blocks": [
                {
                    "characterFormat": {
                        "fontSize": 14.0,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Name",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        },
                        {
                            "text": ":",
                            "characterFormat": {
                                "fontSize": 14.0,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "1348272392",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "engineer@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter name"
                                                },
                                                {
                                                    "editRangeId": "1348272392",
                                                    "editableRangeStart": {
                                                        "editRangeId": "1348272392",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Designation:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "808933422",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "engineer@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter designation"
                                                },
                                                {
                                                    "editRangeId": "808933422",
                                                    "editableRangeStart": {
                                                        "editRangeId": "808933422",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Email Address:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        },
                        {
                            "name": "_GoBack",
                            "bookmarkType": 0
                        },
                        {
                            "name": "_GoBack",
                            "bookmarkType": 1
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "810441411",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "engineer@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter email address"
                                                },
                                                {
                                                    "editRangeId": "810441411",
                                                    "editableRangeStart": {
                                                        "editRangeId": "810441411",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Feedbacks:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "1016946268",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "manager@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter the feedbacks"
                                                },
                                                {
                                                    "editRangeId": "1016946268",
                                                    "editableRangeStart": {
                                                        "editRangeId": "1016946268",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "manager@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Review comments:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "1373703080",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "manager@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter the comments"
                                                },
                                                {
                                                    "editRangeId": "1373703080",
                                                    "editableRangeStart": {
                                                        "editRangeId": "1373703080",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "manager@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                }
            ],
            "headersFooters": {
                "header": {
                    "blocks": [
                        {
                            "paragraphFormat": {
                                "styleName": "Header"
                            },
                            "inlines": [
                                {
                                    "text": "Employee’s Details "
                                }
                            ]
                        }
                    ]
                }
            },
            "sectionFormat": {
                "headerDistance": 36.0,
                "footerDistance": 36.0,
                "pageWidth": 612.0,
                "pageHeight": 792.0,
                "leftMargin": 72.0,
                "rightMargin": 72.0,
                "topMargin": 72.0,
                "bottomMargin": 72.0,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "bidi": false
            }
        }
    ],
    "characterFormat": {
        "fontSize": 11.0,
        "fontFamily": "Calibri",
        "fontSizeBidi": 11.0,
        "fontFamilyBidi": "Calibri"
    },
    "paragraphFormat": {
        "afterSpacing": 8.0,
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple"
    },
    "background": {
        "color": "#FFFFFFFF"
    },
    "styles": [
        {
            "type": "Paragraph",
            "name": "Normal",
            "next": "Normal"
        },
        {
            "type": "Character",
            "name": "Default Paragraph Font"
        },
        {
            "type": "Paragraph",
            "name": "List Paragraph",
            "basedOn": "Normal",
            "paragraphFormat": {
                "leftIndent": 36.0,
                "contextualSpacing": true
            }
        },
        {
            "type": "Paragraph",
            "name": "Header",
            "basedOn": "Normal",
            "next": "Normal",
            "link": "Header Char",
            "paragraphFormat": {
                "afterSpacing": 0.0,
                "lineSpacing": 1.0,
                "lineSpacingType": "Multiple",
                "tabs": [
                    {
                        "tabJustification": "Center",
                        "position": 234.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    },
                    {
                        "tabJustification": "Right",
                        "position": 468.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    }
                ]
            }
        },
        {
            "type": "Character",
            "name": "Header Char",
            "basedOn": "Default Paragraph Font"
        },
        {
            "type": "Paragraph",
            "name": "Footer",
            "basedOn": "Normal",
            "link": "Footer Char",
            "paragraphFormat": {
                "afterSpacing": 0.0,
                "lineSpacing": 1.0,
                "lineSpacingType": "Multiple",
                "tabs": [
                    {
                        "tabJustification": "Center",
                        "position": 234.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    },
                    {
                        "tabJustification": "Right",
                        "position": 468.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    }
                ]
            }
        },
        {
            "type": "Character",
            "name": "Footer Char",
            "basedOn": "Default Paragraph Font"
        }
    ],
    "defaultTabWidth": 36.0,
    "formatting": false,
    "protectionType": "ReadOnly",
    "enforcement": true,
    "hashValue": "TQGuJuLceQCe234Ygx4q6NFgHpRMfi1hjFTojyKzbQOkwk+ckEM9CjNIdkiUhSR/e/7sfMxO4sbPcg/DBzztMg==",
    "saltValue": "FXbkr1RtDIIIZfwlM71dMg=="
};
container.documentEditor.open(JSON.stringify((<any>data)));
container.documentEditor.documentName = 'Document Protection';
titleBar.updateDocumentTitle();

container.documentChange = (): void => {
    titleBar.updateDocumentTitle();
    container.documentEditor.focusIn();
};

// defined the array of data
let userList: string[] = ['engineer@mycompany.com'];

let dropDownListObject: DropDownList = new DropDownList({
    dataSource: userList,
    change: (e: ChangeEventArgs) => {
        container.documentEditor.currentUser = e.value as string;
    }
});
dropDownListObject.appendTo('#ddlelement');
dropDownListObject.value = 'engineer@mycompany.com';
dropDownListObject.addItem('manager@mycompany.com');
let colorPicker: ColorPicker = new ColorPicker({
    value: container.documentEditor.userColor,
    change: (e: ColorPickerEventArgs) => {
        container.documentEditor.userColor = e.currentValue.hex;
    }
});
colorPicker.appendTo('#color-picker');


